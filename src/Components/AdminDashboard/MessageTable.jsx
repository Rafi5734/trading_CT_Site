import { useEffect, useState } from "react";
import TablePagination from "../../SharedComponent/SmallComponent/TablePagination";
import { Link } from "react-router-dom";
import { Menu } from "@headlessui/react";
import { BsThreeDots } from "react-icons/bs";
import BigModal from "../../SharedComponent/Modal/BigModal";
import SmallModal from "../../SharedComponent/Modal/SmallModal";
import DeleteCompo from "../../SharedComponent/Modal/ModalContent/DeleteCompo";
import MessageDetailsContent from "./Content/MessageDetailsContent";
import MessageDelete from "../../SharedComponent/Modal/ModalContent/MessageDelete";

const MessageTable = ({
  pageTitle,
  tableHead,
  tableData,
  changeFont,
  handleGetAllMessage,
}) => {
  // pagination state
  const [data, setData] = useState(tableData);
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    setData(tableData);
    setcurrentPage(1);
  }, [tableData]);

  // Modal Action

  const [modalTitle, setModalTitle] = useState("");
  const [modalOpen, setModalOpen] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [smallModalOpen, setSmallModalOpen] = useState("");

  const handleAction = (data) => {
    setModalTitle("Message details");
    setModalContent(<MessageDetailsContent data={data} />);
    setModalOpen(true);
  };
  const handleDelete = (id, name) => {
    setModalTitle("Delete Message");
    setSmallModalOpen(true);
    setModalContent(
      <MessageDelete
        setModalOpen={setSmallModalOpen}
        handleRefetchFunction={handleGetAllMessage}
        handleFunction={true}
        fetchUrl="https://stock-back.vercel.app/api/v1/message"
        id={id}
        name={name}
      />
    );
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4 py-4 md:flex-row">
        <div>
          <h3 className="text-center titleStyle font-montserrat text-[18px] font-semibold text-white lg:text-2xl">
            {pageTitle}
          </h3>
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
              {currentItems.length > 0 ? (
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
                            <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                              {tbody?.name}
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
                          <div className="text-left font-montserrat text-base font-normal">
                            <p>{tbody?.telephone}</p>
                          </div>
                        </td>
                        <td className="px-2">
                          <div className="text-left font-montserrat text-base font-normal">
                            <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                              {`${
                                tbody?.subject.length > 15
                                  ? tbody?.subject.slice(0, 14) + "..."
                                  : tbody?.subject
                              }`}
                            </span>
                          </div>
                        </td>
                        {/* <td className="px-2">
                          <div className="text-left font-montserrat text-base font-normal">
                            <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                              {`${
                                tbody?.question.length > 25
                                  ? tbody?.question.slice(0, 24) + "..."
                                  : tbody?.question
                              }`}
                            </span>
                          </div>
                        </td> */}
                        <td className="relative pl-5">
                          <Menu>
                            <Menu.Button className="">
                              <span className=" text-left font-montserrat text-base font-normal">
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
                                    View Details
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
                                    Delete Message
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
    </div>
  );
};

export default MessageTable;
