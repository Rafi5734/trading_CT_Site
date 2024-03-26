import { useContext, useState } from "react";
import SharedDropdown from "../../../SharedComponent/SharedDropdown/SharedDropdown";
// import { useUpdateSingleWithdrawMutation } from "../../../API/Users/Withdraw/withdrawSlice";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useUpdateSingleRecentTradeMutation } from "../../../API/Users/Trade/tradeSlice";

const RecentTradeContent = ({ data, setModalOpen }) => {
  
  const { adminToken, adminEmail } = useContext(AuthContext);
  const [dropdownValues, setDropdownValues] = useState({});
  const [updateSingleRecentTrade, { isLoading }] =
    useUpdateSingleRecentTradeMutation();

  const handleTradeUpdate = async (e) => {
    
    e.preventDefault();
    const form = e.target;
    const adminPass = form?.adminPass?.value;
    console.log(adminPass);
    if (adminPass === "") {
      return toast.error("Please provide admin password");
    }
    if (dropdownValues.withdraw_status === "") {
      return toast.error("Please select a status!");
    }
    console.log(dropdownValues);
    const res = await updateSingleRecentTrade({
      id: data?._id,
      adminToken,
      data: {
        email: adminEmail,
        status: "approved",
        password: adminPass,
        userEmail: data?.email,
        returnRate: data?.returnRate,
        returnAmount: data?.returnAmount,
        tradeId: data?._id,
        result: dropdownValues ? dropdownValues.trade_status : "",
      },
    });
    if (res.error) {
      toast.error(`User have ${res.error.data?.errorMessages[0].message}`);
    }
    console.log("withdraw admin res", res);

    if (res.data.success) {
      toast.success("Updated successful.");
      setModalOpen(false);
    } else {
      console.log(res);
      toast.error("Something wen't wrong!");
      setModalOpen(false);
    }
  };
  return (
    <div>
      <SharedDropdown
        label="trade_status"
        options={["profit", "lost"]}
        setDropdownValues={setDropdownValues}
        value="Select changes"
      />

      <div className="flex items-center justify-center mt-5">
        <form onSubmit={handleTradeUpdate}>
          <div className="flex flex-col w-full justify-start mb-5">
            <label className="text-[15px] font-medium font-montserrat mt-2">
              Admin Password
            </label>
            <input
              type="password"
              placeholder="Admin Password"
              name="adminPass"
              className="font-montserrat border border-slate-500 px-3 bg-[#2e3b56] text-inherit w-full h-[40px] tracking-[0.3px] rounded-lg focus:outline-none pr-2 "
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-center px-5 py-2 font-medium w-full max-w-xs rounded-full flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                Change Status{" "}
                <span className="loading loading-spinner !w-[16px]"></span>
              </>
            ) : (
              <p className="">Change Status</p>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RecentTradeContent;
