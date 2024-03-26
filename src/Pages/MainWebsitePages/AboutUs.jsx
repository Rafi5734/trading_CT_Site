import { AiFillCheckSquare } from "react-icons/ai";
import Banner from "../../SharedComponent/SubPages/Banner";

const AboutUs = () => {
  return (
    <div>
      <Banner pageTitle="Know More About Of CT OPTION" />
      <div className="w-11/12 2xl:max-w-[1600px] mx-auto mb-10">
        <div className="w-full lg:w-[80%] mx-auto">
          <h1 className="titleStyle">
            Discovering the World of <span>CT Option</span>
          </h1>
          <p className="descriptionStyle">
            Welcome to CT Option, where we are passionate about enabling
            traders to reach their full potential. Embarking on the journey of
            financial markets can be overwhelming, but with our user-friendly
            platform and robust resources, we strive to make trading accessible,
            informative, and rewarding for both novice and experienced traders.
          </p>
        </div>

        <div className="w-full lg:w-[80%] mx-auto mt-8">
          <div className="mb-4 bg-background rounded-[20px] py-5 px-7 flex flex-col justify-center">
            <p className="flex items-center gap-1 font-medium tracking-[.5px] mb-1">
              <span className="text-[20px] border-0 text-primary font-poppins">
                <AiFillCheckSquare />
              </span>{" "}
              <span>Our Mission:</span>
            </p>
            <p className="text-[15px] text-left text-secondary font-medium font-poppins">
              At CT Option, our primary mission is to empower traders with the
              knowledge, tools, and support they need to make informed decisions
              in the dynamic world of trading. We believe in democratising
              access to financial markets, enabling individuals to invest in a
              wide range of assets and explore various strategies confidently.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[80%] mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          <div className="mb-4 bg-background rounded-[20px] py-5 px-7 flex flex-col justify-center">
            <p className="flex items-center gap-1 font-medium tracking-[.5px] mb-1">
              <span className="text-[20px] border-0 text-primary font-poppins">
                <AiFillCheckSquare />
              </span>{" "}
              <span>User-Friendly Platform:</span>
            </p>
            <p className="text-[15px] text-left text-secondary font-medium font-poppins">
              We have developed a state-of-the-art trading platform that
              prioritises usability and functionality. Our intuitive interface
              allows users to navigate seamlessly through different markets,
              instantly execute trades, monitor positions, and access real-time
              market data. Whether you prefer to trade on your desktop, laptop,
              or mobile device, CT Option ensures a smooth and convenient
              trading experience.
            </p>
          </div>
          <div className="mb-4 bg-background rounded-[20px] py-5 px-7 flex flex-col justify-center">
            <p className="flex items-center gap-1 font-medium tracking-[.5px] mb-1">
              <span className="text-[20px] border-0 text-primary font-poppins">
                <AiFillCheckSquare />
              </span>{" "}
              <span>Wide Range of Tradable Assets:</span>
            </p>
            <p className="text-[15px] text-left text-secondary font-medium font-poppins">
              At CT Option, we understand that every trader has unique
              interests and investment goals. Thats why we offer tradable assets
              across cryptocurrencies, you can choose from a diverse range of
              investment opportunities. This breadth of options allows you to
              diversify your investment portfolio and tailor your trading
              strategies.
            </p>
          </div>
          <div className="mb-4 bg-background rounded-[20px] py-5 px-7 flex flex-col justify-center">
            <p className="flex items-center gap-1 font-medium tracking-[.5px] mb-1">
              <span className="text-[20px] border-0 text-primary font-poppins">
                <AiFillCheckSquare />
              </span>{" "}
              <span>Robust Research and Analysis:</span>
            </p>
            <p className="text-[15px] text-left text-secondary font-medium font-poppins">
              Making informed trading decisions requires reliable and up-to-date
              information. Thats why CT Option offers an array of research and
              analysis tools to help you stay ahead of the markets. Our platform
              provides access to live market news, technical analysis
              indicators, and real-time charts, empowering you to evaluate
              market trends, identify potential entry and exit points, and
              execute trades with confidence.
            </p>
          </div>
          <div className="mb-4 bg-background rounded-[20px] py-5 px-7 flex flex-col justify-center">
            <p className="flex items-center gap-1 font-medium tracking-[.5px] mb-1">
              <span className="text-[20px] border-0 text-primary font-poppins">
                <AiFillCheckSquare />
              </span>{" "}
              <span>Strong Customer Support:</span>
            </p>
            <p className="text-[15px] text-left text-secondary font-medium font-poppins">
              At CT Option, we are dedicated to providing exceptional customer
              support. Our knowledgeable and friendly support team is available
              around the clock to address your queries, resolve technical
              issues, and provide assistance when you need it. We value your
              trading journey and are committed to creating a supportive
              environment that promotes your success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
