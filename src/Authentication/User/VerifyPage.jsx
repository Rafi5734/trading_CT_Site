import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const VerifyPage = () => {
  const { user, handleGetUserDetails, loading, setLoading, userEmail } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const verifyText = location.search;
  const userToken = localStorage.getItem("stockUserToken");

  useEffect(() => {
    if (!userToken) {
      navigate("/");
    }
  }, [userToken]);

  const handleVerifyPathname = () => {
    setLoading(true);
    if (verifyText.includes("secret")) {
      const apiUrl = `https://stock-back.vercel.app/api/v1/user/verify${verifyText}`;
      console.log(verifyText);
      const postData = {
        email: userEmail,
      }
      const headers = {
        "Content-Type": "application/json",
        authorization: `Bearer ${userToken}`,
      };
      axios
        .post(apiUrl, postData, { headers })
        .then((res) => {
          console.log("success verify", res);
          toast.success("Response success");
          handleGetUserDetails(user?.email, userToken);
          setLoading(false);
        })
        .catch((err) => {
          console.log("verify", err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleVerifyPathname();
  }, []);

  useEffect(() => {
    if (!loading && user?.is_verified) {
      navigate("/user");
      setLoading(false);
    }
  }, [loading, user]);

  const sendVerifyRequest = () => {
    const apiUrl = "https://stock-back.vercel.app/api/v1/user/verify-request";

    const postData = {
      email: userEmail,
    };
    const headers = {
      "Content-Type": "application/json",
      authorization: `Bearer ${userToken}`,
    };
    axios
      .post(apiUrl, postData, { headers })
      .then((res) => {
        console.log("verify request", res);
      })
      .catch((err) => {
        console.log("verify", err);
        setLoading(false);
      });
  };

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <button onClick={sendVerifyRequest} className="cursor-pointer w-full sm:w-fit bg-primary hover:glass duration-200 p-[10px] px-5 rounded-lg mt-8 mb-3">
        <p className="poppins font-medium">Verify Email</p>
      </button>
    </div>
  );
};

export default VerifyPage;
