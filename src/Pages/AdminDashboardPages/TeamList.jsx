import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import TeamListTable from "./TeamListTable";


const tableHead = [
  { id: 1, name: "No", width: 50 },
  { id: 2, name: "User ID", width: 90 },
  { id: 4, name: "Name", width: 100 },
  { id: 6, name: "Email", width: 120 },
  { id: 7, name: "Role", width: 80 },
  { id: 8, name: "Created At", width: 190 },
  { id: 9, name: "Action", width: 60 },
];

const TeamList = () => {
  const { adminToken, adminEmail } = useContext(AuthContext);
  
  const { data: memberList = [], isLoading: adminLoading, refetch } = useQuery(["/admin/all"], async () => {
    const res = await fetch(
      "https://stock-back.vercel.app/api/v1/admin/all",
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

  console.log(memberList);

  
  // console.log("admin user details", admin);
  return (
    <div className="">
      <TeamListTable
        pageTitle="All Member List"
        tableHead={tableHead}
        tableData={memberList.data}
        searchOption={true}
        isLoading={adminLoading}
        refetch={refetch}
      />
    </div>
  );
};

export default TeamList;
