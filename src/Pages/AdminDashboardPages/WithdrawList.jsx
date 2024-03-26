import { useGetWithdrawListQuery } from "../../API/Users/Withdraw/withdrawSlice";
import WithdrawListTable from "../../Components/AdminDashboard/WithdrawListTable";

const WithdrawList = () => {
  const { data: withdrawList } = useGetWithdrawListQuery(undefined, {
    pollingInterval: 2000,
  });
  const tableHead = [
    { id: 1, name: "SL No", width: 20 },
    { id: 2, name: "User ID", width: 50 },
    { id: 3, name: "Withdraw Address", width: 50 },
    { id: 5, name: "Amount", width: 60 },
    { id: 6, name: "Date", width: 90 },
    { id: 7, name: "Status", width: 60 },
    { id: 8, name: "Action", width: 70 },
  ];

  const tableData = withdrawList?.data;
  return (
    <div>
      <WithdrawListTable
        pageTitle="Withdraw List"
        tableHead={tableHead}
        tableData={tableData}
      />
    </div>
  );
};

export default WithdrawList;
