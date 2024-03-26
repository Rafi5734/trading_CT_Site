import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { createContext } from "react";
import toast from "react-hot-toast";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [hasAdminAccess, setHasAdminAccess] = useState(false);
  const [mainBalance, setMainBalance] = useState(2500);
  const [selectedOption, setSelectedOption] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [adminData, setAdminData] = useState(null);
  const [globalData, setGlobalData] = useState(null);

  // Admin Token And Email
  const [adminToken, setAdminToken] = useState('');
  const [adminEmail, setAdminEmail] = useState('');

  // User Token And Email
  const [userToken, setUserToken] = useState(
    localStorage.getItem("stockUserToken")
  );
  const [userEmail, setUserEmail] = useState(
    JSON.parse(localStorage.getItem("stockUserEmail"))
  );
  // console.log(userEmail);

  const buyAmount = (amount) => {
    if (mainBalance > amount) {
      const balance = mainBalance - amount;
      setMainBalance(balance);
      toast.success("Buy successful.");
    } else {
      toast.error("You don't have enough balance");
    }
  };
  const sellAmount = (amount) => {
    const balance = mainBalance + amount;

    setMainBalance(balance);
    toast.success("Sell successful.");
  };

  const buyAiTrade = (price, text) => {
    if (mainBalance < price) {
      toast.error("Sorry you don't have enough ballance.");
    } else {
      const balance = mainBalance - price;
      setMainBalance(balance);
      toast.success(`${text} successfully purchased.`);
    }
  };

  // Get User Details
  const handleGetUserDetails = async (email = userEmail, token = userToken) => {
    try {
      setLoading(true);
      const apiUrl = "https://stock-back.vercel.app/api/v1/user/single";
      const postData = {
        email: email,
      };
      const headers = {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      };
      axios
        .post(apiUrl, postData, { headers })
        .then((res) => {
          // console.log("get details: ", res);
          if (res.data.success) {
            // console.log(res.data.data);
            setUser(res.data.data[0]);
            setLoading(false);
          } else {
            toast.error("Something wen't wrong");
            setLoading(false);
          }
        })
        .catch((err) => {
          console.log("get details error: ", err);
          setLoading(false);
        });
    } catch (err) {
      console.log(err);
      setLoading(false);
    }

    setLoading(false);
  };

  const { data: admin = [], isLoading: adminLoading } = useQuery(["admin/single"], async () => {
    const res = await fetch(
      "https://stock-back.vercel.app/api/v1/admin/single",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify({ targetAdmin: userEmail }),
      }
    );

    // console.log("admin res", res);

    if (!res.ok) {
      throw new Error("Error fetching admin data");
    }

    const result = await res.json();
    // console.log("admin user list", result);
    if (result.success) {
      setAdminData(result.data[0]);
      setAdminToken(userToken);
      setAdminEmail(userEmail);
      setHasAdminAccess(res.ok);
    }

    return result;
  });

  const { data } = useQuery(["global-change"], async () => {
    const res = await fetch(
      "https://stock-back.vercel.app/api/v1/global-change",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      }
    );

    // console.log("admin res", res);

    if (!res.ok) {
      throw new Error("Error fetching global data");
    }

    const result = await res.json();
    if (result.success) {
      setGlobalData(result.data[0])
    }

    return result;
  });

  useEffect(() => {
    handleGetUserDetails();
  }, []);

  // This is the value what go throw context api
  const userInfo = {
    setGlobalData,
    globalData,
    buyAmount,
    sellAmount,
    mainBalance,
    setMainBalance,
    buyAiTrade,
    setUser,
    user,
    setSelectedOption,
    selectedOption,
    setUserToken,
    userToken,
    setLoading,
    loading,
    handleGetUserDetails,
    setUserEmail,
    userEmail,
    setHasAdminAccess,
    hasAdminAccess,
    adminData,
    adminLoading,
    adminToken,
    adminEmail,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
