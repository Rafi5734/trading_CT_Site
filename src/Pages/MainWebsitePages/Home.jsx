import AiTrade from "../../Components/Home/AiTrade/AiTrade";
import CryptomarketPrice from "../../Components/Home/CryptomarketPrice/CryptomarketPrice";
import Header from "../../Components/Home/Header/Header";
import TradingAssets from "../../Components/Home/TradingAssets/TradingAssets";
// import Header from "../../Components/Home/Header/Header";
import SmartTrade from "../../Components/Home/SmartTrade/SmartTrade";
import Feature from "../../Components/Home/Features/Feature";
// import { useState, useEffect } from "react";

const Home = () => {
  return (
    <div className="">
      <div>
        <Header />
        {/* <CryptomarketPrice /> */}
        <TradingAssets />
        <div className="w-11/12 2xl:max-w-[1600px] mx-auto">
          {/* Developer Rafi add Home page related all component in this div */}

          <CryptomarketPrice />
          <AiTrade />
          <SmartTrade />
          <Feature />
        </div>
      </div>
    </div>
  );
};
export default Home;
