import { CiShoppingCart } from "react-icons/ci";
import { PiUsersThreeLight } from "react-icons/pi";
import { BiSolidBadgeDollar } from "react-icons/bi";
import { PiPaypalLogoThin } from "react-icons/pi";
import { FaCircleDollarToSlot, FaSackDollar } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
const AdminDashboard = () => {
  const {userToken} = useContext(AuthContext);
  const { data: dashboardData, isLoading } = useQuery(
    ["dashboard"],
    async () => {
      const res = await fetch(
        "https://stock-back.vercel.app/api/v1/dashboard",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${userToken}`,
          },
        }
      );

      const result = await res.json();

      return result;
    }
  );

  console.log(dashboardData);

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="overflow-x-hidden">
      <h1 className="text-center titleStyle" data-aos="fade-down">
        Dashboard
      </h1>
      <div className="w-full mt-5 grid gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <div
            data-aos="fade-right"
            className="border border-slate-500 p-5 bg-[#153045] rounded-xl flex justify-between items-center"
          >
            <div>
              <p className="text-xl mt-3">Total User</p>
              <p className="innerTitleStyle mb-0 text-[#289dcf] !text-[35px]">
                <span>{dashboardData?.data?.totalUsers}</span>
              </p>
            </div>
            <div className="">
              <PiUsersThreeLight size="85px" />
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="border border-slate-500 p-5 bg-[#153045] rounded-xl flex justify-between items-center"
          >
            <div>
              <p className="text-xl mt-3">Total Paid User</p>
              <p className="innerTitleStyle mb-0 text-[#289dcf] !text-[35px]">
                <span>{dashboardData?.data?.totalPaidUser}</span>
              </p>
            </div>
            <div className="">
              <PiPaypalLogoThin size="80px" />
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="border border-slate-500 p-5 bg-[#153045] rounded-xl flex justify-between items-center"
          >
            <div>
              <p className="text-xl mt-3">Total Ai Plan Sell</p>
              <p className="innerTitleStyle mb-0 text-[#289dcf] !text-[35px]">
                $ <span>{dashboardData?.data?.totalSellingCount}</span>
              </p>
            </div>
            <div className="">
              <CiShoppingCart size="80px" />
            </div>
          </div>
          <div
            data-aos="fade-right"
            className="border border-primary p-5 bg-primary rounded-xl flex justify-between items-center"
          >
            <div>
              <p className="text-xl mt-3 font-medium">Total Earnings</p>
              <p className="innerTitleStyle mb-0 text-[#ffffff] !text-[35px]">
                $ <span>{dashboardData?.data?.TotalDeposit - dashboardData?.data?.TotalWithdraw}</span>
              </p>
            </div>
            <div className="text-[#ffffff]">
              <FaSackDollar size="67px" />
            </div>
          </div>
          <div
            data-aos="fade-down"
            className="border border-primary p-5 bg-primary rounded-xl flex justify-between items-center"
          >
            <div>
              <p className="text-xl mt-3 font-medium">Total Deposit</p>
              <p className="innerTitleStyle mb-0 text-[#ffffff] !text-[35px]">
                $ <span>{dashboardData?.data?.TotalDeposit}</span>
              </p>
            </div>
            <div className="text-[#ffffff]">
              <BiSolidBadgeDollar size="80px" />
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="border border-primary p-5 bg-primary rounded-xl flex justify-between items-center"
          >
            <div>
              <p className="text-xl mt-3 font-medium">Total Withdraw</p>
              <p className="innerTitleStyle mb-0 text-[#ffffff] !text-[35px]">
                $ <span>{dashboardData?.data?.TotalWithdraw}</span>
              </p>
            </div>
            <div className="text-[#ffffff]">
              <FaCircleDollarToSlot size="67px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
