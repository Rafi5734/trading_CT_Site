import { useQuery } from "@tanstack/react-query";
import { AiOutlineSearch } from "react-icons/ai";
// import { useTradeHistoryPostMutation } from "../../../API/Users/Trade/tradeSlice";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useEffect } from "react";
import TablePagination from "../../../SharedComponent/SmallComponent/TablePagination";
import { Link } from "react-router-dom";

const TradeHistory = () => {
  const [tradeHistoryData, setTradeHistoryData] = useState();
  const [tableData, setTableData] = useState();
  // const [tradeHistoryPost, { data: tradeHistoryData }] =
  //   useTradeHistoryPostMutation();

  const { adminToken, adminEmail, globalData } = useContext(AuthContext);

  // console.log("Trade email", adminEmail);

  const {
    data: admin = [],
    isLoading: adminLoading,
    refetch,
  } = useQuery(["trade/find/single"], async () => {
    const res = await fetch(
      "https://stock-back.vercel.app/api/v1/trade/find/single",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${adminToken}`,
        },
        body: JSON.stringify({ email: adminEmail }),
      }
    );
    const result = await res.json();

    setTableData(result?.data);
    return result;
  });

  // pagination state
  const [data, setData] = useState(tableData);
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);

  // Search State
  const [searchState, setSearchState] = useState("");

  useEffect(() => {
    setData(tableData);
    setcurrentPage(1);
  }, [tableData]);

  // const handleStatus = (id, status) => {
  //   updateSingleDeposit({ id, status: status });
  // };

  useEffect(() => {
    const filter = () => {
      if (searchState !== "") {
        const filteredArray = tableData.filter((dat) => {
          // Adjust the property names based on the userId prop
          return dat["createdAt"]
            ?.toLowerCase()
            .includes(searchState.toLowerCase());
        });
        setData(filteredArray);
      } else {
        setData(tableData);
      }
    };

    filter();
  }, [searchState, tableData]);

  // console.log("Trade History docs:", tradeHistoryData?.data);
  return (
    <div
      className={`main-container mt-8 !pt-0 !md:pt-[70px] !m-0 xl:!mt-[30px] ${
        currentItems?.length < 0 && "xl:mt-[0px]"
      }`}
    >
      <div className="w-full rounded -mt-[65px] md:-mt-[5px] font-montserrat">
        <div className={`flex flex-col justify-center items-center md:flex-row sm:justify-between ${currentItems?.length < 0 && 'opacity-0'}`}>
          <p className="titleStyle mt-[30px] !text-[24px]">
            Trade <span>History</span>
          </p>
          <div className="md:mt-[30px] w-full md:w-auto">
            <div className="flex w-full flex-col items-center justify-center gap-4 md:w-[unset] md:flex-row">
              <div className="flex h-[38px] w-full items-center">
                <input
                  type="text"
                  className="relative bg-secondBackground w-full rounded-l-lg border border-slate-500 px-4 py-2 pl-8 text-white focus:outline-none md:pl-4 font-montserrat"
                  placeholder="Search date here..."
                  defaultValue={searchState}
                  onChange={(e) => setSearchState(e.target.value)}
                />
                <button className="rounded-r-lg border border-slate-500 bg-primary px-3 py-[12px] text-base font-semibold text-white">
                  <AiOutlineSearch />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[90vw] md:max-w-[100vw] overflow-x-scroll">
          <div>
            <table className="divide-y w-full divide-gray-500 mt-5 rounded">
              <thead>
                <tr>
                  <th className="bg-[#283b4f] max-w-[50px] px-6 py-3 text-left text-xs leading-4 font-semibold text-gray-400 uppercase tracking-wider font-montserrat">
                    Date
                  </th>

                  <th className="bg-[#283b4f] min-w-[150px] px-6 py-3 text-left text-xs leading-4 font-semibold text-gray-400 uppercase tracking-wider font-montserrat">
                    Trade Name
                  </th>

                  <th className="bg-[#283b4f] px-6 py-3 text-left text-xs leading-4 font-semibold text-gray-400 uppercase tracking-wider font-montserrat">
                    Amount
                  </th>
                  <th className="bg-[#283b4f] min-w-[120px] px-6 py-3 text-left text-xs leading-4 font-semibold text-gray-400 uppercase tracking-wider font-montserrat">
                    Return %
                  </th>
                  <th className="bg-[#283b4f] px-6 py-3 text-left text-xs leading-4 font-semibold text-gray-400 uppercase tracking-wider font-montserrat">
                    Duration
                  </th>
                  <th className="bg-[#283b4f] px-6 py-3 text-left text-xs leading-4 font-semibold text-gray-400 uppercase tracking-wider font-montserrat">
                    Status
                  </th>
                  <th className="bg-[#283b4f] px-6 py-3 text-left text-xs leading-4 font-semibold text-gray-400 uppercase tracking-wider font-montserrat">
                    Activity
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-500">
                {currentItems ? (
                  <>
                    {currentItems?.map((trade, i) => {
                      // console.log("tbody", tbody);
                      return (
                        <tr key={i}>
                          <td className="px-6 py-4 bg-slate-900 whitespace-no-wrap">
                            <div className="flex">
                              <div className="">
                                <p className="text-sm font-normal tracking-wide">
                                  {trade?.createdAt.split("T")[0]}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="bg-slate-900 px-6 py-4 whitespace-no-wrap">
                            <p className="text-sm font-normal tracking-wide">
                              {trade?.tradeType}
                            </p>
                          </td>
                          <td className="bg-slate-900 px-6 py-4 whitespace-no-wrap">
                            <p className="text-sm font-normal tracking-widest">
                              ${trade?.amount}
                            </p>
                          </td>

                          <td className="bg-slate-900 px-6 py-4 whitespace-no-wrap">
                            <p className="text-[#54b947] text-center text-sm rounded-full bg-green-500 bg-opacity-20 w-full font-semibold">
                              {trade?.returnRate || globalData?.tradeReturn} %
                            </p>
                          </td>
                          <td className="bg-slate-900 px-6 py-4 whitespace-no-wrap">
                            <p className="text-sm font-normal tracking-wide">
                              {trade?.duration}H
                            </p>
                          </td>
                          {trade?.status === "pending" ? (
                            <td className="bg-slate-900 px-6 py-4 whitespace-no-wrap">
                              <p className="flex justify-center items-center bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                                Pending
                              </p>
                            </td>
                          ) : (
                            <td className="bg-slate-900 px-6 py-4 whitespace-no-wrap">
                              <p className="bg-green-100 text-green-800 text-xs text-center font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                                Approved
                              </p>
                            </td>
                          )}

                          <td className="bg-slate-900 px-6 py-4 whitespace-no-wrap">
                            <Link to="/user/trade" className="bg-primary py-[6px] px-2 rounded-md">
                            Trade
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="absolute left-[25%] md:left-[60%] flex items-center gap-2 transform translate-x-[-25%] md:translate-x-[-50%] top-[300px] z-[999999]">
                      Data Loading{" "}
                      <span className="loading loading-spinner !w-[16px]"></span>
                    </p>
                  </div>
                )}
              </tbody>
            </table>
          </div>
          <TablePagination
            data={data}
            currentPage={currentPage}
            setcurrentPage={setcurrentPage}
            itemsPerPage={itemsPerPage}
          />
        </div>
      </div>
    </div>
  );
};

export default TradeHistory;
