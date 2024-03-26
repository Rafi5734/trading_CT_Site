import { useEffect } from "react";
import { useState } from "react";
import TablePagination from "../../SharedComponent/SmallComponent/TablePagination";
import { BsThreeDots } from "react-icons/bs";
import BigModal from "../../SharedComponent/Modal/BigModal";
import WithdrawContent from "./Content/WithdrawContent";
import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";
import SmallModal from "../../SharedComponent/Modal/SmallModal";
import WithdrawDelete from "../../SharedComponent/Modal/ModalContent/WithdrawDelete";
import { AiOutlineSearch } from "react-icons/ai";
const WithdrawListTable = ({ pageTitle, changeFont, tableHead, tableData }) => {
  const [modalTitle, setModalTitle] = useState("");
  const [modalOpen, setModalOpen] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [smallModalOpen, setSmallModalOpen] = useState("");
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

  const handleAction = (tbody) => {
    setModalTitle("Edit Status");
    setModalContent(
      <WithdrawContent 
      id={tbody?._id}
      data={tbody}
      setModalOpen={setModalOpen} />
    );
    setModalOpen(true);
  };

  const handleDelete = (id, name) => {
    setModalTitle("Delete Message");
    setSmallModalOpen(true);
    setModalContent(
      <WithdrawDelete setModalOpen={setSmallModalOpen} id={id} name={name} />
    );
  };

  useEffect(() => {
    const filter = () => {
      if (searchState !== "") {
        const filteredArray = tableData.filter((dat) => {
          // Adjust the property names based on the userId prop
          return dat["userId"]
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
      <div className="flex flex-col items-center justify-between gap-4 py-4 md:flex-row">
        <div>
          <h3 className="text-center font-montserrat text-[18px] font-semibold text-white lg:text-2xl">
            {pageTitle}
          </h3>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-4 md:w-[unset] md:flex-row">
          <div className="flex h-[38px] w-full items-center">
            <input
              type="text"
              className="relative bg-secondBackground w-full rounded-l-lg border border-slate-500 px-4 py-2 pl-8 text-white focus:outline-none md:pl-4 font-montserrat"
              placeholder="Search user id here..."
              defaultValue={searchState}
              onChange={(e) => setSearchState(e.target.value)}
              required={true}
            />
            <button className="rounded-r-lg border border-slate-500 bg-primary px-3 py-[12px] text-base font-semibold text-white">
              <AiOutlineSearch />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#289dcf2d] px-3 rounded-xl pb-3">
        <div className="max-w-[90vw] md:max-w-[100vw] mx-auto overflow-x-scroll">
          <table className="w-full pt-3">
            <thead className="w-full">
              <tr className="h-16 w-full">
                {tableHead?.map((thead) => {
                  return (
                    <th
                      style={{ minWidth: thead.width }}
                      // width={thead.width}
                      key={thead.id}
                      className={`font-semibold p-16px px-2 text-left ${
                        changeFont ? changeFont : "font-montserrat"
                      } text-base font-medium text-white`}
                    >
                      {thead.name}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="relative w-full gap-3">
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
                              {tbody?.userId}
                            </span>
                          </div>
                        </td>
                        <td className="px-2">
                          <div className="text-left font-montserrat text-base font-normal">
                            <p>{tbody?.withdrawAddress}</p>
                          </div>
                        </td>
                        {/* <td className="px-2">
                      <div className="text-left font-montserrat text-base font-normal">
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                          {tbody?.transactionId}
                        </span>
                      </div>
                    </td> */}
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
                            <p>{tbody?.createdAt.split("T")[0]}</p>
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
                              {tbody?.status}
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
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    onClick={() => handleDelete(tbody?._id)}
                                    className={`mx-auto block w-full rounded-md p-[10px] text-center font-inter text-[16px] font-normal hover:bg-[#6c8c99] ${
                                      active ? "bg-[#6c8c99]" : ""
                                    }`}
                                  >
                                    Delete
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
                  <p className="absolute left-[25%] md:left-1/2 transform translate-x-[-25%] md:translate-x-[-50%] top-[150px] z-[999999]">
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
      </div>
      <BigModal
        title={modalTitle}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        modalContent={modalContent}
      />
      <SmallModal
        title={modalTitle}
        modalOpen={smallModalOpen}
        setModalOpen={setSmallModalOpen}
        modalContent={modalContent}
      />
    </div>
  );
};

export default WithdrawListTable;
