import { useEffect, useState } from "react";
import { useUserDepositMutation } from "../../../API/Users/userDeposit/UserDepositSlice";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import ImageUploader from "../../../SharedComponent/ImageUploader/ImageUploader";

const Deposit = () => {
  const { user, globalData } = useContext(AuthContext);
  const [userDeposit, { isLoading }] = useUserDepositMutation();

  console.log('globalData', globalData);

  // For Deposit Screenshot send in backend
  const [imageUrl, setImageUrl] = useState("");
  const [depositImage, setDepositImage] = useState();
  const imageUploadToken = import.meta.env.VITE_Image_Upload_Token;
  const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${imageUploadToken}`;
  const [imageHostLoading, setImageHostLoading] = useState(false);

  // Deposit Body Data For Post Request
  let [depositFormData, setDepositFormData] = useState({
    userEmail: user?.email,
    userId: user?._id,
    amount: 0,
    depositAddress: globalData?.adminWalletAddress,
    transactionId: "",
  });

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
        }
        setImageHostLoading(false);
      })
      .catch((err) => {
        setImageUrl("");
        setImageHostLoading(false);
      });
  };
  useEffect(() => {
    handleImageUpload();
  }, [depositImage]);

  const handleDeposit = async () => {
    if (
      depositFormData.amount < 0 ||
      depositFormData.transactionId === ""
    ) {
      return toast.error("Please fill the required field!");
    }
    if (imageUrl === "") {
      return toast.error("Please upload your deposit screenshot!");
    }
    if (depositFormData.amount < 100) {
      return toast.error("Fill the minimum deposit amount $100");
    }

    try {
      const postData = {
        userEmail: user?.email,
        userId: user?._id,
        amount: depositFormData?.amount,
        depositAddress: globalData?.adminWalletAddress,
        transactionId: depositFormData?.transactionId,
        imageUrl: imageUrl,
      };

      const result = await userDeposit(postData);

      if (result.error?.status === 500) {
        toast.error(result.error.data.message);
      }

      if (result.data?.success === true) {
        toast.success("Your deposit was successfully done!");
      } else {
        // console.log("deposit error: ", result);
      }
    } catch (e) {
      toast.error(e.data);
    }

    // Reset form fields after submission
    setDepositFormData({
      userEmail: user?.email,
      userId: user?._id,
      depositAddress: globalData?.adminWalletAddress,
      transactionId: "",
      amount: 0,
      imageUrl: imageUrl, // Set imageUrl here after it's been updated
    });
    setDepositImage(null); // Reset the image state
    setImageUrl(""); // Reset the imageUrl state
  };

  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    const newValue = name === "amount" ? parseFloat(value) : value;
    setDepositFormData({
      ...depositFormData,
      [name]: newValue,
    });
  };
  return (
    <div className="main-container">
      <div className="flex justify-center items-center -mt-[95px] md:-mt-[5px] lg:mt-[30px] xl:mt-[25px]">
        <div className="w-full mx-auto rounded-xl glass py-2 px-5">
          <div className="w-full mx-auto">
            <h1 className="text-center pt-3 subTitleStyle poppins">
              Start <span>Earning</span> With Minimum <span>Deposit</span>.
            </h1>
          </div>
          <div className="poppins w-full lg:w-[95%] mx-auto">
            <div className="w-full flex flex-col md:flex-row-reverse gap-x-5 justify-around">
              <div className="w-[180px] mx-auto my-5 md:my-0 md:mx-0 md:w-[38%] md:pt-8 h-[200px] md:h-[300px] lg:h-[367px]">
                <ImageUploader
                  image={depositImage}
                  setState={setDepositImage}
                />
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleDeposit();
                }}
                className="w-full lg:w-[100%] mx-auto ps-0 pe-0"
              >
                <div className="w-full flex justify-center items-center flex-col">
                  <div className="w-full flex flex-col md:flex-row items-center sm:gap-2">
                    <div className="flex flex-col w-full justify-start pb-1 sm:pb-0">
                      <label className="text-[16px] font-medium font-montserrat mt-2">
                        Email Address
                      </label>
                      <input
                        type=""
                        placeholder="Email address"
                        name="userEmail"
                        value={user?.email}
                        className="font-montserrat border border-slate-500 px-3 bg-[#2e3b56] text-inherit w-full h-[50px] tracking-[0.3px] rounded-lg focus:outline-none pr-2"
                        disabled={true}
                      />
                    </div>

                    <div className="flex flex-col w-full justify-start mt-1 sm:mt-0">
                      <label className="text-[16px] font-medium font-montserrat mt-2">
                        Enter User ID
                      </label>
                      <input
                        type=""
                        placeholder="Enter User ID"
                        name="_id"
                        value={user?._id}
                        disabled={true}
                        className="font-montserrat border border-slate-500 px-3 bg-[#2e3b56] text-inherit w-full h-[50px] tracking-[0.3px] rounded-lg focus:outline-none pr-2"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col w-full justify-start mt-1.5">
                    <label className="text-[16px] font-medium font-montserrat mt-2">
                      Deposit Address
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        placeholder="Deposit Address"
                        name="depositAddress"
                        value={globalData?.adminWalletAddress}
                        disabled={true}
                        className="font-montserrat border px-3 border-slate-500 bg-[#2e3b56] text-inherit w-full h-[50px] tracking-[0.3px] rounded-lg focus:outline-none pr-2"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col w-full justify-start mt-1.5">
                    <label className="text-[16px] font-medium font-montserrat mt-2">
                      Deposit Amount
                    </label>
                    <input
                      type="number"
                      placeholder="Deposit Amount"
                      name="amount"
                      value={depositFormData?.amount}
                      onChange={handleLoginInputChange}
                      className="font-montserrat border border-slate-500 px-3 bg-[#141a27] text-inherit w-full h-[50px] tracking-[0.3px] rounded-lg focus:outline-none pr-2"
                    />
                    <span className="text-red-500 text-[14px]">
                      *NetWork (only send tether (USDT) (Only Make deposits
                      through the Torn (TRC20) network
                    </span>
                  </div>

                  <div className="flex flex-col w-full justify-start mt-1.5">
                    <label className="text-[16px] font-medium font-montserrat mt-2">
                      Transaction ID
                    </label>
                    <input
                      type="text"
                      placeholder="Transaction ID"
                      name="transactionId"
                      value={depositFormData?.transactionId}
                      onChange={handleLoginInputChange}
                      className="font-montserrat border border-slate-500 px-3 bg-[#141a27] text-inherit w-full h-[50px] tracking-[0.3px] rounded-lg focus:outline-none pr-2"
                    />
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
                          Submit Request{" "}
                          <span className="loading loading-spinner !w-[18px]"></span>
                        </>
                      ) : (
                        <span className="">Submit Request</span>
                      )}

                      {/* <p className="poppins font-medium">
                      Submit Payment Request
                    </p> */}
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
