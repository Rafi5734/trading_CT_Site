import { useContext, useEffect } from "react";
import "../Bots/bot.css";
import { BsCurrencyDollar } from "react-icons/bs";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useGetBotsQuery } from "../../../API/Users/Bot/botSlice";
import toast from "react-hot-toast";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";
const Bots = () => {
  const { user, userEmail, userToken, handleGetUserDetails } =
    useContext(AuthContext);
  const { data: botData } = useGetBotsQuery(undefined, {
    pollingInterval: 2000,
  });
  const allBots = botData?.data;
  // console.log(allBots);
  const handleBuyAiTrade = (data) => {
    console.log("bot", data);
    const amount = Number(data?.Price);
    const duration = Number(data?.Duration);
    if (amount > user?.current_balance) {
      return toast.success("You don't have enough balance!");
    }
    if (amount <= 0) {
      return toast.error("Something wen't wrong");
    }
    const apiUrl = `https://stock-back.vercel.app/api/v1/trade`;
    const postData = {
      uid: user?._id,
      email: userEmail,
      amount: amount,
      botId: data?._id,
      tradeType: "bot",
      duration: duration,
    };
    const headers = {
      "Content-Type": "application/json",
      authorization: `Bearer ${userToken}`,
    };

    Swal.fire({
      title: "Are you sure?",
      text: "You want to active this Bot!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, active it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post(apiUrl, postData, { headers })
          .then((res) => {
            if (res.status === 200) {
              toast.success("Bot activate now");
              console.log(res);
              handleGetUserDetails();
            }
          })
          .catch((err) => {
            console.log("trade response: ", err);
            toast.success("Something went wrong");
          });
      }
    });
  };

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="main-container !mt-[50px]">
      <div className="w-full mx-auto rounded-xl glass min-h-screen py-4 px-5 -mt-[150px] sm:-mt-[90px] md:-mt-[85px] lg:-mt-[20px] xl:mt-[0px] overflow-hidden">
        <div className="">
          <h1 className="text-center titleStyle poppins" data-aos="fade-down">
            All <span>Ai Bots</span> - Choose <span>Ai Plan</span>
          </h1>
        </div>
        <div className="poppins w-full lg:w-[100%] mx-auto mt-4">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid sm:grid-cols-2 xs:grid xs:grid-cols-1 gap-4 w-full">
            {allBots &&
              allBots.map((bot, i) => (
                <div
                  key={i}
                  className="w-full rounded-xl bg-[#141a27]"
                  data-aos="fade-up"
                >
                  <p className="p-[6px] bg-primary font-semibold rounded-t-lg text-center font-montserrat text-[18px]">
                    Buy Ai{" "}
                    <span className="font-mono text-[20px]">{bot?.AiName}</span>
                  </p>
                  <div className="border border-slate-500 p-5 rounded-b-lg">
                    <p className="text-primary innerTitleStyle text-center flex justify-center items-center flex-row">
                      <BsCurrencyDollar size="25px" />
                      <span className="font-mono">{bot?.Price}</span>
                    </p>
                    <div className="flex justify-center items-center flex-col">
                      <p className="font-medium font-montserrat tracking-[.2px] text-[#ffffffb3]">
                        Return
                        <span className="font-mono text-[20px]">
                          {" "}
                          {bot?.Return}
                        </span>
                        %
                      </p>
                      <p className="font-medium font-montserrat tracking-[.2px] text-[#ffffffb3] mt-1">
                        For {bot?.Duration / 24} Days
                      </p>
                      <button
                        type="submit"
                        className="cursor-pointer w-full sm:max-w-[70%] bg-primary hover:glass duration-200 p-[10px] px-5 rounded-full mt-8 mb-3"
                        onClick={() => handleBuyAiTrade(bot)}
                      >
                        <p className="poppins font-medium">Buy {bot?.AiName}</p>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bots;
