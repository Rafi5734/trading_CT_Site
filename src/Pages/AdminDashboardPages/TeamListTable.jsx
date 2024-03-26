import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import TablePagination from "../../SharedComponent/SmallComponent/TablePagination";
import BigModal from "../../SharedComponent/Modal/BigModal";
import { Menu } from "@headlessui/react";
import SmallModal from "../../SharedComponent/Modal/SmallModal";
import DeleteUser from "../../SharedComponent/Modal/ModalContent/DeleteUser";
import UserProfileContent from "../../Components/AdminDashboard/Content/UserProfileContent";

const TeamListTable = ({
  tableData,
  changeFont,
  tableHead,
  searchOption,
  pageTitle,
  createAgent,
  createProduct,
  searchMethod,
  addOrCreate,
  addOrCreateUrl,
  refetch,
}) => {
  const [tableDatas2, setTableDatas2] = useState(tableData);
  const [searchState, setSearchState] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalOpen, setModalOpen] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [smallModalOpen, setSmallModalOpen] = useState("");

  useEffect(() => {
    const filter = () => {
      if (searchState !== "") {
        const filteredArray = tableData.filter((dat) => {
          // Adjust the property names based on the searchMethod prop
          return dat["name"]?.toLowerCase().includes(searchState.toLowerCase());
        });
        setTableDatas2(filteredArray);
      } else {
        setTableDatas2(tableData);
      }
    };

    filter();
  }, [searchState, searchMethod, tableData]);

  // pagination state
  const [data, setData] = useState(tableDatas2);
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data
    ? data.slice(indexOfFirstItem, indexOfLastItem)
    : [];

  useEffect(() => {
    setData(tableDatas2);
    setcurrentPage(1);
  }, [tableDatas2]);

  const handleAction = (data) => {
    setModalTitle("User Profile");
    setModalContent(<UserProfileContent data={data} />);
    setModalOpen(true);
  };
  const handleDelete = (userEmail, userName) => {
    setModalTitle("Delete User");
    setSmallModalOpen(true);
    setModalContent(
      <DeleteUser
        refetch={refetch}
        setModalOpen={setSmallModalOpen}
        userEmail={userEmail}
        userName={userName}
        endpoint={"admin/delete-admin"}
      />
    );
  };

  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${month}-${day}-${year} ${hours}:${minutes}`;
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-between gap-4 py-4 md:flex-row">
        <div>
          <h3 className="font-montserrat text-[20px] lg:text-[24px] font-semibold">
            {pageTitle}
          </h3>
        </div>

        {searchOption && (
          <>
            <div className="flex w-full flex-col items-center justify-center gap-4 md:w-[unset] md:flex-row">
              <div className="flex h-[38px] w-full items-center">
                <input
                  type="text"
                  className="relative bg-secondBackground w-full rounded-l-lg border border-slate-500 px-4 py-2 pl-8 text-white focus:outline-none md:pl-4"
                  placeholder="Search name here..."
                  defaultValue={searchState}
                  onChange={(e) => setSearchState(e.target.value)}
                  required={true}
                />
                {createAgent ? (
                  <>
                    <button className="absolute rounded-l-lg border-y border-slate-500 bg-primary py-2 pl-2 text-base font-semibold text-white md:right-[440px]">
                      <AiOutlineSearch />
                    </button>
                    <Link
                      to={addOrCreateUrl}
                      className="w-[200px] rounded-r-lg border border-slate-500 bg-primary px-3 py-2 text-base font-semibold text-white"
                    >
                      {addOrCreate}
                    </Link>
                  </>
                ) : createProduct ? (
                  <>
                    <button className="absolute rounded-l-lg border-y border-slate-500 bg-primary  py-[12px] pl-2 text-base font-semibold text-white md:right-[470px]">
                      <AiOutlineSearch />
                    </button>
                    <Link
                      to={addOrCreateUrl}
                      className=" w-[230px] rounded-r-lg border border-slate-500 bg-primary px-3 py-2 text-base font-semibold text-white"
                    >
                      <span>{addOrCreate}</span>
                    </Link>
                  </>
                ) : (
                  <button className="rounded-r-lg border border-slate-500 bg-primary px-3 py-[12px] text-base font-semibold text-white">
                    <AiOutlineSearch />
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </div>
      <div className="bg-[#289dcf2d] px-3 rounded-xl pb-3">
        <div className="max-w-[90vw] md:max-w-[100vw] mx-auto overflow-x-scroll">
          <table className="w-full">
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
              {currentItems?.map((tbody, i) => {
                // console.log("tbody", tbody);
                return (
                  <tr
                    key={i}
                    className="h-24 text-sm leading-none text-[#edecec]"
                  >
                    <td className="px-2">
                      <div className="text-left font-montserrat text-base font-normal">
                        <p>{i + 1}</p>
                      </div>
                    </td>
                    <td className="px-2">
                      <div className=" text-green-300 px-1 text-center rounded-lg bg-green-900 font-montserrat text-sm font-normal">
                        <p>{tbody?._id}</p>
                      </div>
                    </td>
                    <td className="px-2">
                      <div className="text-left capitalize font-montserrat text-base font-normal">
                        <p>{tbody?.name}</p>
                      </div>
                    </td>
                    <td className="px-2">
                      <div className="text-left font-montserrat text-base font-normal">
                        <p>{tbody?.email}</p>
                      </div>
                    </td>
                    <td className="px-2">
                      <div className="text-left font-montserrat text-base font-normal">
                        <p className="text-[#54b947] capitalize text-center text-base rounded-full bg-green-500 bg-opacity-20 w-24 font-bold">
                          {tbody?.role}
                        </p>
                      </div>
                    </td>
                    <td className="px-2">
                      <div className="text-left pl-2 font-montserrat text-base font-normal">
                        <h1>
                          <span className="capitalize rounded-full bg-[#DDB7591A] px-2 py-1 text-[#E7B12B]">
                            {formatDate(tbody?.createdAt)}
                          </span>
                        </h1>
                      </div>
                    </td>
                    <td className="relative px-2 pl-5">
                      <Menu>
                        <Menu.Button>
                          <span className="text-left font-montserrat text-base font-normal">
                            <BsThreeDots />
                          </span>
                        </Menu.Button>
                        <Menu.Items className="absolute left-[-147px] z-[10] flex min-w-[170px] flex-col bg-primary rounded-xl border border-slate-500">
                          {/* <Menu.Item>
                            {({ active }) => (
                              <Link
                                onClick={() => handleAction(tbody)}
                                className={`mx-auto block w-full rounded-md p-[10px] text-center font-inter text-[16px] font-normal hover:bg-[#6c8c99] ${
                                  active ? "bg-[#6c8c99]" : ""
                                }`}
                              >
                                See Profile
                              </Link>
                            )}
                          </Menu.Item> */}
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                onClick={() =>
                                  handleDelete(tbody?.email, tbody?.name)
                                }
                                className={`mx-auto block w-full rounded-md p-[10px] text-center font-inter text-[16px] font-normal hover:bg-[#6c8c99] ${
                                  active ? "bg-[#6c8c99]" : ""
                                }`}
                              >
                                Delete User
                              </Link>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Menu>
                    </td>
                  </tr>
                );
              })}
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

export default TeamListTable;
