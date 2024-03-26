// import { CgSmartphoneChip, CgPerformance } from "react-icons/cg";
// import { GiGearStickPattern } from "react-icons/gi";
// import { SiCoinmarketcap, SiAutomattic, SiThealgorithms } from "react-icons/si";
// import {
//   MdOutlineManageAccounts,
//   MdOutlineSentimentSatisfiedAlt,
//   MdOutlineAssessment,
//   MdOutlinePersonalInjury,
// } from "react-icons/md";
const FeaturesCard = () => {
  return (
    <div className="mt-10 mb-14">
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-5 mb-10">
        <div className="p-10 bg-background rounded-xl p-5 flex flex-row items-center">
          {/* <p className="bg-primary p-5 rounded-xl">
            <CgSmartphoneChip size={35} className="" />
          </p> */}
          <div>
            <p className="ms-3 text-xl font-bold text-primary">
              Smart Portfolio Recommendations
            </p>
            <p className="ms-3 text-slate-400 cardDescriptionStyle">
              Our AI algorithms analyse your risk profile, investment goals, and
              market trends to generate personalised portfolio recommendations
              tailored to your needs.
            </p>
          </div>
        </div>
        <div className="p-10 bg-background rounded-xl p-5 flex flex-row items-center">
          {/* <p className="bg-primary p-5 rounded-xl">
            <SiCoinmarketcap size={35} className="" />
          </p> */}
          <div>
            <p className="ms-3 text-xl font-bold text-primary">
              Real-time Market Insights
            </p>
            <p className="ms-3 text-slate-400 cardDescriptionStyle">
              Access real-time market data and AI-driven insights, empowering
              you with up-to-date information to make informed trading
              decisions.
            </p>
          </div>
        </div>
        <div className="p-10 bg-background rounded-xl p-5 flex flex-row items-center">
          {/* <p className="bg-primary p-5 rounded-xl">
            <SiAutomattic size={35} className="" />
          </p> */}

          <div>
            <p className="ms-3 text-xl font-bold text-primary">
              Automated Trading Strategies
            </p>
            <p className="ms-3 text-slate-400 cardDescriptionStyle">
              Utilise AI-generated trading strategies to automate your trades,
              taking advantage of market opportunities at lightning speed.
            </p>
          </div>
        </div>
        <div className="p-10 bg-background rounded-xl p-5 flex flex-row items-center">
          {/* <p className="bg-primary p-5 rounded-xl">
            <MdOutlineManageAccounts size={35} className="" />
          </p> */}
          <div>
            <p className="ms-3 text-xl font-bold text-primary">
              Risk Management Tools
            </p>
            <p className="ms-3 text-slate-400 cardDescriptionStyle">
              Our AI-powered risk management tools monitor your positions,
              alerting you to potential risks and helping you optimise your
              portfolio{"'"}s risk-adjusted returns.
            </p>
          </div>
        </div>
        <div className="p-10 bg-background rounded-xl p-5 flex flex-row items-center">
          {/* <p className="bg-primary p-5 rounded-xl">
            <GiGearStickPattern size={30} className="" />
          </p> */}
          <div>
            <p className="ms-3 text-xl font-bold text-primary">
              Pattern Recognition
            </p>
            <p className="ms-3 text-slate-400 cardDescriptionStyle">
              AI algorithms identify recurring patterns in market data, enabling
              you to spot potential trading opportunities that may otherwise go
              unnoticed.
            </p>
          </div>
        </div>
        <div className="p-10 bg-background rounded-xl p-5 flex flex-row items-center">
          {/* <p className="bg-primary p-5 rounded-xl">
            <SiThealgorithms size={30} className="" />
          </p> */}
          <div>
            <p className="ms-3 text-xl font-bold text-primary">
              Algorithmic Trading Execution
            </p>
            <p className="ms-3 text-slate-400 cardDescriptionStyle">
              Implement complex trading algorithms that automatically execute
              trades based on predefined rules, removing human emotions and
              biases from the equation.
            </p>
          </div>
        </div>
        <div className="p-10 bg-background rounded-xl p-5 flex flex-row items-center">
          {/* <p className="bg-primary p-5 rounded-xl">
            <CgPerformance size={30} className="" />
          </p> */}
          <div>
            <p className="ms-3 text-xl font-bold text-primary">
              Backtesting and Performance Analysis
            </p>
            <p className="ms-3 text-slate-400 cardDescriptionStyle">
              Test your trading strategies against historical data to evaluate
              their performance before applying them to real-time trading,
              helping you refine your approach and improve your trading
              outcomes.
            </p>
          </div>
        </div>
        <div className="p-10 bg-background rounded-xl p-5 flex flex-row items-center">
          {/* <p className="bg-primary p-5 rounded-xl">
            <MdOutlineAssessment size={30} className="" />
          </p> */}
          <div>
            <p className="ms-3 text-xl font-bold text-primary">
              Dynamic Risk Assessment
            </p>
            <p className="ms-3 text-slate-400 cardDescriptionStyle">
              Our AI continuously analyses market conditions, adjusting risk
              parameters in real-time to optimise your portfolio{"'"}s
              performance while maintaining an appropriate level of risk.
            </p>
          </div>
        </div>
        <div className="p-10 bg-background rounded-xl p-5 flex flex-row items-center">
          {/* <p className="bg-primary p-5 rounded-xl">
            <MdOutlinePersonalInjury size={30} className="" />
          </p> */}
          <div>
            <p className="ms-3 text-xl font-bold text-primary">
              {" "}
              Personalized Trading Alerts
            </p>
            <p className="ms-3 text-slate-400 cardDescriptionStyle">
              Receive personalised alerts based on AI analysis, notifying you of
              potential entry or exit points for specific assets, ensuring you
              never miss out on profitable opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
