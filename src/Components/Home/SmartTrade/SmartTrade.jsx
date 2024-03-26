import etheriamLogo from "../../../assets/images/etheriam-logo.png";
import tradingGraph from "../../../assets/images/trade-bar.png";
import mobileTrade from "../../../assets/images/half-mobile-trading-screen.png";
const SmartTrade = () => {
  return (
    <div className="mb-10">
      <div className="mt-10 mb-5 md:mb-0">
        <h1 className="titleStyle">
          Trade <span>Smartly</span>, Trade <span>Safely.</span>
        </h1>
        <p className="descriptionStyle">
          Master the art of trading smartly and safely to unlock your path to
          financial success.
        </p>
      </div>
      <div className="grid place-items-center min-h-screen">
        <div className="p-4 md:pt-0 max-w-5xl grid gap-4 xs:grid-cols-2 xs:p-8 lg:grid-cols-4 lg:gap-6">
          <h1 className="text-2xl md:relative md:top-[100px] font-bold xs:col-span-2 xs:grid xs:gap-4 xs:grid-cols-2 md:col-span-3 md:text-3xl md:grid-cols-3 lg:text-3xl">
            <span className="md:col-span-2">
              Handle <span className="text-primary">Smartly.</span>
            </span>
          </h1>
          <p className="xs:row-start-2 md:mt-[100px] xs:col-start-2 xs:self-center md:col-start-1 md:col-span-2 md:pr-12 md:text-md lg:max-w-[82%]">
            Your smartness define who are you and what can you need to do, So prepare for trading with us.
          </p>
          <div
            id="trade-smart-flexibility"
            className="flex flex-col h-[200px] bg-background xs:h-auto xs:square p-5 justify-center items-center rounded-xl"
          >
            <div className="flex items-center justify-center gap-1">
              <div>
                <img className="w-[40px]" src={etheriamLogo} alt="" />
              </div>
              <div>
                <h3 className="text-[16px] font-medium">BTC/USD</h3>
                <p className="text-[14px] font-medium text-[#ffffffbe]">
                  120.32 |+14% in 16 min
                </p>
              </div>
            </div>
            <img src={tradingGraph} className="mt-4" alt="" />
          </div>
          <div className="h-[200px] bg-background xs:h-auto xs:square p-5 rounded-xl flex flex-col justify-center items-left">
            <h1 className="text-[20px] font-medium mb-3 text-primary">
              Mentors
            </h1>
            <p className="text-[16px] text-justify text-[#ffffffbe]">
              Just One to One interview lessons, lecture when you are our
              responsibility.
            </p>
          </div>
          <div className="h-[200px] bg-background xs:h-auto xs:square p-5 rounded-xl flex flex-col justify-center items-left">
            <h1 className="text-[20px] font-medium mb-3 text-primary">
              Support
            </h1>
            <p className="text-[16px] text-[#ffffffbe]">
              24 Hour + support and find out your own mentor for guideline.
            </p>
          </div>
          <div className="h-[200px] bg-background xs:h-auto xs:square p-5 rounded-xl flex flex-col justify-center items-left relative overflow-hidden">
            <div>
              <h3 className="text-[20px] font-medium mb-3 text-primary">
                100% <br />
                Customer <br /> Safety
              </h3>
            </div>
            <img
              src={mobileTrade}
              className="absolute bottom-0 left-1/3 md:left-1/2"
              alt=""
            />
          </div>
          <div className="h-[200px] bg-background xs:h-auto xs:square p-5 rounded-xl flex flex-col justify-center items-left">
            <h3 className="text-[20px] font-medium mb-3 text-primary">
              Personal Security
            </h3>
            <p className="text-[16px] text-[#ffffffbe]">
              Only we provide your 100% safety with safe money, so join with us
              in any platform.
            </p>
          </div>
          <div className="h-[200px] bg-background xs:h-auto xs:square p-5 rounded-xl flex flex-col justify-center items-left">
            <h3 className="text-[20px] font-medium mb-3 text-primary">
              USER EXPERIENCE
            </h3>
            <p className="text-[16px] text-[#ffffffbe]">
              Trade using just an advanced trading platform using CT Option
              Trading Site.
            </p>
          </div>
          <div className="h-[200px] bg-background xs:h-auto xs:square p-5 rounded-xl flex flex-col justify-center items-left">
            <h3 className="text-[20px] font-medium mb-3 text-primary">
              INSTANT EXCHANGE
            </h3>
            <div className="shadow-2xl">
              <iframe
                height="105px"
                width="100%"
                src="https://www.youtube.com/embed/sKN1yhEqBus?si=ttA5aXVe-MpHtMrv"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-[15px]"
              ></iframe>
            </div>
          </div>
          <div className="h-[200px] bg-background xs:h-auto xs:square p-5 rounded-xl flex flex-col justify-center items-left">
            <h3 className="text-[20px] font-medium mb-3 text-primary">
              ADVISORS
            </h3>
            <p className="text-[16px] font-normal text-[#ffffffbe]">
              Provide a information about your experience and trading skills.
            </p>

            <button className="bg-primary text-white w-fit rounded-lg mt-3 py-2 px-3">
              Open Account
            </button>
          </div>
          <p className="self-center md:text-lg md:col-span-2 md:text-center md:px-4">
            Everything meeter in real life so adjust with your intelligent and go forward with <span className="text-primary font-bold">CT Option.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmartTrade;
