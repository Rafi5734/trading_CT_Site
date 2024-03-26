import { AiFillCheckSquare } from "react-icons/ai";
import laptopTradeImg from '../../../assets/images/trade-laptop.png';
import mobileTradeImg from '../../../assets/images/trade-mobile.png';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const AiTrade = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 });
      }, []);

      
  return (
    <div>
      <div className="text-center">
        <h1 className="mt-12 capitalize titleStyle"><span>artificial intelligence</span> Trade</h1>
        <div className="w-full md:w-10/12 lg:w-9/12 mx-auto">
          <p className="descriptionStyle">
            AI trade benefits empower traders with advanced tools and insights,
            allowing them to make more informed decisions, manage risks
            effectively, minimise errors, and potentially optimise their trading
            results.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 items-center justify-between">
        <div className="w-full relative mb-10">
          <img className="h-full md:max-h-[70%] mx-auto" src={laptopTradeImg} alt="" />
          <img 
          data-aos="fade-right"
          className="subImgAnimation absolute w-full max-w-[100px] sm:max-w-[150px] top-[45%] md:top-[45%] md:left-[12%] lg:left-[-30px]" src={mobileTradeImg} alt="" />
        </div>
        <div>
          <h1 className="innerTitleStyle font-poppins">
            AI trade benefits offer a myriad of advantages for traders,
            including:
          </h1>
          <div>
            <div className="mb-4">
              <p className="flex items-center gap-1 font-medium tracking-[.5px] mb-1">
                <span className="text-[20px] border-0 text-primary font-poppins"><AiFillCheckSquare /></span> <span>Increased Efficiency:</span>
              </p>
              <p className="text-[15px] text-left text-secondary font-medium font-poppins">
                AI systems analyse complex market data and patterns, generating
                valuable insights that can inform trading decisions. Traders can
                gain a deeper understanding of market trends, volatility, and
                potential opportunities, enhancing their overall trading
                strategy.
              </p>
            </div>
            <div className="mb-4">
              <p className="flex items-center gap-1 font-medium tracking-[.5px] mb-1">
                <span className="text-[20px] border-0 text-primary font-poppins"><AiFillCheckSquare /></span> <span>Data-Driven Insights:</span>
              </p>
              <p className="text-[15px] text-left text-secondary font-medium font-poppins">
                AI-powered platforms have the capability to process vast amounts
                of data and execute trades with precision and speed, minimising
                manual errors and saving valuable time.
              </p>
            </div>
            <div className="mb-4">
              <p className="flex items-center gap-1 font-medium tracking-[.5px] mb-1">
                <span className="text-[20px] border-0 text-primary font-poppins"><AiFillCheckSquare /></span> <span>Risk Management:</span>
              </p>
              <p className="text-[15px] text-left text-secondary font-medium font-poppins">
                AI algorithms can assess and evaluate risk factors in real-time,
                providing traders with valuable risk management tools. These
                systems can monitor portfolio performance, identify potential
                risks, and automatically adjust trading strategies accordingly,
                helping traders mitigate potential losses.
              </p>
            </div>
            <div className="mb-4">
              <p className="flex items-center gap-1 font-medium tracking-[.5px] mb-1">
                <span className="text-[20px] border-0 text-primary font-poppins"><AiFillCheckSquare /></span> <span>Enhanced Profitability:</span>
              </p>
              <p className="text-[15px] text-left text-secondary font-medium font-poppins">
                By leveraging AI algorithms that continuously learn and adapt,
                traders can potentially identify profitable opportunities that
                may be missed by manual trading approaches. The ability to
                quickly analyse large amounts of data can help improve trading
                efficiency and potentially increase overall profitability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiTrade;
