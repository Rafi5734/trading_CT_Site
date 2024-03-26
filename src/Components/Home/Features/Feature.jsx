import FeaturesCard from "./FeaturesCard/FeaturesCard";

const Feature = () => {
  return (
    <div className="w-full">
      <div className="mx-auto">
        <p className="titleStyle mb-5">
          Our Platform <span>Feature</span>
        </p>
        <div className="w-full md:w-10/12 lg:w-9/12 mx-auto">
          <p className="descriptionStyle">
            Trade smarter with real-time market insights, AI-generated
            recommendations, and lightning-fast execution. Automate your trades
            with AI-driven strategies, manage risk with advanced tools, and
            analyse market sentiment. Never miss out on profitable opportunities
            with personalised alerts. Trade with confidence and optimise your
            performance today.
          </p>
        </div>
        <FeaturesCard />
      </div>
    </div>
  );
};

export default Feature;
