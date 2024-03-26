import { useQuery } from "@tanstack/react-query";
import UserListTable from "../../Components/AdminDashboard/UserListTable";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const tableHead = [
  { id: 1, name: "No", width: 50 },
  { id: 2, name: "User ID", width: 90 },
  { id: 4, name: "Name", width: 100 },
  { id: 6, name: "Email", width: 120 },
  { id: 7, name: "Status", width: 80 },
  { id: 8, name: "Plans", width: 70 },
  { id: 9, name: "Action", width: 60 },
];

const UserList = () => {
  const { adminToken, adminEmail } = useContext(AuthContext);
  
  const { data: admin = [], isLoading: adminLoading, refetch } = useQuery(["user/all"], async () => {
    const res = await fetch(
      "https://stock-back.vercel.app/api/v1/user/all",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${adminToken}`,
        },
        body: JSON.stringify({ email: adminEmail }),
      }
    );
    const result = await res.json();
    return result;
  });

  
  // console.log("admin user details", admin);
  return (
    <div className="">
      <UserListTable
        pageTitle="All User List"
        tableHead={tableHead}
        tableData={admin.data}
        searchOption={true}
        isLoading={adminLoading}
        refetch={refetch}
      />
    </div>
  );
};

export default UserList;
