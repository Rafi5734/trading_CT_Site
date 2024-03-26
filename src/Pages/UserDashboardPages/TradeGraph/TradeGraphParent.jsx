import { useEffect, useState } from "react";
import TradeGraph from "./TradeGraph";
import { AiOutlineArrowDown } from "react-icons/ai";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
const TradeGraphParent = () => {
  const { user, userToken, userEmail, handleGetUserDetails, globalData } =
    useContext(AuthContext);

  const [latestPrice, setLatestPrice] = useState([]);
  const [latestAmount, setLatestAmount] = useState([]);
  const [latestTotal, setLatestTotal] = useState([]);

  const [lastPrice, setLastPrice] = useState([]);
  const [lastAmount, setLastAmount] = useState([]);
  const [lastTotal, setLastTotal] = useState([]);

  const [market, setMarket] = useState([]);
  const [change, setChange] = useState([]);
  const [marketPrice, setMarketPrice] = useState([]);

  // Function to generate random numbers within a specified range
  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  // Three functionality for Latest Price
  useEffect(() => {
    // Function to generate an array of 10 continuously changing numbers
    function generateLatestPrice() {
      const data = [];
      for (let i = 0; i < 11; i++) {
        const randomNumber = getRandomNumber(462.0, 26061.2);
        data.push(randomNumber.toFixed(1));
      }
      return data;
    }

    // Update the dataArray every 1 second
    const intervalId = setInterval(() => {
      const newDataArray = generateLatestPrice();
      setLatestPrice(newDataArray);
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Function to generate an array of 10 continuously changing numbers
    function generateLatestAmount() {
      const data = [];
      for (let i = 0; i < 11; i++) {
        const randomNumber = getRandomNumber(0.0, 2.0);
        data.push(randomNumber.toFixed(9));
      }
      return data;
    }

    // Update the dataArray every 1 second
    const intervalId = setInterval(() => {
      const newDataArray = generateLatestAmount();
      setLatestAmount(newDataArray);
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Function to generate an array of 10 continuously changing numbers
    function generateLatestAmount() {
      const data = [];
      for (let i = 0; i < 11; i++) {
        const randomNumber = getRandomNumber(261, 3457);
        data.push(randomNumber.toFixed());
      }
      return data;
    }

    // Update the dataArray every 1 second
    const intervalId = setInterval(() => {
      const newDataArray = generateLatestAmount();
      setLatestTotal(newDataArray);
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  // Three Functionality for Last Price
  useEffect(() => {
    // Function to generate an array of 10 continuously changing numbers
    function generateLatestPrice() {
      const data = [];
      for (let i = 0; i < 11; i++) {
        const randomNumber = getRandomNumber(432.0, 25061.2);
        data.push(randomNumber.toFixed(1));
      }
      return data;
    }

    // Update the dataArray every 1 second
    const intervalId = setInterval(() => {
      const newDataArray = generateLatestPrice();
      setLastPrice(newDataArray);
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Function to generate an array of 10 continuously changing numbers
    function generateLatestAmount() {
      const data = [];
      for (let i = 0; i < 11; i++) {
        const randomNumber = getRandomNumber(0.2, 2.1);
        data.push(randomNumber.toFixed(9));
      }
      return data;
    }

    // Update the dataArray every 1 second
    const intervalId = setInterval(() => {
      const newDataArray = generateLatestAmount();
      setLastAmount(newDataArray);
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Function to generate an array of 10 continuously changing numbers
    function generateLatestAmount() {
      const data = [];
      for (let i = 0; i < 11; i++) {
        const randomNumber = getRandomNumber(260, 3455);
        data.push(randomNumber.toFixed());
      }
      return data;
    }

    // Update the dataArray every 1 second
    const intervalId = setInterval(() => {
      const newDataArray = generateLatestAmount();
      setLastTotal(newDataArray);
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  // Three Functionality for Market Change Price
  useEffect(() => {
    // Function to generate an array of 10 continuously changing numbers
    function generateLatestPrice() {
      const data = [];
      for (let i = 0; i < 27; i++) {
        const randomNumber = getRandomNumber(22054.0, 26061.4);
        data.push(randomNumber.toFixed(1));
      }
      return data;
    }

    // Update the dataArray every 1 second
    const intervalId = setInterval(() => {
      const newDataArray = generateLatestPrice();
      setMarket(newDataArray);
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Function to generate an array of 10 continuously changing numbers
    function generateLatestAmount() {
      const data = [];
      for (let i = 0; i < 27; i++) {
        const randomNumber = getRandomNumber(0, 1);
        data.push(randomNumber.toFixed(9));
      }
      return data;
    }

    // Update the dataArray every 1 second
    const intervalId = setInterval(() => {
      const newDataArray = generateLatestAmount();
      setChange(newDataArray);
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Function to generate an array of 10 continuously changing numbers
    function generateLatestAmount() {
      const data = [];
      for (let i = 0; i < 27; i++) {
        const randomNumber = getRandomNumber(257, 5646);
        data.push(randomNumber.toFixed());
      }
      return data;
    }

    // Update the dataArray every 1 second
    const intervalId = setInterval(() => {
      const newDataArray = generateLatestAmount();
      setMarketPrice(newDataArray);
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const handleHigherTrade = (e) => {
    e.preventDefault();
    const form = e.target;
    const amount = Number(form.higher_amount.value);
    const duration = Number(form.higher_trade_duration.value);
    if (amount < 0 && amount > user?.current_balance) {
      return toast.success("Please provide a decent amount!");
    }
    const apiUrl = `https://stock-back.vercel.app/api/v1/trade`;
    const postData = {
      uid: user?._id,
      email: userEmail,
      amount: amount,
      botId: "",
      tradeType: "higher",
      duration: duration,
    };
    const headers = {
      "Content-Type": "application/json",
      authorization: `Bearer ${userToken}`,
    };

    axios
      .post(apiUrl, postData, { headers })
      .then((res) => {
        if (res.status === 200) {
          toast.success("Higher trading implement");
          console.log(res);
          handleGetUserDetails();
          form.reset();
        }
      })
      .catch((err) => {
        console.log("trade response: ", err);
        toast.success("Something went wrong");
      });
  };

  const handleLowerTrade = (e) => {
    e.preventDefault();
    const form = e.target;
    const amount = Number(form.lower_amount.value);
    const duration = Number(form.lower_trade_duration.value);

    if (amount < 0 && amount > user?.current_balance) {
      return toast.success("Please provide a decent amount!");
    }
    const apiUrl = `https://stock-back.vercel.app/api/v1/trade`;
    const postData = {
      uid: user?._id,
      email: userEmail,
      amount: amount,
      botId: "",
      tradeType: "lower",
      duration: duration,
    };
    const headers = {
      "Content-Type": "application/json",
      authorization: `Bearer ${userToken}`,
    };

    axios
      .post(apiUrl, postData, { headers })
      .then((res) => {
        if (res.status === 200) {
          toast.success("Lower trading implement");
          console.log(res);
          handleGetUserDetails();
          form.reset();
        }
      })
      .catch((err) => {
        console.log("trade response: ", err);
        toast.success("Something went wrong");
      });
  };

  // // DEVTOOL-DISABLED
  // window.addEventListener("contextmenu", function (e) {
  //   e.preventDefault();
  // });

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="main-container !pt-[0px] md:!pt-[50px] lg:!pt-[50px] xl:!pt-[30px]">
      <div className="-mt-[120px] md:-mt-[70px] lg:-mt-[40px] xl:-mt-[24px]">
        <div className="grid lg:grid-cols-12 gap-1">
          <div className="lg:col-span-9 md:col-span-9 sm:col-span-6 xs:col-span-12">
            <div
              data-aos="fade-down"
              className="grid lg:grid-cols-12 md:grid-cols-12 border-[1px] border-slate-700 0"
            >
              <div className="bg-[#1f2937] border-slate-500 grid lg:col-span-2 md:col-span-4 sm:col-span-6 xs:col-span-6 p-3 m-1 rounded">
                <p className="text-[13px] pb-0 text-[#88b6c9]">Last price:</p>
                <p className="mt-0 text-green-500 text-[13px]">{globalData?.marketPrice}</p>
              </div>
              <div className="bg-[#1f2937] border-slate-500 grid lg:col-span-2 md:col-span-4 sm:col-span-6 xs:col-span-6 p-3 m-1 rounded">
                <p className="text-[13px] text-[#e6e1e1bb]">24H change:</p>
                <p className="mt-0 text-red-500 text-[13px]">{globalData?.change}</p>
              </div>
              <div className="bg-primary font-montserrat border-slate-500 grid lg:col-span-2 md:col-span-4 sm:col-span-6 xs:col-span-6 p-3 m-1 rounded">
                <p className="text-[14px] text-white">Return</p>
                <p className="mt-0 text-[15px] text-white font-medium">{globalData?.tradeReturn} %</p>
              </div>
              <div className="bg-[#1f2937] border-slate-500 grid lg:col-span-2 md:col-span-4 sm:col-span-6 xs:col-span-6 p-3 m-1 rounded">
                <p className="text-[13px] text-[#e6e1e1bb]">USDT Volume:</p>
                <p className="mt-0 text-[13px] text-[#e6e1e1ec]">
                  53,014,382.84
                </p>
              </div>
              <div className="bg-[#1f2937] border-slate-500 grid lg:col-span-2 md:col-span-4 sm:col-span-6 xs:col-span-6 p-3 m-1 rounded">
                <p className="text-[13px] text-[#e6e1e1bb]">24h High:</p>
                <p className="mt-0 text-[13px] text-[#e6e1e1ec]">26,580.90</p>
              </div>
              <div className="bg-[#1f2937] border-slate-500 grid lg:col-span-2 md:col-span-4 sm:col-span-6 xs:col-span-6 p-3 m-1 rounded">
                <p className="text-[13px] text-[#e6e1e1bb]">24h Low:</p>
                <p className="mt-0 text-[13px] text-[#e6e1e1ec]">25,867.00</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 md:grid-cols-12 mt-3 gap-1">
              <div className="lg:col-span-4 md:col-span-4 sm:col-span-6 xs:col-span-12 border-[1px] border-slate-500 p-2">
                <div className="w-full overflow-x-auto">
                  <table
                    className="min-w-full divide-y divide-gray-500 rounded-lg"
                    data-aos="fade-right"
                  >
                    <thead className="">
                      <tr>
                        <th className="bg-[#283b4f] pl-3 py-3 text-left text-xs leading-4 font-semibold  text-[#88b6c9] uppercase tracking-wider font-montserrat">
                          Price
                        </th>
                        <th className="bg-[#283b4f] py-3 text-left text-xs leading-4 font-semibold  text-[#88b6c9] uppercase tracking-wider font-montserrat">
                          Amount
                        </th>
                        <th className=" bg-[#283b4f] text-left text-xs leading-4 font-semibold  text-[#88b6c9] uppercase tracking-wider font-montserrat">
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody className="p-0 m-0">
                      <tr className="p-0 m-0">
                        <td className="ps-3 bg-slate-900 whitespace-no-wrap text-[14px]">
                          {latestPrice.map((value, index) => (
                            <p
                              key={index}
                              className="font-light text-red-600 pt-0"
                            >
                              {value}
                            </p>
                          ))}
                        </td>
                        <td className="bg-slate-900 whitespace-no-wrap text-[14px]">
                          {latestAmount.map((value, index) =>
                            index === 1 ? (
                              <>
                                <p className="font-normal bg-[#3f2132] text-[#e6e1e1ec]">
                                  {value}
                                </p>
                              </>
                            ) : (
                              <>
                                <p className="font-normal text-[#e6e1e1ec]">
                                  {value}
                                </p>
                              </>
                            )
                          )}
                        </td>
                        <td className="bg-slate-900 whitespace-no-wrap text-[14px]">
                          {latestTotal.map((value, index) =>
                            index === 1 ? (
                              <>
                                <p className="font-normal bg-[#3f2132] text-[#e6e1e1ec]">
                                  {value}
                                </p>
                              </>
                            ) : (
                              <>
                                <p className="font-normal text-[#e6e1e1ec]">
                                  {value}
                                </p>
                              </>
                            )
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="flex w-100 ps-3 pt-2 pb-3">
                    <span className="text-[15px] font-normal  text-[#e6e1e1ec]">
                      Last Price:
                    </span>
                    <span className="flex items-center text-[#e6e1e1ec] ms-2 text-[15px] font-normal">
                      25932.2
                      <AiOutlineArrowDown size={17} />
                    </span>
                  </div>

                  <table
                    className="min-w-full divide-y divide-gray-500 rounded-lg"
                    data-aos="fade-left"
                  >
                    <thead className="rounded">
                      <tr>
                        <th className="bg-[#283b4f] pl-3 py-3 text-left text-xs leading-4 font-semibold  text-[#88b6c9] uppercase tracking-wider font-montserrat">
                          Price
                        </th>
                        <th className="bg-[#283b4f] py-3 text-left text-xs leading-4 font-semibold  text-[#88b6c9] uppercase tracking-wider font-montserrat">
                          Amount
                        </th>
                        <th className=" bg-[#283b4f] py-3 text-left text-xs leading-4 font-semibold  text-[#88b6c9] uppercase tracking-wider font-montserrat">
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody className="p-0 m-0">
                      <tr className="p-0 m-0">
                        <td className="ps-3 bg-slate-900 whitespace-no-wrap text-[14px]">
                          {lastPrice.map((value, index) => (
                            <p
                              key={index}
                              className="font-light text-green-700 pt-0"
                            >
                              {value}
                            </p>
                          ))}
                        </td>
                        <td className="bg-slate-900 whitespace-no-wrap text-[14px]  text-[#e6e1e1ec]">
                          {lastAmount.map((value, index) =>
                            index === 1 ? (
                              <>
                                <p className="font-normal bg-[#113c39]">
                                  {value}
                                </p>
                              </>
                            ) : (
                              <>
                                <p className="font-normal">{value}</p>
                              </>
                            )
                          )}
                        </td>
                        <td className="bg-slate-900 whitespace-no-wrap text-[14px]  text-[#e6e1e1ec]">
                          {lastTotal.map((value, index) =>
                            index === 1 ? (
                              <>
                                <p className="font-normal bg-[#113c39]">
                                  {value}
                                </p>
                              </>
                            ) : (
                              <>
                                <p className="font-normal text-[#e6e1e1ec]">
                                  {value}
                                </p>
                              </>
                            )
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="lg:col-span-8 md:col-span-8 sm:col-span-6 xs:col-span-12 border-[1px] border-slate-500">
                <div
                  data-aos="flip-down"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <TradeGraph />
                </div>

                <div>
                  <div className="lg:col-span-8 md:col-span-8 sm:col-span-6 xs:col-span-12 text-[#e6e1e1ec] text-[15px] border-[1px] border-x-0 border-slate-500 p-2">
                    <p>Trade Options:</p>
                  </div>

                  <div className="mt-3 mb-3 grid grid-cols-1 sm:grid-cols-2 gap-3 px-1 md:px-3 lg:px-5">
                    <form className="w-full p-0" onSubmit={handleHigherTrade}>
                      <div>
                        <p className="text-[#e6e1e1ec]">Amount(USDT)</p>
                        <input
                          type="number"
                          className="font-montserrat mt-1 p-1.5 w-full bg-transparent border outline-none border-[#39c573] rounded text-sm tracking-wider placeholder:tracking-normal text-[#e6e1e1ec] font-normal mb-2"
                          placeholder="Higher Amount"
                          name="higher_amount"
                          required
                        />

                        <label className="font-montserrat">Duration</label>
                        <select
                          name="higher_trade_duration"
                          className="font-montserrat py-2 w-full border outline-none bg-slate-900 text-sm border-[#39c573] rounded text-[#e6e1e1ec] font-normal"
                        >
                          <option value={1} className="font-montserrat">
                            For a day
                          </option>
                          <option
                            value={24 * 3}
                            className="font-montserrat rounded"
                          >
                            For 3 days
                          </option>
                          <option
                            value={24 * 7}
                            className="font-montserrat rounded"
                          >
                            For 1 week
                          </option>
                          <option
                            value={24 * 14}
                            className="font-montserrat rounded"
                          >
                            For 2 weeks
                          </option>
                        </select>
                      </div>
                      <input
                        type="submit"
                        value="Higher"
                        className="mt-[6px] p-1.5 w-full bg-[#39c573] hover:bg-[#2b9959c5] font-medium font-montserrat rounded outline-2 cursor-pointer"
                      />
                    </form>

                    <div className="w-full">
                      <form
                        action="#"
                        className="w-full p-0"
                        onSubmit={handleLowerTrade}
                      >
                        <div>
                          <p className="text-[#e6e1e1ec]">Amount(USDT)</p>
                          <input
                            type="number"
                            className="font-montserrat mt-1 p-1.5 w-full bg-transparent border outline-none border-[tomato] rounded text-sm tracking-wider placeholder:tracking-normal text-[#e6e1e1ec] font-normal mb-2"
                            placeholder="Lower Amount"
                            name="lower_amount"
                            required
                          />

                          <label className="font-montserrat">Duration</label>
                          <select
                            name="lower_trade_duration"
                            className="font-montserrat py-2 w-full border outline-none bg-slate-900 text-sm border-[tomato] rounded text-[#e6e1e1ec] font-normal"
                          >
                            <option value={1} className="font-montserrat">
                              For a day
                            </option>
                            <option
                              value={24 * 3}
                              className="font-montserrat rounded"
                            >
                              For 3 days
                            </option>
                            <option
                              value={24 * 7}
                              className="font-montserrat rounded"
                            >
                              For 1 week
                            </option>
                            <option
                              value={24 * 14}
                              className="font-montserrat rounded"
                            >
                              For 2 weeks
                            </option>
                          </select>
                        </div>
                        <input
                          type="submit"
                          value="Lower"
                          className="mt-[6px] p-1.5 w-full bg-[tomato] hover:bg-[#ff6347a8] rounded font-medium font-montserrat outline-2 cursor-pointer"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 md:col-span-8 sm:col-span-6 xs:col-span-12"></div>
            </div>
          </div>
          <div className="lg:col-span-3 md:col-span-3 sm:col-span-6 xs:col-span-12 overflow-x-auto" data-aos="fade-left">
            <p className="border border-slate-700 text-[#e6e1e1ec] text-[14px] p-2 mb-1">
              USDT
            </p>
            <div className=" overflow-x-auto border border-slate-700 ps-2 pe-2 pb-[3px] text-[#e6e1e1ec]">

              <table className="mt-[15px] min-w-full divide-y overscroll-auto divide-gray-500 rounded-lg">
                <thead className="rounded">
                  <tr>
                    <th className="bg-[#283b4f] pl-3 py-3 text-left text-xs leading-4 font-semibold  text-[#88b6c9] uppercase tracking-wider font-montserrat">
                      Market
                    </th>
                    <th className="bg-[#283b4f] py-3 text-left text-xs leading-4 font-semibold  text-[#88b6c9] uppercase tracking-wider font-montserrat">
                      Change %
                    </th>
                    <th className="bg-[#283b4f] py-3 text-left text-xs leading-4 font-semibold  text-[#88b6c9] uppercase tracking-wider font-montserrat">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody className="p-0 m-0 overflow-hidden">
                  <tr className="p-0 m-0 pb-5">
                    <td className="ps-3 bg-slate-900 whitespace-no-wrap text-[14px]">
                      <p className="pt-0 text-[#88b6c9] text-[14px] font-normal">
                        AVA<span className="text-[#88b5c9b9]">/USDT</span>
                      </p>
                      {market.map((value, index) => (
                        <p
                          key={index}
                          className="font-light text-green-700 pt-0"
                        >
                          {value}
                        </p>
                      ))}
                    </td>
                    <td className="bg-slate-900 whitespace-no-wrap text-[14px]">
                      <p className="text-[#88b6c9] text-[14px] font-normal">
                        {globalData?.change}
                      </p>
                      {change.map((value, index) =>
                        index === 1 ? (
                          <>
                            <p className="font-normal bg-[#113c39]">{value}</p>
                          </>
                        ) : (
                          <>
                            <p className="font-normal">{value}</p>
                          </>
                        )
                      )}
                    </td>
                    <td className="bg-slate-900 whitespace-no-wrap text-[14px]">
                      <p className="text-[#88b6c9] text-[14px] font-normal">
                        {globalData?.marketPrice}
                      </p>
                      {marketPrice.map((value, index) =>
                        index === 1 ? (
                          <>
                            <p className="font-normal bg-[#113c39]">{value}</p>
                          </>
                        ) : (
                          <>
                            <p className="font-normal">{value}</p>
                          </>
                        )
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeGraphParent;
