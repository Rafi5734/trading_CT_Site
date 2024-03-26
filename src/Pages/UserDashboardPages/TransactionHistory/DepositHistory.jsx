
import { AiOutlineSearch } from "react-icons/ai";
import { useGetSingleUserDepositListQuery } from "../../../API/Users/userDeposit/UserDepositSlice";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const DepositHistory = () => {
  const { user } = useContext(AuthContext);
  const { data: singleUseDepositList, isLoading } =
    useGetSingleUserDepositListQuery(user?._id, {
      pollingInterval: 2000,
    });
  // // pagination state
  // const [data, setData] = useState(tableData);

  // // Search State
  // const [searchState, setSearchState] = useState("");
  // useEffect(() => {
  //   const filter = () => {
  //     if (searchState !== "") {
  //       const filteredArray = tableData.filter((dat) => {
  //         // Adjust the property names based on the userId prop
  //         return dat["date"]
  //           ?.toLowerCase()
  //           .includes(searchState.toLowerCase());
  //       });
  //       setData(filteredArray);
  //     } else {
  //       setData(tableData);
  //     }
  //   };

  //   filter();
  // }, [searchState, tableData]);
  return (
    <div className="main-container mt-8 !pt-0 !md:pt-[70px] !min-h-fit ">
      <div className="w-full rounded font-montserrat">
        <div className="flex flex-col justify-center items-center md:flex-row sm:justify-between">
          <p className="titleStyle mt-[30px] !text-[24px]">
            Deposit <span>History</span>
          </p>
          <div className="md:mt-[30px] w-full md:w-auto">
            <div className="flex w-full flex-col items-center justify-center gap-4 md:w-[unset] md:flex-row">
              <div className="flex h-[38px] w-full items-center">
                <input
                  type="text"
                  className="relative bg-secondBackground w-full rounded-l-lg border border-slate-500 px-4 py-2 pl-8 text-white focus:outline-none md:pl-4 font-montserrat"
                  placeholder="Search user id here..."
                  // defaultValue={searchState}
                  // onChange={(e) => setSearchState(e.target.value)}
                />
                <button className="rounded-r-lg border border-slate-500 bg-primary px-3 py-[12px] text-base font-semibold text-white">
                  <AiOutlineSearch />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[90vw] md:max-w-[100vw] mx-auto overflow-x-scroll">
          <table className="min-w-full divide-y divide-gray-500 mt-5 rounded">
            <thead>
              <tr>
                <th className="bg-[#283b4f] px-6 py-3 text-left text-xs leading-4 font-semibold text-gray-400 uppercase tracking-wider font-montserrat">
                  Date
                </th>
                <th className="bg-[#283b4f] px-6 py-3 text-left text-xs leading-4 font-semibold text-gray-400 uppercase tracking-wider font-montserrat">
                  Transaction Id
                </th>

                <th className="bg-[#283b4f] px-6 py-3 text-left text-xs leading-4 font-semibold text-gray-400 uppercase tracking-wider font-montserrat">
                  Amount
                </th>
                <th className="bg-[#283b4f] px-6 py-3 text-left text-xs leading-4 font-semibold text-gray-400 uppercase tracking-wider font-montserrat">
                  Gmail
                </th>
                <th className="bg-[#283b4f] px-6 py-3 text-left text-xs leading-4 font-semibold text-gray-400 uppercase tracking-wider font-montserrat">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-500">
              {singleUseDepositList?.data?.map((data, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 bg-slate-900 whitespace-no-wrap">
                    <div className="flex">
                      <div className="">
                        <p className="text-sm font-normal tracking-widest">
                          {data?.createdAt.split("T")[0]}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="bg-slate-900 px-6 py-4 whitespace-no-wrap">
                    <p className="text-sm tracking-widest">
                      {data?.transactionId}
                    </p>
                  </td>

                  <td className="bg-slate-900 px-6 py-4 whitespace-no-wrap">
                    <p className="text-sm tracking-widest">
                      $<span>{data?.amount}</span>
                    </p>
                  </td>
                  <td className="bg-slate-900 px-6 py-4 whitespace-no-wrap">
                    <p className="text-sm tracking-widest">{data?.userEmail}</p>
                  </td>
                  {data?.status === "pending" ? (
                    <>
                      <td className="bg-slate-900 px-6 py-4 whitespace-no-wrap">
                        <p className="text-[#f44e4e] text-center text-sm rounded-full bg-red-500 bg-opacity-20 w-full font-semibold">
                          {data?.status}
                        </p>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="bg-slate-900 px-6 py-4 whitespace-no-wrap">
                        <p className="text-[#54b947] capitalize text-center text-sm rounded-full bg-green-500 bg-opacity-20 w-full font-semibold">
                          {data?.status}
                        </p>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DepositHistory;
