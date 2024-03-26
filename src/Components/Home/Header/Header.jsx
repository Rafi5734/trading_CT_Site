import { Link } from "react-router-dom";
import "./Header.css";
import headerRightImg from "../../../assets/images/computer-mobile-trade.png";
import headerRightAnimated from "../../../assets/images/animated-trading.png";
import { TypeAnimation } from "react-type-animation";
import { AiFillPlayCircle } from "react-icons/ai";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div name="header" id="main-header" className="overflow-x-hidden pt-[110px] md:pt-[70px]">
      <div className="w-11/12 2xl:max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[90vh] items-center justify-center md:justify-between relative">
        <div
          data-aos="fade-zoom-in"
        >
          <div className="">
            <h1 className="text-white font-bold max-w-[600px] text-center md:text-left text-[30px] lg:text-[40px] capitalize leading-[48px] lg:leading-[68px]">
              Begin your Trading journey with the{" "}
              <span className="text-primary text-[32px] lg:text-[50px] tracking-[1px]">
                <TypeAnimation
                  sequence={[
                    "Reliable Way.",
                    1000,
                    "Trusted Way.",
                    1000,
                    "Reliable Way.",
                    1000,
                  ]}
                  speed={200}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <p className="text-[16px] text-center md:text-left lg:text-[17px] text-secondary font-medium mt-[16px] w-full md:w-[95%]">
              Discover a trading platform that is dedicated to supporting your
              financial goals. Allow us to assist you in getting on track and
              starting your trading journey.
            </p>
          </div>
          <div className="w-fit mx-auto md:mx-0 my-[20px] rounded-full border-[4px] border-[#289dcf7e]">
            <div className="flex flex-row items-center  border-[3px] border-primary w-fit mx-auto px-[20px] lg:px-[18px] py-[10px] lg:py-[15px] pt-[6px] lg:pt-[10px] rounded-full parent-opacity-animation">
              <p className="opacity-animation cursor-pointer w-[43px] lg:w-[55px] text-[40px] lg:text-[48px] mb-[-6px] text-primary">
                <AiFillPlayCircle />
              </p>
              <p className="flex flex-col">
                <Link to="/login" className="text-[17px] font-medium tracking-[.5px] lg:text-[19px] text-primary">
                  Create Account
                </Link>
                <span className="text-secondary text-[12px] lg:text-[14px] tracking-[.4px]">
                  Watch Support Video
                </span>
              </p>
            </div>
          </div>
        </div>

        <div data-aos="fade-left" className="mt-5">
          <img src={headerRightImg} alt="" />
          <img
            id="imageAnimation"
            className="absolute w-[200px] top-[-35px] right-[10px] md:top-[-40px] md:right-0 lg:top-[20px] lg:right-[20px]"
            src={headerRightAnimated}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
