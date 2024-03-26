import { useContext, useState } from "react";
import SharedDropdown from "../../../SharedComponent/SharedDropdown/SharedDropdown";
import { useUpdateSingleDepositMutation } from "../../../API/Users/userDeposit/UserDepositSlice";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Providers/AuthProvider";

const DepositContent = ({ id, data, setModalOpen }) => {
  const {handleGetUserDetails} = useContext(AuthContext);
  const [dropdownValues, setDropdownValues] = useState({});
  const [updateSingleDeposit, { isLoading }] = useUpdateSingleDepositMutation();

  // TODO:: Updated Notification
  const handleChangeDepositStatus = async () => {
    if (dropdownValues.deposit_status === "Select changes") {
      return toast.success("Please select a status");
    }
    const res = await updateSingleDeposit({
      id: id,
      data: {
        email: "",
        amount: data.amount,
        status: dropdownValues ? dropdownValues.deposit_status : "",
        userEmail: data.userEmail,
        userId: data.userId,
      },
    });
    console.log("deposit admin res", res);

    if (res.data.success) {
      toast.success("Data updated successful.");
      handleGetUserDetails();
      setModalOpen(false);
    } else {
      // console.log(res.data.success);
      toast.error("Something wen't wrong!");
      setModalOpen(false);
    }
  };

  return (
    <div className="">
      <SharedDropdown
        label="deposit_status"
        options={["rejected", "approved"]}
        setDropdownValues={setDropdownValues}
        value="Select changes"
      />
      <div className="flex items-center justify-center mt-5">
        {dropdownValues?.deposit_status ? (
          <button
            className="bg-primary text-center px-5 py-2 flex items-center gap-2 justify-center font-medium w-full max-w-xs rounded-full"
            onClick={() => handleChangeDepositStatus()}
          >
            {isLoading ? (
              <>
                Send Message{" "}
                <span className="loading loading-spinner !w-[16px]"></span>
              </>
            ) : (
              <p className="">Change status</p>
            )}
          </button>
        ) : (
          <button className="bg-primary text-center cursor-not-allowed px-5 py-2 flex items-center gap-2 justify-center font-medium w-full max-w-xs rounded-full">
            Please select a option
          </button>
        )}
      </div>
    </div>
  );
};

export default DepositContent;
