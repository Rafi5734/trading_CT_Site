import { useState } from "react";
import AdminPanelList from "../../Components/AdminDashboard/AdminPanelList";
import { Outlet } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import { useEffect } from "react";
import CTLogo from '../../../public/ctIcon.png'
const AdminPanel = () => {
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  
  return loading ? (
    <div className="w-full h-screen flex justify-center items-center">
      <HashLoader color="#289dcf" />
    </div>
  ) : (
    <div className="flex">
      <div
        id="admin-sidebar"
        className={` ${
          open ? "w-20 lg:w-72" : "w-20 "
        } h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="../../../src/Layout/AdminDashboardLayout/assets/control.png"
          className={`absolute cursor-pointer -right-4 top-[35px]
           border-2 border-white bg-primary hidden lg:block w-[30px] rounded-full  ${
             !open && "rotate-180"
           }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={CTLogo}
            className={`cursor-pointer duration-500 w-[40px] ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white hidden lg:block origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Admin
          </h1>
        </div>
        <ul className="pt-6">
          <AdminPanelList responsiveStatus={open} />
        </ul>
      </div>
      <div className="h-screen overflow-y-scroll flex-1 p-7 bg-[#111827] font-montserrat">
        <Outlet />
      </div>
    </div>
  );
};
export default AdminPanel;
