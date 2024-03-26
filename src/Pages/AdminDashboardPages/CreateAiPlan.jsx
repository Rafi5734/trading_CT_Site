import { useState } from "react";
import { useAiPlanPostMutation } from "../../API/Users/Bot/botSlice";
import toast from "react-hot-toast";

const CreateAiPlan = () => {
  const token = localStorage.getItem("stockUserToken");
  const email = JSON.parse(localStorage.getItem("stockUserEmail"));
  const [aiPlanPost, { isLoading }] = useAiPlanPostMutation();
  let [aiPlanFormData, setAiPlanFormData] = useState({
    AiName: "",
    Price: 0,
    Return: 0,
    Duration: 24,
  });

  const handleAiPlanFormData = async () => {
    aiPlanFormData = Object.assign(aiPlanFormData, { email: email });
    console.log("AiPlanFormData", aiPlanFormData);

    if (
      aiPlanFormData.AiName === "" ||
      aiPlanFormData.Price === 0 ||
      aiPlanFormData.Return === 0 ||
      aiPlanFormData.Duration === null ||
      aiPlanFormData === undefined
    ) {
      return toast.error("Please fill the required field!");
    }

    try {
      const result = await aiPlanPost({ aiPlanFormData, token, email });

      if (result.error?.status === 500) {
        toast.error(result.error.data.message);
      }
      // console.log(result.error);
      if (result.data?.success === true) {
        toast.success("AI plane Created!");
      }
    } catch (e) {
      console.log(e);
      toast.error(e);
    }

    setAiPlanFormData({
      AiName: "",
      Price: 0,
      Return: 0,
      Duration: 24,
    });
  };

  const handleAiPlanInputChange = (e) => {
    const { name, value } = e.target;
    let parsedValue = value;

    if (name === "Price" || name === "Return" || name === "Duration") {
      parsedValue = parseFloat(value);
    }

    setAiPlanFormData({
      ...aiPlanFormData,
      [name]: parsedValue,
    });
  };
  return (
    <div>
      <div>
        <div className="bg-[#153045] ps-5 pe-5 rounded-xl">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAiPlanFormData();
            }}
            className="w-full lg:w-[100%] mx-auto mt-8 ps-0 pe-0"
          >
            <div className="lg:grid lg:grid-cols-2 sm:grid sm:grid-cols-2 xs:grid xs:grid-cols-1 gap-4 w-full">
              <div className="flex flex-col w-full justify-start pb-2">
                <label className="font-montserrat">Ai Plan Name</label>
                <input
                  type="text"
                  placeholder="AI name here..."
                  name="AiName"
                  value={aiPlanFormData?.AiName}
                  onChange={handleAiPlanInputChange}
                  className="font-montserrat mt-2 ps-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-inherit w-full h-[50px] rounded-md focus:outline-none pr-2"
                />
              </div>
              <div className="flex flex-col w-full justify-start pb-2">
                <label className="font-montserrat">Price</label>
                <input
                  type="number"
                  placeholder="Price"
                  name="Price"
                  value={aiPlanFormData?.Price}
                  onChange={handleAiPlanInputChange}
                  className="font-montserrat mt-2 ps-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-inherit w-full h-[50px] rounded-md focus:outline-none pr-2"
                />
              </div>
              <div className="flex flex-col w-full justify-start pb-2">
                <label className="font-montserrat">Return</label>
                <input
                  type="number"
                  placeholder="Return"
                  name="Return"
                  value={aiPlanFormData?.Return}
                  onChange={handleAiPlanInputChange}
                  className="font-montserrat mt-2 ps-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-inherit w-full h-[50px] rounded-md focus:outline-none pr-2"
                />
              </div>

              <div className="flex flex-col w-full justify-start">
                <label className="font-montserrat">Duration</label>
                <select
                  name="Duration"
                  value={aiPlanFormData?.Duration}
                  onChange={handleAiPlanInputChange}
                  className="font-montserrat mt-2 ps-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-inherit w-full h-[50px] rounded-md focus:outline-none pr-2"
                >
                  <option value={24 * 1} className="font-montserrat rounded">
                    For a day
                  </option>
                  <option value={3 * 24} className="font-montserrat rounded">
                    For 3 days
                  </option>
                  <option value={7 * 24} className="font-montserrat rounded">
                    For 1 week
                  </option>
                  <option value={14 * 24} className="font-montserrat rounded">
                    For 2 weeks
                  </option>
                  <option value={21 * 24} className="font-montserrat rounded">
                    For 3 weeks
                  </option>
                  <option value={30 * 24} className="font-montserrat rounded">
                    For 1 month
                  </option>
                  <option value={90 * 24} className="font-montserrat rounded">
                    For 3 months
                  </option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="cursor-pointer bg-primary w-48 p-2 rounded-full mt-4"
            >
              {isLoading ? (
                <p className="font-montserrat font-medium">
                  Creating..
                </p>
              ) : (
                <p className="font-montserrat font-medium">
                  Create new ai plan
                </p>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAiPlan;
