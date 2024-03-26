import { useContext } from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { FiUsers } from "react-icons/fi";
import { PiRobotBold } from "react-icons/pi";
import { RiLuggageDepositLine } from "react-icons/ri";
import { BiMoneyWithdraw, BiLogOut } from "react-icons/bi";
import { GoGraph } from "react-icons/go";
import { TbWorldPlus } from "react-icons/tb";
import { LuMessagesSquare } from "react-icons/lu";
import { PiMicrosoftTeamsLogo } from "react-icons/pi";
import { LiaUserSecretSolid } from "react-icons/lia";
import { AuthContext } from "../../Providers/AuthProvider";
import {toast} from 'react-hot-toast'

const AdminPanelList = ({ responsiveStatus }) => {
  const { setUserToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("stockUserToken");
    localStorage.removeItem("stockUserEmail");
    setUserToken(null);
    navigate("/login");
    toast.success("Log out successfully"),
      {
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
      };
  };
  return (
    <>
      <Link
        to="/admin-1615-ct"
        className={`flex  rounded-md ${
          open ? "hover:bg-[#289dcf2d] py-[10px]" : "hover:text-primary"
        } pl-2 cursor-pointer text-gray-300 text-sm items-center duration-75 gap-x-4 font-montserrat font-medium`}
      >
        <LuLayoutDashboard size={responsiveStatus ? 20 : 22} />
        <span
          className={`${
            !responsiveStatus && "hidden"
          } origin-left duration-200  hidden ${
            responsiveStatus && "lg:block"
          } text-[17px]`}
        >
          Dashboard
        </span>
      </Link>
      <Link
        to="/admin-1615-ct/users"
        className={`flex  rounded-md ${
          open ? "hover:bg-[#289dcf2d] py-[10px]" : "hover:text-primary"
        } pl-2 cursor-pointer  text-gray-300 text-sm items-center duration-75 gap-x-4 font-montserrat font-medium`}
      >
        <FiUsers size={responsiveStatus ? 20 : 22} />
        <span
          className={`${!responsiveStatus && "hidden"} origin-left ${
            responsiveStatus && "lg:block"
          } duration-200 hidden text-[17px]`}
        >
          User List
        </span>
      </Link>
      <Link
        to="/admin-1615-ct/ai-plans"
        className={`flex  rounded-md ${
          open ? "hover:bg-[#289dcf2d] py-[10px]" : "hover:text-primary"
        } pl-2 cursor-pointer  text-gray-300 text-sm items-center duration-75 gap-x-4 font-montserrat font-medium`}
      >
        <PiRobotBold size={responsiveStatus ? 20 : 22} />
        <span
          className={`${!responsiveStatus && "hidden"} origin-left hidden ${
            responsiveStatus && "lg:block"
          } duration-200 text-[17px]`}
        >
          Ai Plan
        </span>
      </Link>
      <Link
        to="/admin-1615-ct/deposit-list"
        className={`flex  rounded-md ${
          open ? "hover:bg-[#289dcf2d] py-[10px]" : "hover:text-primary"
        } pl-2 cursor-pointer  text-gray-300 text-sm items-center duration-75 gap-x-4 font-montserrat font-medium`}
      >
        <RiLuggageDepositLine size={responsiveStatus ? 20 : 22} />
        <span
          className={`${!responsiveStatus && "hidden"} origin-left hidden ${
            responsiveStatus && "lg:block"
          } duration-200 text-[17px]`}
        >
          Deposit List
        </span>
      </Link>
      <Link
        to="/admin-1615-ct/withdraw-list"
        className={`flex  rounded-md ${
          open ? "hover:bg-[#289dcf2d] py-[10px]" : "hover:text-primary"
        } pl-2 cursor-pointer  text-gray-300 text-sm items-center duration-75 gap-x-4 font-montserrat font-medium`}
      >
        <BiMoneyWithdraw size={responsiveStatus ? 20 : 22} />
        <span
          className={`${!responsiveStatus && "hidden"} origin-left hidden ${
            responsiveStatus && "lg:block"
          } duration-200 text-[17px]`}
        >
          Withdraw List
        </span>
      </Link>

      <Link
        to="/admin-1615-ct/recent-trade"
        className={`flex  rounded-md ${
          open ? "hover:bg-[#289dcf2d] py-[10px]" : "hover:text-primary"
        } pl-2 cursor-pointer  text-gray-300 text-sm items-center duration-75 gap-x-4 font-montserrat font-medium`}
      >
        <GoGraph size={responsiveStatus ? 20 : 22} />
        <span
          className={`${!responsiveStatus && "hidden"} origin-left hidden ${
            responsiveStatus && "lg:block"
          } duration-200 text-[17px]`}
        >
          Recent Trade
        </span>
      </Link>

      <Link
        to="/admin-1615-ct/media"
        className={`flex  rounded-md ${
          open ? "hover:bg-[#289dcf2d] py-[10px]" : "hover:text-primary"
        } pl-2 cursor-pointer  text-gray-300 text-sm items-center duration-75 gap-x-4 font-montserrat font-medium`}
      >
        <TbWorldPlus size={responsiveStatus ? 20 : 22} />
        <span
          className={`${!responsiveStatus && "hidden"} origin-left hidden ${
            responsiveStatus && "lg:block"
          } duration-200 text-[17px]`}
        >
          Create New Media
        </span>
      </Link>
      <Link
        to="/admin-1615-ct/manage-media"
        className={`flex  rounded-md ${
          open ? "hover:bg-[#289dcf2d] py-[10px]" : "hover:text-primary"
        } pl-2 cursor-pointer  text-gray-300 text-sm items-center duration-75 gap-x-4 font-montserrat font-medium`}
      >
        <TbWorldPlus size={responsiveStatus ? 20 : 22} />
        <span
          className={`${!responsiveStatus && "hidden"} origin-left hidden ${
            responsiveStatus && "lg:block"
          } duration-200 text-[17px]`}
        >
          Manage Media
        </span>
      </Link>
      <Link
        to="/admin-1615-ct/messages"
        className={`flex  rounded-md ${
          open ? "hover:bg-[#289dcf2d] py-[10px]" : "hover:text-primary"
        } pl-2 cursor-pointer  text-gray-300 text-sm items-center duration-75 gap-x-4 font-montserrat font-medium`}
      >
        <LuMessagesSquare size={responsiveStatus ? 20 : 22} />
        <span
          className={`${!responsiveStatus && "hidden"} origin-left hidden ${
            responsiveStatus && "lg:block"
          } duration-200 text-[17px]`}
        >
          Messages
        </span>
      </Link>
      <Link
        to="/admin-1615-ct/market"
        className={`flex  rounded-md ${
          open ? "hover:bg-[#289dcf2d] py-[10px]" : "hover:text-primary"
        } pl-2 cursor-pointer  text-gray-300 text-sm items-center duration-75 gap-x-4 font-montserrat font-medium`}
      >
        <TbWorldPlus size={responsiveStatus ? 20 : 22} />
        <span
          className={`${!responsiveStatus && "hidden"} origin-left hidden ${
            responsiveStatus && "lg:block"
          } duration-200 text-[17px]`}
        >
          Global Changes
        </span>
      </Link>

      <Link
        to="/admin-1615-ct/ct-team"
        className={`flex  rounded-md ${
          open ? "hover:bg-[#289dcf2d] py-[10px]" : "hover:text-primary"
        } pl-2 cursor-pointer  text-gray-300 text-sm items-center duration-75 gap-x-4 font-montserrat font-medium`}
      >
        <PiMicrosoftTeamsLogo size={responsiveStatus ? 20 : 22} />
        <span
          className={`${!responsiveStatus && "hidden"} origin-left hidden ${
            responsiveStatus && "lg:block"
          } duration-200 text-[17px]`}
        >
          CT - Team
        </span>
      </Link>

      <Link
        to="/user"
        className={`flex  rounded-md ${
          open ? "hover:bg-[#289dcf2d] py-[10px] text-primary" : ""
        } pl-2 cursor-pointer text-sm items-center duration-75 gap-x-4 font-montserrat font-semibold`}
      >
        <LiaUserSecretSolid size={responsiveStatus ? 20 : 22} />
        <span
          className={`${!responsiveStatus && "hidden"} origin-left hidden ${
            responsiveStatus && "lg:block"
          } duration-200 text-[17px]`}
        >
          User Dashboard
        </span>
      </Link>

      <div
        className={`flex  rounded-md ${
          open ? "hover:bg-[#289dcf2d] py-[10px] text-primary" : ""
        } pl-2 cursor-pointer text-sm items-center duration-75 gap-x-4 font-montserrat font-semibold`}
        onClick={handleLogout}
      >
        <BiLogOut size={responsiveStatus ? 20 : 22} />
        <span
          className={`${!responsiveStatus && "hidden"} origin-left hidden ${
            responsiveStatus && "lg:block"
          } duration-200 text-[17px]`}
        >
          Logout
        </span>
      </div>
    </>
  );
};

export default AdminPanelList;
