import { useContext, useEffect } from "react";
import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { AuthContext } from "../../../Providers/AuthProvider";
import dummyImg from "../../../../public/dummy-image.jpg";
import axios from "axios";
import { HashLoader } from "react-spinners";
import toast from "react-hot-toast";
import ImageUploader from "../../../SharedComponent/ImageUploader/ImageUploader";
// import TradeHistory from "../TradeHistory/TradeHistory";
import AOS from "aos";
import "aos/dist/aos.css";

const UserDashboard = () => {
  const { userToken, user, loading, handleGetUserDetails } =
    useContext(AuthContext);

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const [imageUrl, setImageUrl] = useState("");
  const [depositImage, setDepositImage] = useState();
  const imageUploadToken = import.meta.env.VITE_Image_Upload_Token;
  const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${imageUploadToken}`;
  const [imageHostLoading, setImageHostLoading] = useState(false);

  const [updateInfo, setUpdateInfo] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // Deposit Screenshot Hosting
  const handleImageUpload = () => {
    setImageHostLoading(true);
    const formData = new FormData();
    formData.append("image", depositImage);
    fetch(imageHostingUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          setImageUrl(imgResponse.data.display_url);
          setImageHostLoading(false);
          console.log("image host: ", imgResponse.data.display_url);
        }
        setImageHostLoading(false);
      })
      .catch((err) => {
        setImageUrl("");
        setImageHostLoading(false);
      });
  };
  useEffect(() => {
    if (depositImage) {
      handleImageUpload();
    }
  }, [depositImage]);

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.target;

    const name = form.name.value;
    const phone = form.phone.value;
    const user_about = form.user_about.value;
    const email = user?.email;

    try {
      const apiUrl = "https://stock-back.vercel.app/api/v1/user/update";
      const postData = {
        email,
        name,
        user_about,
        phone,
        image: imageUrl,
      };
      console.log(postData);
      const headers = {
        "Content-Type": "application/json",
        authorization: `Bearer ${userToken}`,
      };
      console.log(headers.authorization);
      axios
        .patch(apiUrl, postData, { headers })
        .then((res) => {
          console.log("update res: ", res);
          // console.log(postdata);
          if (res.data.success) {
            console.log("update res success: ", res.data.data);
            handleGetUserDetails(user?.email, userToken);
            toast.success("Successfully updated!");
            setUpdateInfo(true);
          }
        })
        .catch((err) => {
          console.log("update error", err);
          // setLoading(false);
        });
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return (
      <div className="min-w-[99vw] mx-auto h-screen flex items-center justify-center overflow-x-hidden">
        <HashLoader color="#289dcf" />
      </div>
    );
  }

  return (
    <main className="main-container" >
      <div
        className={`flex flex-col md:flex-row items-start gap-5 -mt-[95px] md:mt-[20px] lg:mt-[0px] xl:mt-[50px] ${
          !updateInfo && "md:-mt-[-120px]"
        }`}
      >
        <div
          className={`w-full max-w-[250px] box-border flex flex-col items-start justify-center`}
          data-aos="fade-right"
        >
          <div className="flex flex-col items-center justify-center w-full">
            <div className="w-full h-full p-[10px] border-2 rounded-lg border-primary">
              {!updateInfo ? (
                <div className="w-full max-w-[250px] mx-auto h-[200px] flex">
                  <ImageUploader
                    image={depositImage}
                    setState={setDepositImage}
                  />
                </div>
              ) : (
                <img
                  className="w-full max-w-[250px] mx-auto h-[200px] flex object-cover rounded-lg bg-[#b9a8d1]"
                  src={user?.image || dummyImg}
                  alt="Image"
                />
              )}
            </div>
            <div className="flex items-start justify-center mt-2">
              <h1 className="text-[15px] font-montserrat text-primary font-medium">
                Active
              </h1>
              <div className="w-[8px] h-[8px] bg-green-500 rounded-full"></div>
            </div>

            <div className="flex items-center text-[12px] gap-2 font-montserrat">
              <span className="text-primary font-semibold">ID: </span>
              <p className="uppercase text-[#9eb4e8]">{user?._id}</p>
            </div>
          </div>
          <div className="flex text-[#9eb4e8] flex-col items-start capitalize text-[12px] box-border mt-3 gap-0 font-montserrat">
            <p className="text-[16px] text-slate-200">{user?.name}</p>
            <p className="lowercase ">{user?.email}</p>
            <p className="text-[15px] mt-[10px] flex flex-col">
              <span className="text-[13px] bg-[#1c2842] opacity-100 w-fit px-1 rounded-[4px]">
                Description
              </span>
              <span className="text-[#8b9fcd] font-medium">
                {user?.user_about || "Member of CT Option"}
              </span>
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="-mt-[10px] flex items-baseline justify-between" data-aos="fade-down">
            <h1 className="text-primary text-[20px] sm:text-[24px] md:text-[28px] font-montserrat font-semibold">
              User Information:
            </h1>
            <button
              onClick={() => setUpdateInfo(false)}
              className="text-[16px] text-primary hover:text-orange-500 duration-200 font-medium font-montserrat flex items-center gap-1"
            >
              <BiEdit size={18} />
              <span className="hidden sm:block">Edit Profile</span>
            </button>
          </div>
          <form
            className="w-full lg:w-[100%] mx-auto ps-0 pe-0"
            onSubmit={handleUpdateUser}
            data-aos="fade-down"
          >
            <div className="w-full flex justify-center flex-col">
              <div className="w-full mt-3 grid grid-cols-1 md:grid-cols-2 gap-1 sm:gap-4">
                <div className=" mt-1 sm:mt-0">
                  <label className="text-[16px] font-medium font-montserrat mt-2">
                    Email address
                    {/* <span className="">
                          <i className="fa-solid fa-asterisk text-sm w-[8px] ms-1 pb-1 text-primary"></i>
                        </span> */}
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className={`font-montserrat border border-slate-500 px-3 bg-[#111827] text-inherit w-full h-[45px] tracking-[0.3px] rounded-lg focus:outline-none pr-2`}
                    defaultValue={user?.email}
                    disabled={true}
                  />
                </div>
                <div></div>
                <div className="pb-1 sm:pb-0">
                  <label className="text-[16px] font-medium font-montserrat mt-2">
                    Full Name
                    {/* <span className="">
                          <i className="fa-solid fa-asterisk text-sm w-[8px] ms-1 pb-1 text-primary"></i>
                        </span> */}
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    className={`font-montserrat border ${
                      !updateInfo
                        ? "bg-[#1c2842] border-2 border-primary"
                        : "border-slate-500"
                    } px-3 bg-[#111827] text-inherit w-full h-[45px] tracking-[0.3px] rounded-lg focus:outline-none pr-2`}
                    defaultValue={user?.name}
                    disabled={updateInfo}
                  />
                </div>

                <div className=" pb-1 sm:pb-0">
                  <label className="text-[16px] font-medium font-montserrat mt-2">
                    Phone number
                    {/* <span className="">
                          <i className="fa-solid fa-asterisk text-sm w-[8px] ms-1 pb-1 text-primary"></i>
                        </span> */}
                  </label>
                  <input
                    type="number"
                    placeholder="Phone number"
                    name="phone"
                    className={`font-montserrat border ${
                      !updateInfo
                        ? "bg-[#1c2842] border-2 border-primary"
                        : "border-slate-500"
                    } px-3 bg-[#111827] text-inherit w-full h-[45px] tracking-[0.3px] rounded-lg focus:outline-none pr-2`}
                    defaultValue={user?.phone}
                    disabled={updateInfo}
                  />
                </div>
                {!updateInfo && (
                  <div className="col-span-full mt-1 sm:mt-0">
                    <label className="text-[16px] font-medium font-montserrat mt-2">
                      Description
                      {/* <span className="">
                          <i className="fa-solid fa-asterisk text-sm w-[8px] ms-1 pb-1 text-primary"></i>
                        </span> */}
                    </label>
                    <textarea
                      type="text"
                      placeholder="About yourself ?"
                      name="user_about"
                      className={`font-montserrat min-h-[100px] flex items-start justify-start border ${
                        !updateInfo
                          ? "bg-[#1c2842] border-2 border-primary"
                          : "border-slate-500"
                      } px-3 bg-[#111827] text-inherit w-full tracking-[0.3px] rounded-lg focus:outline-none pr-2 py-2`}
                      defaultValue={user?.user_about}
                      disabled={updateInfo}
                    ></textarea>
                  </div>
                )}
              </div>

              {!updateInfo && (
                <div className="flex items-start justify-start flex-col sm:flex-row gap-2">
                  <div
                    onClick={() => setUpdateInfo(true)}
                    className="cursor-pointer w-full sm:w-fit bg-slate-500 hover:glass duration-200 p-[10px] px-5 rounded-lg mt-8 mb-3"
                  >
                    <p className="poppins font-medium">Cancel</p>
                  </div>

                  {imageHostLoading ? (
                    <div className="w-full md:w-[300px] mx-auto flex items-center justify-center bg-primary duration-200 py-[14px] px-5 rounded-full mt-8 mb-3">
                      <span className="loading loading-bars loading-xs"></span>
                      <span className="loading loading-bars loading-xs"></span>
                      <span className="loading loading-bars loading-xs"></span>
                    </div>
                  ) : (
                    <button
                      type="submit"
                      className="cursor-pointer w-full md:w-[300px] mx-auto bg-primary hover:glass duration-200 p-[10px] px-5 rounded-full mt-8 mb-3 font-montserrat flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <>
                          Update Profile{" "}
                          <span className="loading loading-spinner !w-[18px]"></span>
                        </>
                      ) : (
                        <span className="">Update Profile</span>
                      )}

                      {/* <p className="poppins font-medium">
                      Submit Payment Request
                    </p> */}
                    </button>
                  )}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default UserDashboard;
