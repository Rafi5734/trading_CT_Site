import TradingCard from "./TradingCard/TradingCard";

const TradingAssets = () => {
  return (
    <div className="w-11/12 2xl:max-w-[1600px] mx-auto">
      <p className="text-center text-4xl mt-[70px] md:mt-4 titleStyle">
        {" "}
        Wide Range of <span>Tradable Assets</span>
      </p>
      <div className="flex justify-center items-center">
        <p className="text-center mt-3 text-slate-400 w-[50rem] descriptionStyle">
          CT Option, we understand that every trader has unique interests and
          investment goals. That{"'"}s why we offer tradable assets across
          cryptocurrencies, you can choose from a diverse range of investment
          opportunities.{" "}
        </p>
      </div>
      <TradingCard />
    </div>
  );
};

export default TradingAssets;
