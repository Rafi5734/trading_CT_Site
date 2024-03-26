// import { useContext } from "react";
// import { Navigate } from "react-router-dom";
// import { HashLoader } from "react-spinners";
// import { AuthContext } from "../Providers/AuthProvider";

// const PrivateRoute = ({ children }) => {
//   const { userToken, loading, user } = useContext(AuthContext);

//   if (loading) {
//     return (
//       <div className="w-full h-screen flex justify-center items-center">
//         <HashLoader color="#289dcf" />
//       </div>
//     );
//   }

//   if (!userToken) {
//     return <Navigate to="/login" />;
//   }
//   if (userToken && user && !user?.is_verified && !loading) {
//     return <Navigate to="/onboarding" />;
//   }

//   return children;
// };

// export default PrivateRoute;
