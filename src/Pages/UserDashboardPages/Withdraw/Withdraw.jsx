import { useContext, useState } from "react";
import { useWithdrawPostMutation } from "../../../API/Users/Withdraw/withdrawSlice";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Providers/AuthProvider";

const Withdraw = () => {
  const { user } = useContext(AuthContext);
  const [withdrawPost, { isLoading }] = useWithdrawPostMutation();
  let [withdrawFormData, setWithdrawFormData] = useState({
    withdrawAddress: "",
    amount: "",
  });

  const handleWithdraw = async () => {
    if (
      withdrawFormData?.amount === "" ||
      withdrawFormData?.withdrawAddress === ""
    ) {
      return toast.error("Please fill the required field!");
    }if(withdrawFormData?.amount < 10){
      return toast.error("Minimum withdraw amount is $10");
    }
    if(withdrawFormData?.amount > user?.current_balance){
      return toast.error("You don't have enough balance!");
    }

    try {
      const postData = {
        userEmail: user?.email,
        userId: user?._id,
        amount: withdrawFormData?.amount,
        withdrawAddress: withdrawFormData?.withdrawAddress,
      };

      const result = await withdrawPost(postData);
      console.log(result);
      if (result.error?.status === 500) {
        toast.error(result.error.data.message);
      }
      // console.log(result.error);
      if (result.data?.success === true) {
        toast.success("Withdraw successfully done!");
      }

      console.log("withdraw", postData);
    } catch (e) {
      toast.error(e.data);
    }

    setWithdrawFormData({
      withdrawAddress: "",
      amount: "",
    });
  };

  const handleWithdrawInputChange = (e) => {
    const { name, value } = e.target;
    const newValue = name === "amount" ? parseFloat(value) : value;
    setWithdrawFormData({
      ...withdrawFormData,
      [name]: newValue,
    });
  };
  return (
    <div className="main-container flex justify-center items-baseline">
      <div className="w-full mx-auto rounded-xl glass py-2 pt-0 md:pt-2 px-5 -mt-[10px] md:mt-[5px] lg:mt-[30px] xl:mt-[25px]">
        <div className="w-full mx-auto">
          <h1 className="text-center subTitleStyle poppins">
            Get Money With <span>Withdraw</span> Request<span>.</span>
          </h1>
        </div>
        <div className="poppins w-full mx-auto">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleWithdraw();
            }}
            className="w-full mx-auto ps-0 pe-0"
          >
            <div className="lg:grid lg:grid-cols-1 md:grid md:grid-cols-1 sm:grid sm:grid-cols-1 xs:grid xs:grid-cols-1 gap-2 w-full">
              <div className="flex flex-col w-full justify-start">
                <label className="text-[16px] font-medium font-montserrat mt-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Email address"
                  value={user?.email}
                  disabled
                  className="font-montserrat border border-slate-500 px-3 bg-[#2e3b56] text-inherit w-full h-[50px] tracking-[0.3px] rounded-lg focus:outline-none pr-2"
                />
              </div>

              <div className="flex flex-col w-full justify-start">
                <label className="text-[16px] font-medium font-montserrat mt-2">
                  Enter User ID
                </label>
                <input
                  type="text"
                  placeholder="Enter User ID"
                  value={user?._id}
                  disabled
                  className="font-montserrat border border-slate-500 px-3 bg-[#2e3b56] text-inherit w-full h-[50px] tracking-[0.3px] rounded-lg focus:outline-none pr-2"
                />
              </div>
              <div className="flex flex-col w-full justify-start">
                <label className="text-[16px] font-medium font-montserrat mt-2">
                  Amount
                </label>
                <input
                  type="number"
                  placeholder="Amount"
                  name="amount"
                  value={withdrawFormData?.amount}
                  onChange={handleWithdrawInputChange}
                  className="font-montserrat border border-slate-500 px-3 bg-[#141a27] text-inherit w-full h-[50px] tracking-[0.3px] rounded-lg focus:outline-none pr-2"
                />
              </div>
              <div className="flex flex-col w-full justify-start">
                <label className="text-[16px] font-medium font-montserrat mt-2">
                  Withdraw Address (For USDT)
                </label>
                <input
                  type="text"
                  placeholder="Withdraw Address"
                  name="withdrawAddress"
                  value={withdrawFormData?.withdrawAddress}
                  onChange={handleWithdrawInputChange}
                  className="font-montserrat border border-slate-500 px-3 bg-[#141a27] text-inherit w-full h-[50px] tracking-[0.3px] rounded-lg focus:outline-none pr-2"
                />
              </div>
            </div>

            <button
              type="submit"
              className="cursor-pointer w-full md:w-fit bg-primary hover:glass duration-200 p-[10px] px-5 rounded-full mt-8 mb-3"
            >
              {isLoading ? (
                <p className="poppins font-medium">Submitting Request...</p>
              ) : (
                <p className="poppins font-medium">Submit Request</p>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
