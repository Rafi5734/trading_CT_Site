import { AiOutlineBarChart } from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";
import { TbHexagonalPyramidPlus } from "react-icons/tb";
import { RiStockFill } from "react-icons/ri";
import { BsCurrencyBitcoin } from "react-icons/bs";
// import { FaArrowRightArrowLeft } from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
const TradingCard = () => {
  return (
    <div className="mt-7 mb-5">
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-5">
        <div className=" bg-background rounded-xl p-5 flex flex-row items-center">
          <p className="bg-primary p-5 rounded-xl"><AiOutlineBarChart size={35} className="" /></p>
          <div>
            <p className="ms-3 text-xl font-medium">Stocks Trading</p>
            <p className="ms-3 text-slate-400 cardDescriptionStyle">
              Explore the dynamic world of stocks trading and capitalize on
              market.
            </p>
          </div>
        </div>
        <div className=" bg-background rounded-xl p-5 flex flex-row items-center">
          
          <p className="bg-primary p-5 rounded-xl"><BsCurrencyDollar size={35} className="" /></p>
          <div>
            <p className="ms-3 text-xl font-medium">Forexs Trading</p>
            <p className="ms-3 text-slate-400 cardDescriptionStyle">
              Navigate the global financial landscape with our
              forex trading.
            </p>
          </div>
        </div>
        <div className=" bg-background rounded-xl p-5 flex flex-row items-center">
          
          <p className="bg-primary p-5 rounded-xl"><TbHexagonalPyramidPlus size={35} className="" /></p>
          
          <div>
            <p className="ms-3 text-xl font-medium">Commodities Trading</p>
            <p className="ms-3 text-slate-400 cardDescriptionStyle">
              Seize market fluctuations and trade a diverse range of
              commodities.
            </p>
          </div>
        </div>
        <div className=" bg-background rounded-xl p-5 flex flex-row items-center">
          
          <p className="bg-primary p-5 rounded-xl"><RiStockFill size={35} className="" /></p>
          <div>
            <p className="ms-3 text-xl font-medium">Stocks Indices</p>
            <p className="ms-3 text-slate-400 cardDescriptionStyle">
              Stay informed about market trends of stocks
              indices trading.
            </p>
          </div>
        </div>
        <div className="mt-0 bg-background rounded-xl p-5 flex flex-row items-center">
          
          <p className="bg-primary p-5 rounded-xl"><BsCurrencyBitcoin size={35} className="" /></p>
          <div>
            <p className="ms-3 text-xl font-medium">Cryptos Trading</p>
            <p className="ms-3 text-slate-400 cardDescriptionStyle">
              Participate in the future of finance with our cryptos
              trading section.
            </p>
          </div>
        </div>
        <div className=" bg-background rounded-xl p-5 flex flex-row items-center">
          
          
          <p className="bg-primary p-5 rounded-xl"><FaArrowRightArrowLeft size={30} className="" /></p>
          <div>
            <p className="ms-3 text-xl font-medium">Bonds Trading</p>
            <p className="ms-3 text-slate-400 cardDescriptionStyle">
              Discover potential in the world of bonds trading on
              our platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingCard;
