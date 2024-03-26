import { BsGrid1X2Fill, BsGraphUpArrow, BsClockHistory } from "react-icons/bs";
import { LuPanelLeftClose } from "react-icons/lu";
import { BiMoneyWithdraw, BiSupport, BiLogOut } from "react-icons/bi";
import { RiLuggageDepositFill } from "react-icons/ri";
import { AiOutlineRobot, AiOutlineTransaction, AiOutlineLink } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { LiaUserSecretSolid } from "react-icons/lia";
import CTLogo from '../../../public/ctoption.png';

const UserSidebar = ({ openSidebarToggle, OpenSidebar }) => {
  const { setUserToken, hasAdminAccess } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showSubmenu, setShowSubmenu] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("stockUserToken");
    localStorage.removeItem("stockUserInfo");
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

  const toggleSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  };
  return (
    <aside
      id="sidebar"
      className={`${
        openSidebarToggle ? "sidebar-responsive" : ""
      } drop-shadow-xl`}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <Link
            to="/"
            className="text-6 font-montserrat font-bold text-primary"
          >
            <img src={CTLogo} alt="" />
          </Link>
        </div>
        <span
          className="icon close_icon hover:text-primary duration-200"
          onClick={OpenSidebar}
        >
          <LuPanelLeftClose />
        </span>
      </div>

      <ul className="sidebar-list font-montserrat">
        <li>
          <Link to="/user" className="sidebar-list-item">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </Link>
        </li>

        <li>
          <Link to="/user/deposit" className="sidebar-list-item">
            <RiLuggageDepositFill className="icon" size="20px" /> Deposit
          </Link>
        </li>
        <li>
          <Link to="/user/withdraw" className="sidebar-list-item">
            <BiMoneyWithdraw className="icon" size="20px" /> Withdraw
          </Link>
        </li>
        <li>
          <Link to="/user/trade" className="sidebar-list-item">
            <BsGraphUpArrow className="icon" size="18" /> Trade
          </Link>
        </li>

        <li>
          <Link to="/user/bots" className="sidebar-list-item">
            <AiOutlineRobot className="icon" size="21px" /> Ai Trades
          </Link>
        </li>
        <li>
          <Link to="/user/trade-history" className="sidebar-list-item">
            <BsClockHistory className="icon" size="20" /> Trade History
          </Link>
        </li>
        <li className="">
          <button
            onClick={toggleSubmenu}
            className="sidebar-list-item flex items-center w-full"
          >
            <AiOutlineTransaction className="icon" size="26" />
            <span className="flex items-center w-full justify-between pr-3">
              My Transaction
              <IoIosArrowDown
                size={20}
                className={`text-primary ${
                  showSubmenu ? "rotate-180" : "-rotate-0"
                } duration-200`}
              />
            </span>
          </button>
          <div className="w-full flex flex-col justify-end items-end pl-16 overflow-hidden">
            <ul
              className={`w-full flex flex-col justify-end items-start ${
                !showSubmenu ? "mt-[-100px] opacity-0" : "mt-0 opacity-1"
              } duration-200`}
            >
              <li className="">
                <Link
                  to="/user/deposit-history"
                  className="sidebar-list-item !py-2 !my-0 !pl-1 !px-3 rounded-r-lg border-l-[3px] border-primary flex items-center justify-start !text-[15px]"
                >
                  <span className="icon"></span> {/* Placeholder for icon */}
                  Deposit History
                </Link>
              </li>
              <li className="">
                <Link
                  to="/user/withdraw-history"
                  className="sidebar-list-item !my-0 !py-2 border-l-[3px] border-primary !pl-1 !px-3 rounded-r-lg flex items-center justify-start !text-[15px]"
                >
                  <span className="icon"></span> {/* Placeholder for icon */}
                  Withdraw History
                </Link>
              </li>
            </ul>
          </div>
        </li>
        
        <li>
          <Link to="/user/affiliate-program" className="sidebar-list-item">
            <AiOutlineLink className="icon" size="20px" /> Affiliate Program
          </Link>
        </li>
        <li>
          <Link to="/user/support" className="sidebar-list-item">
            <BiSupport className="icon" size="20px" /> Support
          </Link>
        </li>

        {hasAdminAccess && (
          <li className="absolute bottom-[75px] right-0 left-0">
            <Link
              to="/admin-1615-ct"
              className="sidebar-list-item !text-primary !font-montserrat !font-semibold !text-[17px]"
            >
              <LiaUserSecretSolid className="icon" size="22px" /> Admin
              Dashboard
            </Link>
          </li>
        )}
        <li className="absolute bottom-8 right-0 left-0">
          <p
            className="sidebar-list-item !text-primary !font-montserrat !font-semibold !text-[17px]"
            onClick={handleLogout}
          >
            <BiLogOut className="icon" size="21px" /> Logout
          </p>
        </li>
      </ul>
    </aside>
  );
};

export default UserSidebar;
