import { useGetDepositListQuery } from "../../API/Users/userDeposit/UserDepositSlice";
import DepositListTable from "../../Components/AdminDashboard/DepositListTable";
const DepositList = () => {
  const { data: depositList } = useGetDepositListQuery(undefined, {
    pollingInterval: 2000,
  });

  // console.log(depositList?.data);
  const tableHead = [
    { id: 1, name: "SL No", width: 70 },
    { id: 2, name: "User ID", width: 50 },
    { id: 3, name: "Deposit Address", width: 180 },
    { id: 4, name: "Transaction ID", width: 140 },
    { id: 5, name: "Amount", width: 60 },
    { id: 6, name: "Date", width: 120 },
    { id: 7, name: "Screenshot", width: 90 },
    { id: 8, name: "Status", width: 60 },
    { id: 9, name: "Action", width: 70 },
  ];

  const tableData = depositList?.data;
  return (
    <div>
      <DepositListTable
        pageTitle="Deposit List"
        tableHead={tableHead}
        tableData={tableData}
      />
    </div>
  );
};

export default DepositList;
