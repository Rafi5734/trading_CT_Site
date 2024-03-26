import axios from "axios";
import { Fragment, useState } from "react";
import { toast } from "react-hot-toast";
import { useDeleteAiPlanMutation } from "../../../API/Users/Bot/botSlice";

const DeleteCompo = ({
  id,
  setModalOpen,
  name,
  handleRefetchFunction,
  handleFunction,
  fetchUrl,
}) => {
  const [deleteAiPlan, { isLoading }] = useDeleteAiPlanMutation();
  // console.log("userId: ", id); // i have id in console
  // const [isLoading, setIsLoading] = useState(false);

  const token = localStorage.getItem("stockUserToken");
  const email = JSON.parse(localStorage.getItem("stockUserEmail"));

  const confirmDelete = async (e) => {
    e.preventDefault();
    // setIsLoading(true);

    const result = await deleteAiPlan({ email, token, id });

    console.log(result);

    if (result?.statusCode === 200) {
      toast.success("Message deleted successful");
      // setIsLoading(false);
      setModalOpen(false);
    }

    // const apiUrl = `${fetchUrl}/${id}`;

    // axios
    //   .delete(apiUrl)
    //   .then((res) => {
    //     if (res.data.status === "error") {
    //       toast.error(res.data.message);
    //       setIsLoading(false);
    //     } else {
    //       toast.success("Message deleted successful");
    //       setIsLoading(false);
    //       setModalOpen(false);
    //       if (handleFunction) {
    //         handleRefetchFunction();
    //       }
    //     }
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //     setIsLoading(false);
    //   });
  };

  const handleModal = (e) => {
    e.preventDefault();
    toast.error("Deleted Canceled!");
    setModalOpen(false);
  };
  return (
    <Fragment>
      <p className="text-[16px] md:text-[18px] lg:text-[20px] text-center mb-5">
        Are you sure you wanted to delete{" "}
        <span className="text-[#F76868]">{name}</span>?
      </p>
      <div className="flex items-center justify-end gap-2 lg:gap-3">
        <button
          onClick={handleModal}
          className="flex items-center justify-center gap-1 rounded-[5px] bg-[#F56E6E] px-2 py-[5px] font-poppins text-[15px] font-normal text-white"
        >
          <svg
            style={{ color: "#fff" }}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-x cursor-pointer"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>{" "}
          Cancel
        </button>
        <button
          type="submit"
          onClick={(e) => confirmDelete(e)}
          className="flex items-center justify-center gap-1 rounded-[5px] bg-[#63AD6F] px-2 py-[5px] font-poppins text-[15px] font-normal text-white"
        >
          <svg
            style={{ color: "#fff" }}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-check"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>{" "}
          {isLoading ? "Deleting..." : "Confirm"}
        </button>
      </div>
    </Fragment>
  );
};

export default DeleteCompo;
