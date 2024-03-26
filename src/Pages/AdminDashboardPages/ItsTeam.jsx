import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import TeamList from "./TeamList";

const ItsTeam = () => {
  const { adminToken, userEmail } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleSetNewRole = (e) => {
    setIsLoading(true);
    e.preventDefault();
    const form = e.target;
    const newEmail = form?.newEmail?.value;
    const newPassword = form?.newPassword?.value;
    const selectedRole = form?.selectedRole?.value;

    const postData = {
      email: userEmail,
      new_admin_password: newPassword,
      new_admin_email: newEmail,
      new_admin_role: selectedRole,
    };
    const headers= {
      "Content-Type": "application/json",
      authorization: `Bearer ${adminToken}`,
    }

    const apiUrl = `https://stock-back.vercel.app/api/v1/admin`;

    console.log(postData);
    axios.post(apiUrl, postData, {headers})
    .then(res => {
      console.log(res);
      setIsLoading(false);
    })
    .catch(err =>{
      console.log(err);
      setIsLoading(false);
    })
    setIsLoading(false);
  };
  return (
    <div>
      <h1 className="text-center titleStyle">
        CT - <span>Team</span>
      </h1>

      <div className="bg-[#153045] ps-5 pe-5 rounded-xl">
        <form
          className="w-full lg:w-[100%] mx-auto mt-8 pb-5 ps-0 pe-0 pt-5"
          onSubmit={handleSetNewRole}
        >
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="flex flex-col w-full justify-start pb-2">
              <label className="poppins">Set Email</label>
              <input
                type="email"
                placeholder="Ex: abcd@gmail.com"
                name="newEmail"
                className="poppins  mt-2 ps-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-inherit w-full h-[50px] rounded focus:outline-none pr-2 font-montserrat"
              />
            </div>
            <div className="flex flex-col w-full justify-start pb-2">
              <label className="poppins">Set Password</label>
              <input
                type="password"
                placeholder="Ex: Abcd@123"
                name="newPassword"
                className="poppins  mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ps-3 text-inherit w-full h-[50px] rounded focus:outline-none pr-2"
              />
            </div>
            <div className="flex flex-col w-full justify-start pb-2">
              <label className="poppins">Set Role</label>
              <select
                name="selectedRole"
                className="poppins mt-2 rounded  bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none p-3.5"
              >
                <option value="admin">Admin</option>
                <option value="moderator">Moderator</option>
              </select>
            </div>
            <div className="flex flex-col w-full justify-start pb-2">
              <label className="poppins">Your Email</label>
              <input
                type="email"
                placeholder="Ex: abcd@gmail.com"
                name="adminEmail"
                value={userEmail}
                disabled
                className="poppins  mt-2 ps-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-inherit w-full h-[50px] rounded focus:outline-none pr-2 font-montserrat"
              />
            </div>
          </div>

          <button
            type="submit"
            className="cursor-pointer bg-primary w-48 p-3 rounded-full mt-8 mb-3"
          >
            <p className="poppins font-medium">
              {
                isLoading ? 'Change Role...' : 'Change Role'
              }
            </p>
          </button>
        </form>
      </div>

      <div>
        <TeamList />
      </div>
    </div>
  );
};

export default ItsTeam;
