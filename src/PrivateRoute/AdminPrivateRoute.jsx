// import { useContext } from "react";
// import { Navigate } from "react-router-dom";
// import { HashLoader } from "react-spinners";
// import { AuthContext } from "../Providers/AuthProvider";

// const AdminPrivateRoute = ({ children }) => {
//     const {adminLoading, adminToken, userToken, hasAdminAccess} = useContext(AuthContext);

//   if (adminLoading) {
//     return (
//       <div className="w-full h-screen flex justify-center items-center">
//         <HashLoader color="#289dcf" />
//       </div>
//     );
//   }

//   if(!userToken){
//     console.log('no user token');
//     return <Navigate to="/login" />;
//   }

//   if (!adminToken) {
//     console.log('no admin token');
//     return <Navigate to="/not-found" />;
//   }
//   if(!hasAdminAccess){
//     console.log('no access');
//     return <Navigate to="/not-found" />
//   }

//   return children;
// };

// export default AdminPrivateRoute;
