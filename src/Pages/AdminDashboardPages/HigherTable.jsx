import { Menu } from "@headlessui/react";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import TablePagination from "../../SharedComponent/SmallComponent/TablePagination";
import BigModal from "../../SharedComponent/Modal/BigModal";
import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import RecentTradeContent from "../../Components/AdminDashboard/Content/RecentTradeContent";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";

const HigherTable = () => {
  const [botData, setBotData] = useState();
  const tableData = botData;
  const [modalTitle, setModalTitle] = useState("");
  const [modalOpen, setModalOpen] = useState("");
  const [modalContent, setModalContent] = useState("");

  const { adminToken, userEmail } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  // pagination state
  const [data, setData] = useState(tableData);
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems =
    data?.length > 0 ? data?.slice(indexOfFirstItem, indexOfLastItem) : [];

  // Search State
  const [searchState, setSearchState] = useState("");

  const postHigherData = {
    email: userEmail,
  };
  const headers = {
    "Content-Type": "application/json",
    authorization: `Bearer ${adminToken}`,
  };

  const apiUrl = `https://stock-back.vercel.app/api/v1/trade/find?tradeType=higher&result=pending`;

  const handleHigherTrade = () => {
    axios
      .post(apiUrl, postHigherData, { headers })
      .then((res) => {
        console.log(res?.data?.data);
        setBotData(res?.data?.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
    setIsLoading(false);
  };

  useEffect(() => {
    handleHigherTrade();
  }, []);

  useEffect(() => {
    setData(tableData);
    setcurrentPage(1);
  }, [tableData]);

  const handleAction = (tbody) => {
    setModalTitle("Edit Status");
    setModalContent(
      <RecentTradeContent data={tbody} setModalOpen={setModalOpen} />
    );
    setModalOpen(true);
  };

  useEffect(() => {
    const filter = () => {
      if (searchState !== "") {
        const filteredArray = tableData.filter((dat) => {
          // Adjust the property names based on the userId prop
          return dat["email"]
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
  return (
    <div>
      <div className="flex w-full flex-col items-center justify-center gap-4 md:w-[unset] md:flex-row">
        <div className="flex h-[38px] w-full items-center">
          <input
            type="text"
            className="relative bg-secondBackground w-full rounded-l-lg border border-slate-500 px-4 py-2 pl-8 text-white focus:outline-none md:pl-4 font-montserrat"
            placeholder="Search user email here..."
            defaultValue={searchState}
            onChange={(e) => setSearchState(e.target.value)}
            required={true}
          />
          <button className="rounded-r-lg border border-slate-500 bg-primary px-3 py-[12px] text-base font-semibold text-white">
            <AiOutlineSearch />
          </button>
        </div>
      </div>
      <div className="bg-[#289dcf2d] px-3 rounded-xl pb-3 max-w-[90vw] md:max-w-[100vw] mx-auto overflow-x-scroll">
        <table className="min-w-full divide-y divide-gray-500 mt-5 rounded">
          <thead>
            <tr>
              <th className="bg-[#283b4f] w-[180px] px-3 py-2 text-left text-xs leading-4 font-semibold text-gray-400 uppercase tracking-wider font-montserrat">
                SL NO
              </th>
              <th className="bg-[#283b4f] w-[180px] px-3 py-2 text-left text-xs leading-4 font-semibold text-gray-400 uppercase tracking-wider font-montserrat">
                User Email
              </th>

              <th className="bg-[#283b4f] w-[250px] px-3 py-2 text-left text-xs leading-4 font-semibold text-gray-400 uppercase tracking-wider font-montserrat">
                Higher Trade Amount
              </th>

              <th className="bg-[#283b4f] w-[70px] px-3 py-2 text-left text-xs leading-4 font-semibold text-gray-400 uppercase tracking-wider font-montserrat">
                Return
              </th>

              <th className="bg-[#283b4f] w-[150px] px-3 py-2 text-left text-xs leading-4 font-semibold text-gray-400 uppercase tracking-wider font-montserrat">
                Status
              </th>

              <th className="bg-[#283b4f] w-[150px] px-3 py-2 text-left text-xs leading-4 font-semibold text-gray-400 uppercase tracking-wider font-montserrat">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-500">
            {currentItems?.length > 0 ? (
              <>
                {currentItems?.map((tbody, i) => {
                  // console.log("tbody", tbody);
                  return (
                    <tr
                      key={i}
                      className="h-24 text-sm leading-none text-[#edecec]"
                    >
                      <td className="px-2">
                        <div className="text-left font-montserrat text-base font-normal">
                          <span className=" text-sm font-medium">
                            {i === 9 ? "10" : "0" + (i + 1)}
                          </span>
                        </div>
                      </td>
                      <td className="px-2">
                        <div className="text-left font-montserrat text-base font-normal">
                          <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                            {tbody?.email}
                          </span>
                        </div>
                      </td>
                      <td className="px-2">
                        <div className="text-left font-montserrat tracking-wide text-base font-normal">
                          <p>
                            <span className="text-red-500 font-semibold">
                              $
                            </span>{" "}
                            {tbody?.amount}
                          </p>
                        </div>
                      </td>
                      <td className="px-2">
                        <div className="text-left font-montserrat text-base font-normal">
                          <p>{tbody?.returnRate}</p>
                        </div>
                      </td>
                      <td className="px-2">
                        <div className="text-left capitalize font-montserrat text-sm font-medium">
                          <p
                            className={`${
                              tbody?.status === "pending"
                                ? "text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                                : "text-green-800 dark:bg-green-900 dark:text-green-300"
                            } rounded-full px-2 text-center py-0.5`}
                          >
                            {tbody?.result}
                          </p>
                        </div>
                      </td>

                      <td className="relative pl-5">
                        <Menu>
                          <Menu.Button>
                            <span className="text-left font-montserrat text-base font-normal">
                              <BsThreeDots />
                            </span>
                          </Menu.Button>
                          <Menu.Items className="absolute left-[-136px] z-[10] flex min-w-[170px] flex-col bg-primary rounded-xl border border-slate-500">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  onClick={() => handleAction(tbody)}
                                  className={`mx-auto block w-full rounded-md p-[10px] text-center font-inter text-[16px] font-normal hover:bg-[#6c8c99] ${
                                    active ? "bg-[#6c8c99]" : ""
                                  }`}
                                >
                                  Edit Status
                                </Link>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Menu>
                      </td>
                    </tr>
                  );
                })}
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <p className="absolute left-[25%] md:left-1/2 transform translate-x-[-25%] md:translate-x-[-50%] bottom-[200px] z-[999999]">
                  No data found
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
      <BigModal
        title={modalTitle}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        modalContent={modalContent}
      />
    </div>
  );
};

export default HigherTable;
