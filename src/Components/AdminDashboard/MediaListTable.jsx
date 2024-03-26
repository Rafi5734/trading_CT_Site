import TablePagination from "../../SharedComponent/SmallComponent/TablePagination";
import BigModal from "../../SharedComponent/Modal/BigModal";
import SmallModal from "../../SharedComponent/Modal/SmallModal";
import { useState } from "react";
import { useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Menu } from "@headlessui/react";
import { BsThreeDots } from "react-icons/bs";
import DeleteMedia from "../../SharedComponent/Modal/ModalContent/DeleteMedia";

const MediaListTavle = ({
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
  const [searchState, setSearchState] = useState("");
  const [tableDatas2, setTableDatas2] = useState(tableData);
  const [modalTitle, setModalTitle] = useState("");
  const [modalOpen, setModalOpen] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [smallModalOpen, setSmallModalOpen] = useState("");

  useEffect(() => {
    const filter = () => {
      if (searchState !== "") {
        const filteredArray = tableData?.filter((dat) => {
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
    ? data?.slice(indexOfFirstItem, indexOfLastItem)
    : [];

  useEffect(() => {
    setData(tableDatas2);
    setcurrentPage(1);
  }, [tableDatas2]);

  // const handleAction = (data) => {
  //   setModalTitle("User Profile");
  //   setModalContent(<UserProfileContent data={data} />);
  //   setModalOpen(true);
  // };
  const handleDelete = (userEmail, userName, id) => {
    setModalTitle("Delete User");
    setSmallModalOpen(true);
    setModalContent(
      <DeleteMedia
        refetch={refetch}
        setModalOpen={setSmallModalOpen}
        userEmail={userEmail}
        userName={userName}
        id={id}
      />

      // <DeleteUser
      //   refetch={refetch}
      //   setModalOpen={setSmallModalOpen}
      //   userEmail={userEmail}
      //   userName={userName}
      //   id={id}
      // />
    );
  };
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
                    <td className="px-2 ">
                      <div className="border rounded-xl w-32 mb-8">
                        <img
                          className="w-full border rounded-xl w-32"
                          src={tbody?.image}
                          alt="media-image"
                        />
                        {/* <p>{tbody?._id}</p> */}
                      </div>
                    </td>
                    <td className="px-2">
                      <div className="text-left capitalize font-montserrat text-base font-normal">
                        <p>{tbody?.title}</p>
                      </div>
                    </td>
                    <td className="px-2">
                      <div className="text-left font-montserrat text-base font-normal">
                        <p>{tbody?.authorName}</p>
                      </div>
                    </td>
                    <td className="px-2">
                      <div className="text-left pl-2 font-montserrat text-base font-normal">
                        <h1>
                          <span className="capitalize rounded-full text-base font-normal">
                            {tbody?.description
                              ?.split(" ")
                              .slice(0, 15)
                              .join(" ") +
                              (tbody?.description?.split("").length > 10
                                ? "..."
                                : "")}
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
                                  handleDelete(
                                    tbody?.email,
                                    tbody?.title,
                                    tbody?._id
                                  )
                                }
                                className={`mx-auto block w-full rounded-md p-[10px] text-center font-inter text-[16px] font-normal hover:bg-[#6c8c99] ${
                                  active ? "bg-[#6c8c99]" : ""
                                }`}
                              >
                                Delete Media
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

export default MediaListTavle;
