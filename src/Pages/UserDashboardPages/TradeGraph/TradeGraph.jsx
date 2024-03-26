import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
const TradeGraph = () => {
  const MAX_DATA_POINTS = 30;
  const [chartData, setChartData] = useState({
    series: [
      {
        data: [],
      },
    ],
    options: {
      chart: {
        animations: {
          enabled: false,
          easing: "easeinout",
          speed: 800,
          animateGradually: {
            enabled: false,
            delay: 150,
          },
          dynamicAnimation: {
            enabled: false,
            speed: 350,
          },
        },
        type: "candlestick",
        height: 350,
      },
      xaxis: {
        type: "datetime",
        labels: {
          formatter: function (value) {
            const date = new Date(value);
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const ampm = hours >= 12 ? "PM" : "AM";
            const formattedHours = hours % 12 || 12; // Convert to 12-hour format
            return `${formattedHours}:${minutes}:${date.getSeconds()} ${ampm}`;
          },
        },
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
        labels: {
          formatter: function(value) {
            return Math.round(value); 
          }
        }
      },
    },
  });
  useEffect(() => {
    const interval = setInterval(() => {
      // Generate random values for OHLC with reduced differences
      const randomOpen = Math.random() * 10;
      const randomHigh = randomOpen + Math.random() * 3;
      const randomLow = randomOpen - Math.random() * 4;
      const randomClose = randomLow + Math.random() * 10;
      const newDataPoint = {
        x: new Date(),
        y: [randomOpen, randomHigh, randomLow, randomClose],
      };
      setChartData((prevChartData) => ({
        series: [
          {
            data: [...prevChartData.series[0].data.slice(-MAX_DATA_POINTS), newDataPoint],
          },
        ],
        options: prevChartData.options,
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div id="chart">
      <ReactApexChart options={chartData.options} series={chartData.series} type="candlestick" height={350} />
    </div>
  );
};
export default TradeGraph;