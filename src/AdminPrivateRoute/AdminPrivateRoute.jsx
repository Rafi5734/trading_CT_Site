// import { useEffect } from "react";
// import { useState } from "react";
// import { Navigate, useLocation } from "react-router-dom";
// import { HashLoader } from "react-spinners";

// const AdminPrivateRoute = ({ children }) => {
//   const [loading, setLoading] = useState(false);
//   const token = localStorage.getItem("authToken");
//   // console.log(children);
//   const location = useLocation();

//   useEffect(() => {
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//     }, 500);
//   }, []);

//   if (loading) {
//     return (
//       <div className="min-w-[99vw] mx-auto h-screen flex items-center justify-center overflow-x-hidden">
//         <HashLoader color="#289dcf" />
//       </div>
//     );
//   }
//   if (token) {
//     return children;
//   }
//   return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
// };

// export default AdminPrivateRoute;
