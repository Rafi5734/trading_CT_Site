import { useContext, useState } from "react";
import SharedDropdown from "../../../SharedComponent/SharedDropdown/SharedDropdown";
import { useUpdateSingleWithdrawMutation } from "../../../API/Users/Withdraw/withdrawSlice";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Providers/AuthProvider";

const GlobalChangeContent = ({ id, setModalOpen }) => {

  const {handleGetUserDetails, adminEmail, adminToken} = useContext(AuthContext);
  const [dropdownValues, setDropdownValues] = useState({});
  const [updateSingleWithdraw, { isLoading }] =
    useUpdateSingleWithdrawMutation();

  // TODO:: Updated Notification
  // const handleChangeWithdrawStatus = async (id) => {
  //   const res = await updateSingleWithdraw({
  //     id,
  //     status: dropdownValues.withdraw_status
  //       ? dropdownValues.withdraw_status
  //       : status,
  //   });
  //   if (res.data.success) {
  //     toast.success('Data updated successful.')
  //     setModalOpen(false);
  //   }else{
  //     console.log(res.data.success);
  //     toast.error("Something wen't wrong!")
  //     setModalOpen(false);
  //   }
  // };
  const handleChangeGlobalStatus = async () => {
    if (dropdownValues.withdraw_status === "") {
      return toast.error("Please select a status!");
    }
    console.log(dropdownValues);
    const res = await updateSingleWithdraw({
      id: id,
      data: {
        email: adminEmail,
        status: dropdownValues ? dropdownValues.withdraw_status : ""
      },
    });
    if(res.error){
      toast.error(`User have ${res.error.data.errorMessages[0].message}`)
    }
    console.log("withdraw admin res", res);
    

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
    <div>
      <SharedDropdown
        label="global_status"
        options={["rejected", "approved"]}
        setDropdownValues={setDropdownValues}
        value="Select changes"
      />

      <div className="flex items-center justify-center mt-5">
        <button
          className="bg-primary text-center px-5 py-2 font-medium w-full max-w-xs rounded-full flex items-center justify-center gap-2"
          onClick={() => handleChangeGlobalStatus(id)}
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
      </div>
    </div>
  );
};

export default GlobalChangeContent;