import axios from "axios";
import MessageTable from "../../Components/AdminDashboard/MessageTable";
import { useEffect, useState } from "react";

const Message = () => {
  const tableHead = [
    { id: 2, name: "Name", width: 90 },
    { id: 2, name: "Email", width: 90 },
    { id: 5, name: "Phone", width: 100 },
    { id: 3, name: "Subject", width: 170 },
    { id: 4, name: "Action", width: 70 },
  ];
  const [messageData, setMessageData] = useState(null);
  const handleGetAllMessage = () => {
    const postData = {};
    const apiUrl = "https://stock-back.vercel.app/api/v1/message";
    const headers = {
      "Content-Type": "application/json",
    };
    axios
      .get(apiUrl, postData, { headers })
      .then((response) => {
        if (response.data.status === "error") {
          console.log(response.data.status)
        } else {
          setMessageData(response.data.data);
          console.log("get all message: ", response.data.data);
        }
      })
      .catch((error) => {
        console.error("updated Error: ", error);
      });
  };
  useEffect(() => {
    handleGetAllMessage();
  }, []);
  return (
    <div>
      <MessageTable
        pageTitle="Messages"
        tableHead={tableHead}
        tableData={messageData ? messageData : []}
        handleGetAllMessage={handleGetAllMessage}
      />
    </div>
  );
};

export default Message;
