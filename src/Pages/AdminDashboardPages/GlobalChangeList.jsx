import GlobalChangeTable from "../../Components/AdminDashboard/GlobalChangeTable";

const GlobalChangeList = () => {
  const tableHead = [
    { id: 1, name: "No", width: 20 },
    { id: 2, name: "Created At", width: 50 },
    { id: 3, name: "W.Address", width: 50 },
    { id: 5, name: "M.Price", width: 60 },
    { id: 6, name: "M.Cap", width: 90 },
    { id: 7, name: "Status", width: 60 },
    { id: 11, name: "M.Change", width: 60 },
    { id: 12, name: "T.Return", width: 70 },
    { id: 18, name: "Action", width: 70 },
  ];

  const tableData = [
    {
      _id: "6524d45d5e3500f533e1cd3f",
      marketPrice: "123.45",
      marketCapital: "1231231456.78",
      change: "2.34%",
      tradeReturn: "0.567",
      adminWalletAddress: "0xabcdef123456",
      notification: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      status: "pending",
      createdAt: "2023-9-10T04:34:37.804Z",
      updatedAt: "2023-10-10T04:34:37.804Z",
      __v: 0,
    },
    {
      _id: "6524b9180af7f2820d7fd57a",
      marketPrice: "123.45",
      marketCapital: "1231231456.78",
      change: "2.34%",
      tradeReturn: "0.567",
      adminWalletAddress: "0xabcdef123456",
      notification: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      status: "pending",
      createdAt: "2023-10-10T02:38:16.375Z",
      updatedAt: "2023-10-10T02:38:31.671Z",
      __v: 0,
    },
    {
      _id: "6524b7e6b33460da3eb16478",
      marketPrice: "123.45",
      marketCapital: "456.78",
      change: "2.34%",
      tradeReturn: "0.567",
      adminWalletAddress: "0xabcdef123456",
      notification: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      status: "pending",
      createdAt: "2023-10-10T02:33:10.787Z",
      updatedAt: "2023-10-10T02:37:27.605Z",
      __v: 0,
    },
  ];
  return (
    <div>
      <GlobalChangeTable
        pageTitle="Global Change"
        tableHead={tableHead}
        tableData={tableData}
      />
    </div>
  );
};

export default GlobalChangeList;
