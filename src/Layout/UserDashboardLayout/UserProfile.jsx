import { useState } from "react";
import UserHeader from "../../Components/UserDashboard/UserHeader";
import UserSidebar from "../../Components/UserDashboard/UserSidebar";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";

const UserProfile = () => {
  const [loading, setLoading] = useState(false);
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return loading ? (
    <div className="w-full h-screen flex justify-center items-center">
      <HashLoader color="#289dcf" />
    </div>
  ) : (
    <div className="bg-[#111827]">
      <div className="grid-container relative min-h-screen max-w-[1390px] mx-auto overflow-x-hidden">
        <div className="circle-left"></div>
        <UserHeader OpenSidebar={OpenSidebar} />
        <UserSidebar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
        />
        <Outlet />
      </div>
    </div>
  );
};

export default UserProfile;
