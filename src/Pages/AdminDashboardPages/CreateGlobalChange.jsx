import { useContext } from "react";
import GlobalChangeList from "./GlobalChangeList";
import { AuthContext } from "../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";

const CreateGlobalChange = () => {
  const {globalData, adminToken, adminEmail} = useContext(AuthContext);
  const [globalLoading, setGlobalLoading] = useState(false);

  const handleUpdateGlobalData = (e) =>{
    setGlobalLoading(true);
    e.preventDefault();

    const form = e.target;
    const marketPrice = form?.marketPrice?.value;
    const marketCapital = form?.marketCapital?.value;
    const change = form?.change?.value;
    const tradeReturn = form?.tradeReturn?.value;
    const adminWalletAddress = form?.adminWalletAddress?.value;
    const notification = form?.notification?.value;

    const headers = {
      "Content-Type": "application/json",
      authorization: `Bearer ${adminToken}`,
    }
    const updateData = {
      marketPrice,
      marketCapital,
      change,
      tradeReturn,
      adminWalletAddress,
      notification,
    }

    const apiUrl = `https://stock-back.vercel.app/api/v1/global-change/65260ebea904b8b026f6f287`

    axios.put(apiUrl, updateData, {headers})
    .then(res => {
      if(res.status === 200){
        toast.success('Data updated successfully')
        setGlobalLoading(false);
      }else{
        toast.error("Something wen't wrong")
        setGlobalLoading(false);
      }
    })
    .catch(err =>{
      console.log(err);
      setGlobalLoading(false);
    })

    setGlobalLoading(false);

  }
  return (
    <div>
      <h1 className="text-center titleStyle">
        Global <span>Changes</span>
      </h1>
      <div className="bg-[#153045] ps-5 pe-5 rounded-xl">
        <form className="w-full lg:w-[100%] mx-auto mt-8 pb-5 ps-0 pe-0 pt-5" onSubmit={handleUpdateGlobalData}>
          <div className="lg:grid lg:grid-cols-2 sm:grid sm:grid-cols-1 xs:grid xs:grid-cols-1 gap-4 w-full">
            <div className="flex flex-col w-full justify-start pb-2">
              <label className="poppins">Market Price</label>
              <input
                type="text"
                placeholder="Ex: 25000"
                name="marketPrice"
                defaultValue={globalData?.marketPrice}
                className="poppins border border-slate-500 mt-2 ps-3 bg-gray-50 border border-gray-300 text-gray-900 text-[15px] font-montserrat rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-inherit w-full h-[50px] rounded focus:outline-none pr-2"
              />
            </div>
            <div className="flex flex-col w-full justify-start pb-2">
              <label className="poppins">Market Capital</label>
              <input
                type="text"
                placeholder="Ex: 25000"
                name="priceCapital"
                defaultValue={globalData?.marketCapital}
                className="poppins border border-slate-500	 mt-2 ps-3 bg-gray-50 border border-gray-300 text-gray-900 text-[15px] font-montserrat rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-inherit w-full h-[50px] rounded focus:outline-none pr-2"
              />
            </div>
            <div className="flex flex-col w-full justify-start pb-2">
              <label className="poppins">Change</label>
              <input
                type="text"
                placeholder="Ex: -1.85%, 2.85%"
                name="change"
                className="poppins border border-slate-500 mt-2 ps-3 bg-gray-50 border border-gray-300 text-gray-900 text-[15px] font-montserrat rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-inherit w-full h-[50px] rounded focus:outline-none pr-2"
                
                defaultValue={globalData?.change}
              />
            </div>
            <div className="flex flex-col w-full justify-start pb-2">
              <label className="poppins">Trade Return</label>
              <input
                type="text"
                placeholder="Ex: 2.85%"
                name="tradeReturn"
                className="poppins border border-slate-500 mt-2 ps-3 bg-gray-50 border border-gray-300 text-gray-900 text-[15px] font-montserrat rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-inherit w-full h-[50px] rounded focus:outline-none pr-2"
                
                defaultValue={globalData?.tradeReturn}
              />
            </div>
            <div className="flex flex-col w-full justify-start pb-2">
              <label className="poppins">Admin Wallet Address</label>
              <input
                type="text"
                placeholder="Admin Wallet Address"
                name="adminWalletAddress"
                className="poppins border border-slate-500 mt-2 ps-3 bg-gray-50 border border-gray-300 text-gray-900 text-[15px] font-montserrat rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-inherit w-full h-[50px] rounded focus:outline-none pr-2"
                
                defaultValue={globalData?.adminWalletAddress}
              />
            </div>
            <div className="flex flex-col w-full justify-start pb-2">
              <label className="poppins">Send Notification</label>
              <input
                type="text"
                placeholder="Notification"
                name="notification"
                className="poppins border border-slate-500 mt-2 ps-3 bg-gray-50 border border-gray-300 text-gray-900 text-[15px] font-montserrat rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-inherit w-full h-[50px] rounded focus:outline-none pr-2"
                
                defaultValue={globalData?.notification}
              />
            </div>
          </div>

          <button
            type="submit"
            className="cursor-pointer bg-primary w-48 p-3 rounded-full mt-8 mb-3"
          >
            <p className="poppins font-medium">{globalLoading ? 'Updating...' : 'Global Change'}</p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateGlobalChange;
