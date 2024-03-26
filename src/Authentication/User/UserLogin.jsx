"use client";
import logImg from "../../utils/images/log.svg";
import registerImg from "../../utils/images/register.svg";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

import "./userLogin.css";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { PiArrowBendDoubleUpLeftBold } from "react-icons/pi";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const UserLogin = () => {
  const { setUserToken, handleGetUserDetails } = useContext(AuthContext);
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [isRegistrationLoading, setIsRegisterLoading] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("stockUserToken");
  const location = useLocation();
  const rememberInformation = JSON.parse(localStorage.getItem("rememberInfo"));
  // console.log(rememberInformation);
  const [isChecked, setIsChecked] = useState(
    rememberInformation ? true : false
  );

  useEffect(() => {
    if (location.pathname === "/login" && token) {
      navigate("/user");
    }
  }, [location.pathname]);

  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [customRegisterError, setCustomRegisterError] = useState("");
  const [customLoginError, setCustomLoginError] = useState("");
  const [loginFormData, setLoginFormData] = useState({
    email: rememberInformation ? rememberInformation.email : "",
    password: rememberInformation ? rememberInformation.password : "",
  });

  const [registrationFormData, setRegistrationFormData] = useState({
    name: "",
    password: "",
    email: "",
    phone: "",
  });

  const [togglePass, setTogglePass] = useState(false);
  const [toggleRegisterPass, setToggleRegisterPass] = useState(false);

  // User login from here
  const handleLogin = async (e) => {
    setIsLoginLoading(true);
    e.preventDefault();

    if (loginFormData.email === "" || loginFormData.password === "") {
      setIsLoginLoading(false);
      return setCustomLoginError("Please fill the required field!");
    }

    if (isChecked) {
      localStorage.setItem("rememberInfo", JSON.stringify(loginFormData));
    } else {
      localStorage.removeItem("rememberInfo");
    }

    try {
      const apiUrl = "https://stock-back.vercel.app/api/v1/user/login";
      const headers = {
        "Content-Type": "application/json",
      };
      axios
        .post(apiUrl, loginFormData, { headers })
        .then((res) => {
          if (res.data.success) {
            setLoginFormData({
              name: "",
              password: "",
              email: "",
              phone: "",
            });
            setTogglePass(false);
            localStorage.setItem(
              "stockUserEmail",
              JSON.stringify(res.data.data.email)
            );
            // console.log(res.data.data);
            localStorage.setItem("stockUserToken", res.data.data.token);
            setUserToken(res.data.data.token);
            handleGetUserDetails(res.data.data.email, res.data.data.token);
            Swal.fire({
              title: "Login Successful!",
              text: "Do you want to continue",
              icon: "success",
              confirmButtonText: "OK",
            });
            setIsLoginLoading(false);
            navigate("/");
          }
        })
        .catch((err) => {
          console.log("login error", err);
          setCustomLoginError(err.message); // Display user-friendly error message
          setIsLoginLoading(false);
          setTogglePass(false);
          setIsLoginLoading("false");
        });
    } catch (err) {
      toast.error("Network Error");
      console.log(err);
      setIsLoginLoading(false);
    }
  };

  const handleLoginInputChange = (e) => {
    setCustomLoginError("");
    const { name, value } = e.target;
    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });
  };

  // // User registration from here
  const handleRegister = async (e) => {
    setIsRegisterLoading(true);
    e.preventDefault();
    if (
      registrationFormData.name === "" ||
      registrationFormData.email === "" ||
      registrationFormData.phone === "" ||
      registrationFormData.password === ""
    ) {
      setIsRegisterLoading(false);
      return setCustomRegisterError("Please fill the required field!");
    } else if (registrationFormData.password.length < 8) {
      setIsRegisterLoading(false);
      return setCustomRegisterError("Password must be at least 8 characters!");
    } else if (!/[A-Z]/.test(registrationFormData.password)) {
      setIsRegisterLoading(false);
      return setCustomRegisterError("Password must be at least 1 uppercase!");
    } else if (!/[a-z]/.test(registrationFormData.password)) {
      setIsRegisterLoading(false);
      return setCustomRegisterError("Password must be at least 1 lowercase!");
    } else if (
      !/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(registrationFormData.password)
    ) {
      setIsRegisterLoading(false);
      return setCustomRegisterError(
        "Password contain at least 1 special character!"
      );
    } else if (!/\d/.test(registrationFormData.password)) {
      setIsRegisterLoading(false);
      return setCustomRegisterError("Password must be at least 1 number!");
    }

    try {
      const apiUrl = "https://stock-back.vercel.app/api/v1/user";
      const headers = {
        "Content-Type": "application/json",
      };
      axios
        .post(apiUrl, registrationFormData, { headers })
        .then((res) => {
          // form.reset();
          if (res.data.success) {
            setRegistrationFormData({
              name: "",
              password: "",
              email: "",
              phone: "",
            });
            setIsRegisterLoading(false);
            toast.success("User registration successful");
            setToggleRegisterPass(false);
            handleAnimationRemove("sign-up-mode");
          }
        })
        .catch((err) => {
          console.log("registration error", err.response.data.message);
          setCustomRegisterError(err.response.data.message);
          setIsRegisterLoading(false);
          setToggleRegisterPass(false);
        });
    } catch (err) {
      toast.error("Network Error");
      setIsRegisterLoading(false);
      console.log(err);
    }
  };

  const handleRegistrationInputChange = (e) => {
    setCustomRegisterError("");
    const { name, value } = e.target;
    setRegistrationFormData({
      ...registrationFormData,
      [name]: value,
    });

    if (name === "Password") {
      setPasswordIsValid(passwordRegex.test(value));
    }
  };

  const handleLoginValidation = () => {};

  // Add animation when button click
  const handleAnimationAdd = (text) => {
    let container = document.querySelector(".container");
    container.classList.add(text);
  };

  // Remove animation when button click
  const handleAnimationRemove = (text) => {
    let container = document.querySelector(".container");
    container.classList.remove(text);
  };
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="w-full relative bg-[#289dcf17] overflow-x-hidden">
      <Link
        to="/"
        className="absolute top-[15px] left-[15px] z-[10] font-montserrat font-medium uppercase border-2 border-primary bg-[#121c21] py-1 pt-[6px] px-3 rounded-full text-[13px] flex items-center justify-center gap-[2px] hover:gap-[4px] hover:text-primary duration-75"
      >
        <PiArrowBendDoubleUpLeftBold size={16} className="-mt-[2px]" /> Go Home
      </Link>
      <div className="container w-full">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form" onSubmit={handleLogin}>
              <h2 className="login-title text-primary font-semibold font-poppins capitalize">
                Login
              </h2>
              <div className="input-field">
                <i className="fas fa-user pt-4 ps-3 text-primary"></i>
                <input
                  type="email"
                  placeholder="Email address"
                  name="email"
                  defaultValue={rememberInformation?.email}
                  value={loginFormData.email}
                  onChange={handleLoginInputChange}
                  className="font-montserrat"
                  required
                />
              </div>
              <div className="input-field relative">
                <i className="fas fa-lock pt-4 ps-3 text-primary"></i>
                <input
                  type={togglePass ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  defaultValue={rememberInformation?.password}
                  value={loginFormData.password}
                  onChange={handleLoginInputChange}
                />
                <div
                  className="absolute top-[18px] right-[20px] text-[19px] text-[#ffffff7e] hover:text-primary duration-75 cursor-pointer"
                  onClick={() => setTogglePass(!togglePass)}
                >
                  {togglePass ? <BsEyeSlash /> : <BsEye />}
                </div>
              </div>
              <div className="flex items-start text-left mt-[-5px] w-full max-w-[360px]">
                {customLoginError ? (
                  <span className="text-red-400 duration-100 capitalize font-montserrat text-base font-medium">
                    {customLoginError}!
                  </span>
                ) : (
                  <span className="text-red-400 opacity-0 capitalize font-montserrat text-base font-medium">
                    sdf
                  </span>
                )}
              </div>
              <div className="flex items-start justify-start w-full max-w-[370px] ">
                <input
                  className="checkbox h-[18px] w-[18px] cursor-pointer rounded-md border border-primary"
                  type="checkbox"
                  id="rememberMe"
                  name="checkedBtn"
                  checked={isChecked}
                  onClick={handleCheckboxChange}
                />
                <label
                  className="cursor-pointer pl-2 font-montserrat text-base font-normal leading-[1.3rem] tracking-[0.32px] text-[#fff]"
                  htmlFor="rememberMe"
                >
                  Remember Me
                </label>
              </div>
              <button
                type="submit"
                value="Login"
                className="bg-pritext-primary flex items-center gap-2 !w-full !max-w-[370px] justify-center submitBtn font-montserrat solid"
                onClick={handleLoginValidation}
                disabled={isLoginLoading}
              >
                {isLoginLoading ? (
                  <>
                    Login{" "}
                    <span className="loading loading-spinner mt-[-3px] !w-[18px]"></span>
                  </>
                ) : (
                  <span className="">Login</span>
                )}
              </button>
            </form>
            <form action="#" className="sign-up-form" onSubmit={handleRegister}>
              <h2 className="login-title text-primary font-semibold font-poppins capitalize">
                Sign up
              </h2>
              <div className="input-field">
                <i className="fas fa-user pt-4 ps-3 text-primary"></i>
                <input
                  type="text"
                  placeholder="Full name"
                  name="name"
                  value={registrationFormData.name}
                  onChange={handleRegistrationInputChange}
                />
              </div>

              <div className="input-field">
                <i className="fa-solid fa-phone pt-4 ps-3 text-primary"></i>
                <input
                  type="number"
                  placeholder="Phone Number"
                  name="phone"
                  value={registrationFormData.phone}
                  onChange={handleRegistrationInputChange}
                />
              </div>
              <div className="input-field flex">
                <div className="flex text-primary text-[20px] pt-4 ps-3">
                  <BiLogoGmail />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={registrationFormData.email}
                  onChange={handleRegistrationInputChange}
                />
              </div>
              {passwordIsValid ? (
                <div className="input-field relative !mb-0">
                  <i className="fas fa-lock pt-4 ps-3 text-primary"></i>
                  <input
                    type={toggleRegisterPass ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    value={registrationFormData.password}
                    onChange={handleRegistrationInputChange}
                  />
                  <div
                    className="absolute top-[18px] right-[20px] text-[19px] text-[#ffffff7e] hover:text-primary duration-75 cursor-pointer"
                    onClick={() => setToggleRegisterPass(!toggleRegisterPass)}
                  >
                    {toggleRegisterPass ? <BsEyeSlash /> : <BsEye />}
                  </div>
                </div>
              ) : (
                <div className="input-field !mb-0">
                  <i className="fa-solid fa-xmark pt-[18px] ps-3 text-primary"></i>
                  {/*  */}
                  <input
                    type={toggleRegisterPass ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    value={registrationFormData.password}
                    onChange={handleRegistrationInputChange}
                  />
                  <div
                    className="absolute top-[18px] right-[20px] text-[19px] text-[#ffffff7e] hover:text-primary duration-75 cursor-pointer"
                    onClick={() => setToggleRegisterPass(!toggleRegisterPass)}
                  >
                    {toggleRegisterPass ? <BsEyeSlash /> : <BsEye />}
                  </div>
                </div>
              )}
              <div className="input-field !mb-0 !mt-5">
                <i className="fa-solid fa-link pt-[16px] ps-3 text-primary"></i>
                <input
                  type="text"
                  placeholder="Referral Code"
                  name="refer_code"
                  className="font-montserrat"
                />
              </div>
              <div className="flex items-start text-left w-full max-w-[370px] mt-1">
                {customRegisterError ? (
                  <span className="text-red-400 duration-100 capitalize font-montserrat text-[15px] font-medium">
                    {customRegisterError}
                  </span>
                ) : (
                  <span className="text-red-400 capitalize font-montserrat text-[15px] font-medium opacity-0">
                    sdf
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="submitBtn font-montserrat flex items-center !w-full !max-w-[370px] justify-center gap-2"
                value="Sign up"
              >
                {isRegistrationLoading ? (
                  <>
                    Signing{" "}
                    <span className="loading loading-spinner !w-[16px]"></span>
                  </>
                ) : (
                  <span className="">Sign Up</span>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p className="">
                Create an account to start using the platform for explore an
                amazing smartly, safely trading features!
              </p>
              <button
                onClick={() => handleAnimationAdd("sign-up-mode")}
                className="btn transparent"
                id="sign-up-btn"
              >
                Sign up
              </button>
            </div>
            <img src={logImg} className="image" alt="Login_svg" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Hey welcome back, hurry up to login your account and get access
                for trading world to earn money safely!
              </p>
              <button
                onClick={() => handleAnimationRemove("sign-up-mode")}
                className="btn transparent"
                id="sign-in-btn"
              >
                Login
              </button>
            </div>
            <img src={registerImg} className="image" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
