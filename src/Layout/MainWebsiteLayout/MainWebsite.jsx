import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../SharedComponent/Navbar/Navbar";
import Footer from "../../SharedComponent/Footer/Footer";
import HashLoader from "react-spinners/HashLoader";
import { useState, useEffect } from "react";

const MainWebsite = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  const location = useLocation();
  const isLoginPage = location.pathname.includes("login");
  const isRegisterPage = location.pathname.includes("register");
  const isVerifyPage = location.pathname.includes("onboarding");
  return (
    <>
      {loading ? (
        <div className="w-full h-screen flex justify-center items-center">
          <HashLoader color="#289dcf" />
        </div>
      ) : (
        <div>
          {isLoginPage || isRegisterPage || isVerifyPage|| <Navbar />}
          <div>
            <Outlet />
          </div>
          {isLoginPage || isRegisterPage || isVerifyPage || <Footer />}
        </div>
      )}
    </>
  );
};

export default MainWebsite;
