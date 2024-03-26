import { useContext } from "react";
import { FaBitcoin } from "react-icons/fa";
import { LineChart, Line } from "recharts";
import { AuthContext } from "../../../../Providers/AuthProvider";
const CryptoTable = () => {
  const {globalData} = useContext(AuthContext);
   const data = [
     {
       name: "Page A",
       uv: Math.floor(1000 + Math.random() * 9000),
       pv: Math.floor(1000 + Math.random() * 9000),
       amt: 2400,
     },
     {
       name: "Page B",
       uv: Math.floor(1000 + Math.random() * 9000),
       pv: Math.floor(1000 + Math.random() * 9000),
       amt: 2210,
     },
     {
       name: "Page C",
       uv: Math.floor(1000 + Math.random() * 9000),
       pv: Math.floor(1000 + Math.random() * 9000),
       amt: 2290,
     },
     {
       name: "Page D",
       uv: Math.floor(1000 + Math.random() * 9000),
       pv: Math.floor(1000 + Math.random() * 9000),
       amt: 2000,
     },
     {
       name: "Page E",
       uv: Math.floor(1000 + Math.random() * 9000),
       pv: Math.floor(1000 + Math.random() * 9000),
       amt: 2181,
     },
     {
       name: "Page F",
       uv: Math.floor(1000 + Math.random() * 9000),
       pv: Math.floor(1000 + Math.random() * 9000),
       amt: 2500,
     },
     {
       name: "Page G",
       uv: Math.floor(1000 + Math.random() * 9000),
       pv: Math.floor(1000 + Math.random() * 9000),
       amt: 2100,
     },
   ];

   const data2 = [
     {
       name: "Page A",
       uv: Math.floor(1000 + Math.random() * 9000),
       pv: Math.floor(1000 + Math.random() * 9000),
       amt: 2400,
     },
     {
       name: "Page B",
       uv: Math.floor(1000 + Math.random() * 9000),
       pv: Math.floor(1000 + Math.random() * 9000),
       amt: 2210,
     },
     {
       name: "Page C",
       uv: Math.floor(1000 + Math.random() * 9000),
       pv: Math.floor(1000 + Math.random() * 9000),
       amt: 2290,
     },
     {
       name: "Page D",
       uv: Math.floor(1000 + Math.random() * 9000),
       pv: Math.floor(1000 + Math.random() * 9000),
       amt: 2000,
     },
     {
       name: "Page E",
       uv: Math.floor(1000 + Math.random() * 9000),
       pv: Math.floor(1000 + Math.random() * 9000),
       amt: 2181,
     },
     {
       name: "Page F",
       uv: Math.floor(1000 + Math.random() * 9000),
       pv: Math.floor(1000 + Math.random() * 9000),
       amt: 2500,
     },
     {
       name: "Page G",
       uv: Math.floor(1000 + Math.random() * 9000),
       pv: Math.floor(1000 + Math.random() * 9000),
       amt: 2100,
     },
   ];

   const data3 = [
     {
       name: "Page A",
       uv: Math.floor(1000 + Math.random() * 9000),
       pv: Math.floor(1000 + Math.random() * 9000),
       amt: 2400,
     },
     {
       name: "Page B",
       uv: Math.floor(1000 + Math.random() * 9000),
       pv: Math.floor(1000 + Math.random() * 9000),
       amt: 2210,
     },
     {
       name: "Page C",
       uv: Math.floor(1000 + Math.random() * 9000),
       pv: Math.floor(1000 + Math.random() * 9000),
       amt: 2290,
     },
     {
       name: "Page D",
       uv: Math.floor(1000 + Math.random() * 9000),
       pv: Math.floor(1000 + Math.random() * 9000),
       amt: 2000,
     },
     {
       name: "Page E",
       uv: Math.floor(1000 + Math.random() * 9000),
       pv: Math.floor(1000 + Math.random() * 9000),
       amt: 2181,
     },
     {
       name: "Page F",
       uv: Math.floor(1000 + Math.random() * 9000),
       pv: Math.floor(1000 + Math.random() * 9000),
       amt: 2500,
     },
     {
       name: "Page G",
       uv: Math.floor(1000 + Math.random() * 9000),
       pv: Math.floor(1000 + Math.random() * 9000),
       amt: 2100,
     },
   ];

   return (
     <div className="mt-3 mb-[70px]">
       <div className="w-full overflow-x-auto rounded-xl">
         <table className="min-w-full divide-y divide-gray-500">
           <thead className="rounded">
             <tr>
               <th className="bg-[#283b4f] px-6 py-3 text-left text-xs leading-4 font-bold text-gray-400 uppercase tracking-wider font-montserrat">
                 Name
               </th>
               <th className="bg-[#283b4f] px-6 py-3 text-left text-xs leading-4 font-bold text-gray-400 uppercase tracking-wider font-montserrat">
                 Price
               </th>
               <th className="bg-[#283b4f] min-w-[140px] px-6 py-3 text-left text-xs leading-4 font-bold text-gray-400 uppercase tracking-wider font-montserrat">
                 Market Cap
               </th>
               <th className="bg-[#283b4f] px-6 py-3 text-left text-xs leading-4 font-bold text-gray-400 uppercase tracking-wider font-montserrat">
                 Change %
               </th>
               <th className="bg-[#283b4f] px-6 py-3 text-left text-xs leading-4 font-bold text-gray-400 uppercase tracking-wider font-montserrat">
                 Last (24H)
               </th>
               <th className="bg-[#283b4f] px-6 py-3 text-left text-xs leading-4 font-bold text-gray-400 uppercase tracking-wider font-montserrat">
                 Action
               </th>
             </tr>
           </thead>
           <tbody className="divide-y divide-gray-500">
             <tr>
               <td className="px-6 py-4 bg-slate-900 whitespace-no-wrap">
                 <div className="flex">
                   <FaBitcoin size="45" />
                   <div className="ms-3">
                     <p className="text-base font-bold">USDT</p>
                     <p className="font-light text-slate-400">BTC</p>
                   </div>
                 </div>
               </td>
               <td className="bg-slate-900 px-6 py-4 whitespace-no-wrap">
                 <p className="text-base font-normal">${globalData?.marketPrice}</p>
               </td>
               <td className="bg-slate-900 px-6 py-4 whitespace-no-wrap">
                 <p className="text-base font-normal">${globalData?.marketCapital}</p>
               </td>
               <td className="bg-slate-900 px-6 py-4 whitespace-no-wrap">
                 <p className="text-[#54b947] text-center text-base rounded-full bg-green-500 bg-opacity-20 w-24 font-bold">
                 {globalData?.change} %
                 </p>
               </td>
               <td className="bg-slate-900 px-6 py-4 whitespace-no-wrap">
                 <div className="z-0">
                   <LineChart
                     className="z-0"
                     width={150}
                     height={50}
                     data={data}
                   >
                     <Line
                       type="monotone"
                       dataKey="pv"
                       stroke="#e32e48"
                       strokeWidth={2}
                     />
                   </LineChart>
                 </div>
               </td>
               <td className="bg-slate-900 px-6 py-4 whitespace-no-wrap">
                 <div className="text-base font-normal">
                   <button className="rounded bg-primary font-medium px-3 py-2 opacity-100">
                     Trade{" "}
                   </button>
                 </div>
               </td>
             </tr>
             <tr>
               <td className="px-6 py-4 bg-slate-900 whitespace-no-wrap">
                 <div className="flex">
                   <FaBitcoin size="45" />
                   <div className="ms-3">
                     <p className="text-base font-bold">Bitcoin</p>
                     <p className="font-light text-slate-400">BTC</p>
                   </div>
                 </div>
               </td>
               <td className="bg-slate-900 px-6 py-4 whitespace-no-wrap">
                 <p className="text-base font-normal">${globalData?.marketPrice}</p>
               </td>
               <td className="bg-slate-900 px-6 py-4 whitespace-no-wrap">
                 <p className="text-base font-normal">${globalData?.marketCapital}</p>
               </td>
               <td className="bg-slate-900 px-6 py-4 whitespace-no-wrap">
                 <p className="text-[#54b947] text-center text-base rounded-full bg-green-500 bg-opacity-20 w-24 font-bold">
                 {globalData?.change} %
                 </p>
               </td>
               <td className="bg-slate-900 px-6 py-4 whitespace-no-wrap">
                 <LineChart
                   className="z-0"
                   width={150}
                   height={50}
                   data={data2}
                 >
                   <Line
                     type="monotone"
                     dataKey="pv"
                     stroke="#e32e48"
                     strokeWidth={2}
                   />
                 </LineChart>
               </td>
               <td className="bg-slate-900 px-6 py-4 whitespace-no-wrap">
                 <div className="text-base font-normal">
                   <button className="rounded bg-primary font-medium px-3 py-2 opacity-100">
                     Trade{" "}
                   </button>
                 </div>
               </td>
             </tr>
             <tr>
               <td className="px-6 py-4 bg-slate-900 whitespace-no-wrap">
                 <div className="flex">
                   <FaBitcoin size="45" />
                   <div className="ms-3">
                     <p className="text-base font-bold">USDT</p>
                     <p className="font-light text-slate-400">BTC</p>
                   </div>
                 </div>
               </td>
               <td className="bg-slate-900 px-6 py-4 whitespace-no-wrap">
                 <p className="text-base font-normal">${globalData?.marketPrice}</p>
               </td>
               <td className="bg-slate-900 px-6 py-4 whitespace-no-wrap">
                 <p className="text-base font-normal">${globalData?.marketCapital}</p>
               </td>
               <td className="bg-slate-900 px-6 py-4 whitespace-no-wrap">
                 <p className="text-[#54b947] text-center text-base rounded-full bg-green-500 bg-opacity-20 w-24 font-bold">
                 {globalData?.change} %
                 </p>
               </td>
               <td className="bg-slate-900 px-6 py-4 whitespace-no-wrap">
                 <LineChart
                   className="z-0"
                   width={150}
                   height={50}
                   data={data3}
                 >
                   <Line
                     type="monotone"
                     dataKey="pv"
                     stroke="#e32e48"
                     strokeWidth={2}
                   />
                 </LineChart>
               </td>
               <td className="bg-slate-900 px-6 py-4 whitespace-no-wrap">
                 <div className="text-base font-normal">
                   <button className="rounded bg-primary font-medium px-3 py-2  opacity-100">
                     Trade{" "}
                   </button>
                 </div>
               </td>
             </tr>
           </tbody>
         </table>
       </div>
     </div>
   );
};

export default CryptoTable;
