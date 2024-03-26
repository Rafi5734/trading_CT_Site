import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import Marquee from "react-fast-marquee";
import { LuPanelRightClose } from "react-icons/lu";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
const UserHeader = ({ OpenSidebar }) => {
  const { user, userEmail, userToken, handleGetUserDetails, globalData } =
    useContext(AuthContext);

  const {
    data: userData,
    refetch,
    isLoading,
  } = useQuery(["/user/single", userEmail, userToken], () =>
    handleGetUserDetails(userEmail, userToken)
  );

  return (
    <header className="header bg-[#1118273b] z-[10000] ">
      <div className="menu-icon">
        <LuPanelRightClose
          className="icon  cursor-pointer hover:text-primary duration-200"
          onClick={OpenSidebar}
        />
      </div>
      <div>
        <Marquee gradient gradientColor={[17, 24, 39]}>
          <span className="text-white text-[17px] font-montserrat">
            {globalData?.notification}
          </span>
        </Marquee>
        <div className="flex items-center gap-3">
          <div
            className={`w-[40px] hidden sm:block h-[40px] border-[3px] ${
              user?.is_verified ? "border-green-500" : "border-red-500"
            } rounded-full hover:border-orange-500 duration-150`}
          >
            <Link className="w-full h-full" to="/user">
              <img
                className="w-full h-full rounded-full object-cover"
                src={user?.image}
                alt=""
              />
            </Link>
          </div>
          <div className="text-[20px] rounded-lg sm:text-[24px] absolute sm:relative right-0 z-[1000] bg-[#111827] border-l-2 border-green-500 select-none px-2 font-montserrat flex tracking-wider items-center justify-center text-orange-500 font-semibold">
            ${user?.current_balance}
          </div>
          <div className="hidden sm:block">
            <Link
              to="/user/deposit"
              className="text-green-500 hover:bg-green-500 hover:text-white duration-150 font-montserrat font-medium border border-green-500 rounded-[5px] px-4 py-[6px]"
            >
              Deposit
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default UserHeader;
