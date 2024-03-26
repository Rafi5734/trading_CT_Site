import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import TablePagination from "../../SharedComponent/SmallComponent/TablePagination";
import BigModal from "../../SharedComponent/Modal/BigModal";
import SmallModal from "../../SharedComponent/Modal/SmallModal";
import DeleteCompo from "../../SharedComponent/Modal/ModalContent/DeleteCompo";
import CreateAiPlan from "./CreateAiPlan";
import { useGetBotsQuery } from "../../API/Users/Bot/botSlice";
import { useMemo } from "react";

const tableHead = [
  { id: 1, name: "No", width: 50 },
  { id: 1, name: "Id", width: 50 },
  { id: 2, name: "Ai Name", width: 90 },
  { id: 3, name: "Price", width: 130 },
  { id: 4, name: "Return", width: 100 },
  { id: 5, name: "Duration", width: 130 },
  { id: 9, name: "Action", width: 60 },
];

const AiPlans = () => {
  const { data: aiPlanData, isLoading } = useGetBotsQuery();

  // console.log(aiPlanData?.data);

  const tableData = aiPlanData?.data;
  const [tableDatas2, setTableDatas2] = useState(tableData);
  const [searchState, setSearchState] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalOpen, setModalOpen] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [smallModalOpen, setSmallModalOpen] = useState("");

  useEffect(() => {
    const filter = () => {
      if (searchState !== "") {
        const filteredArray = tableData?.filter((dat) => {
          // Adjust the property names based on the searchMethod prop
          return dat["aiName"]
            ?.toLowerCase()
            .includes(searchState.toLowerCase());
        });
        setTableDatas2(filteredArray);
      } else {
        setTableDatas2(tableData);
      }
    };

    filter();
  }, [searchState, "aiName", tableData]);

  // pagination state
  const [data, setData] = useState(tableDatas2);
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    setData(tableDatas2);
    setcurrentPage(1);
  }, [tableDatas2]);

  const handleDelete = (id, name) => {
    setModalTitle("Delete Ai Plan");
    console.log(id, name);
    setSmallModalOpen(true);
    setModalContent(
      <DeleteCompo setModalOpen={setSmallModalOpen} id={id} name={name} />
    );
  };

  const handleAction = () => {
    setModalTitle("Create Ai Plans");
    setModalContent(<CreateAiPlan />);
    setModalOpen(true);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-between gap-4 py-4 md:flex-row">
        <div>
          <h3 className="titleStyle font-montserrat text-[18px] font-semibold text-white lg:text-2xl">
            Ai Plans
          </h3>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-4 md:w-[unset] md:flex-row">
          <div className="relative flex h-[38px] w-full items-center">
            <input
              type="text"
              className=" bg-secondBackground w-full rounded-l-lg border border-slate-500 px-4 py-2 pl-11 font-montserrat text-white focus:outline-none"
              placeholder="Search name here..."
              defaultValue={searchState}
              onChange={(e) => setSearchState(e.target.value)}
              required={true}
            />

            <button className="absolute rounded-l-[7px] ml-[1px] bg-primary  top-[-1px] bottom-[-1px] px-[10px] py-2 text-lg font-semibold text-white left-0 cursor-default">
              <AiOutlineSearch />
            </button>
            <div>
              <button
                onClick={() => handleAction()}
                className="w-fit min-w-[160px] rounded-r-lg border border-slate-500 bg-primary px-3 py-2 text-base font-semibold text-white"
              >
                <span>+ Create Ai Plan</span>
              </button>
            </div>
          </div>
        </div>
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
                      className={`p-16px px-2 text-left font-montserrat text-base font-medium text-white`}
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
                    className="h-24 text-sm leading-none text-[#ffffff]"
                  >
                    <td className="px-2">
                      <div className="text-left font-montserrat text-base font-normal">
                        <p>{i + 1}</p>
                      </div>
                    </td>
                    <td className="px-2">
                      <div className="text-left font-montserrat text-base font-normal">
                        <p>{tbody?._id}</p>
                      </div>
                    </td>
                    <td className="px-2">
                      <div className="text-left font-montserrat text-base font-normal">
                        <p>{tbody?.AiName}</p>
                      </div>
                    </td>
                    <td className="px-2">
                      <div className="text-left font-montserrat text-base font-normal">
                        <p>{tbody?.Price}</p>
                      </div>
                    </td>
                    <td className="px-2">
                      <div className="text-left font-montserrat text-base font-normal">
                        <p>{tbody?.Return}</p>
                      </div>
                    </td>
                    <td className="px-2">
                      <div className="text-left font-montserrat text-base font-normal">
                        <p>{tbody?.Duration}H</p>
                      </div>
                    </td>
                    <td className="pl-6">
                      <svg
                        onClick={() => handleDelete(tbody?._id, tbody?.aiName)}
                        className="cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="20"
                        viewBox="0 0 12 17"
                        fill="none"
                      >
                        <path
                          d="M2.49998 4.2V2.6C2.49998 2.17565 2.66855 1.76869 2.96861 1.46863C3.26866 1.16857 3.67563 1 4.09998 1H7.29998C7.72432 1 8.13129 1.16857 8.43135 1.46863C8.7314 1.76869 8.89998 2.17565 8.89998 2.6V4.2M10.3 4.2H1.09998V14.4C1.09998 14.8243 1.26855 15.2313 1.5686 15.5314C1.86866 15.8314 2.27563 16 2.69998 16H8.69998C9.12432 16 9.53129 15.8314 9.83135 15.5314C10.1314 15.2313 10.3 14.8243 10.3 14.4V9.8V4.2Z"
                          stroke="#FE7062"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
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

export default AiPlans;
