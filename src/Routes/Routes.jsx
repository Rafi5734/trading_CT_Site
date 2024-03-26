import { createBrowserRouter } from "react-router-dom";
import MainWebsite from "../Layout/MainWebsiteLayout/MainWebsite";
import Home from "../Pages/MainWebsitePages/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AdminPanel from "../Layout/AdminDashboardLayout/AdminPanel";
import AdminDashboard from "../Pages/AdminDashboardPages/AdminDashboard";
import TradeGraphParent from "../Pages/UserDashboardPages/TradeGraph/TradeGraphParent";
import UserDashboard from "../Pages/UserDashboardPages/UserDashboard/UserDashboard";
import UserLogin from "../Authentication/User/UserLogin";
import AboutUs from "../Pages/MainWebsitePages/AboutUs";
import Contact from "../Pages/MainWebsitePages/Contact";
import Faq from "../Pages/MainWebsitePages/Faq";
import Help from "../Pages/MainWebsitePages/Help";
import UserProfile from "../Layout/UserDashboardLayout/UserProfile";
import Bots from "../Pages/UserDashboardPages/Bots/Bots";
import TradeHistory from "../Pages/UserDashboardPages/TradeHistory/TradeHistory";
import AdminLogin from "../Authentication/Admin/AdminLogin";
import Deposit from "../Pages/UserDashboardPages/Deposit/Deposit";
import Withdraw from "../Pages/UserDashboardPages/Withdraw/Withdraw";
import Support from "../Components/Support/Support";
import UserList from "../Pages/AdminDashboardPages/UserList";
import AiPlans from "../Pages/AdminDashboardPages/AiPlans";
import DepositList from "../Pages/AdminDashboardPages/DepositList";
import WithdrawList from "../Pages/AdminDashboardPages/WithdrawList";
import RecentTrade from "../Pages/AdminDashboardPages/RecentTrade";
import Message from "../Pages/AdminDashboardPages/Message";
import ItsTeam from "../Pages/AdminDashboardPages/ItsTeam";
// import PrivateRoute from "../PrivateRoute/PrivateRoute";
import VerifyPage from "../Authentication/User/VerifyPage";
import DepositHistory from "../Pages/UserDashboardPages/TransactionHistory/DepositHistory";
import WithdrawHistory from "../Pages/UserDashboardPages/TransactionHistory/WithdrawHistory";
import AddNewMedia from "../Pages/AdminDashboardPages/AddNewMedia";
import ManageMedia from "../Pages/AdminDashboardPages/ManageMedia";
// import AdminPrivateRoute from "../PrivateRoute/AdminPrivateRoute";
import CreateGlobalChange from "../Pages/AdminDashboardPages/CreateGlobalChange";
import AffiliateProgram from "../Pages/UserDashboardPages/AffiliateProgram/AffiliateProgram";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainWebsite />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/login",
        element: <UserLogin />,
      },
      {
        path: "admin-1615-its-login",
        element: <AdminLogin />,
      },
      {
        path: "/onboarding",
        element: <VerifyPage />,
      },
    ],
  },
  {
    path: "/user",
    // element: <PrivateRoute><UserProfile /></PrivateRoute>,
    element: <UserProfile />,
    children: [
      {
        path: "/user",
        // element: (
        //   <PrivateRoute>
        //     <UserDashboard />
        //   </PrivateRoute>
        // ),
        element: <UserDashboard />,
      },
      {
        path: "/user/trade",
        // element: (
        //   <PrivateRoute>
        //     <TradeGraphParent />
        //   </PrivateRoute>
        // ),
        element: <TradeGraphParent />,
      },
      {
        path: "/user/deposit",
        // element: (
        //   <PrivateRoute>
        //     <Deposit />
        //   </PrivateRoute>
        // ),
        element: <Deposit />,
      },
      {
        path: "/user/trade-history",
        // element: (
        //   <PrivateRoute>
        //     <TradeHistory />
        //   </PrivateRoute>
        // ),
        element: <TradeHistory />,
      },
      {
        path: "/user/deposit-history",
        // element: (
        //   <PrivateRoute>
        //     <DepositHistory />
        //   </PrivateRoute>
        // ),
        element: <DepositHistory />,
      },
      {
        path: "/user/withdraw-history",
        // element: (
        //   <PrivateRoute>
        //     <WithdrawHistory />
        //   </PrivateRoute>
        // ),
        element: <WithdrawHistory />,
      },
      {
        path: "/user/bots",
        // element: (
        //   <PrivateRoute>
        //     <Bots />
        //   </PrivateRoute>
        // ),
        element: <Bots />,
      },
      {
        path: "/user/withdraw",
        // element: (
        //   <PrivateRoute>
        //     <Withdraw />
        //   </PrivateRoute>
        // ),
        element: <Withdraw />,
      },
      {
        path: "/user/support",
        // element: (
        //   <PrivateRoute>
        //     <Support />
        //   </PrivateRoute>
        // ),
        element: <Support />,
      },
      {
        path: "/user/affiliate-program",
        element: <AffiliateProgram />,
      },
    ],
  },

  {
    path: "/admin-1615-ct",
    // element: (
    //   <AdminPrivateRoute>
    //     <AdminPanel />
    //   </AdminPrivateRoute>
    // ),
    element: <AdminPanel />,
    children: [
      {
        path: "/admin-1615-ct",
        // element: (
        //   <AdminPrivateRoute>
        //     <AdminDashboard />
        //   </AdminPrivateRoute>
        // ),
        element: <AdminDashboard />,
      },
      {
        path: "/admin-1615-ct/users",
        element: <UserList />,
        // element: (
        //   <AdminPrivateRoute>
        //     <UserList />
        //   </AdminPrivateRoute>
        // ),
      },
      {
        path: "/admin-1615-ct/ai-plans",
        element: <AiPlans />,
        // element: (
        //   <AdminPrivateRoute>
        //     <AiPlans />
        //   </AdminPrivateRoute>
        // ),
      },
      {
        path: "/admin-1615-ct/deposit-list",
        element: <DepositList />,
        // element: (
        //   <AdminPrivateRoute>
        //     <DepositList />
        //   </AdminPrivateRoute>
        // ),
      },
      {
        path: "/admin-1615-ct/withdraw-list",
        element: <WithdrawList />,
        // element: (
        //   <AdminPrivateRoute>
        //     <WithdrawList />
        //   </AdminPrivateRoute>
        // ),
      },
      {
        path: "/admin-1615-ct/recent-trade",
        element: <RecentTrade />,
        // element: (
        //   <AdminPrivateRoute>
        //     <RecentTrade />
        //   </AdminPrivateRoute>
        // ),
      },
      {
        path: "/admin-1615-ct/market",
        element: <CreateGlobalChange />,
        // element: (
        //   <AdminPrivateRoute>
        //     <CreateGlobalChange />
        //   </AdminPrivateRoute>
        // ),
      },
      {
        path: "/admin-1615-ct/messages",
        element: <Message />,
        // element: (
        //   <AdminPrivateRoute>
        //     <Message />
        //   </AdminPrivateRoute>
        // ),
      },
      {
        path: "/admin-1615-ct/ct-team",
        element: <ItsTeam />,
        // element: (
        //   <AdminPrivateRoute>
        //     <ItsTeam />
        //   </AdminPrivateRoute>
        // ),
      },
      {
        path: "/admin-1615-ct/media",
        element: <AddNewMedia />,
        // element: (
        //   <AdminPrivateRoute>
        //     <AddNewMedia />
        //   </AdminPrivateRoute>
        // ),
      },
      {
        path: "/admin-1615-ct/manage-media",
        element: <ManageMedia />,
        // element: (
        //   <AdminPrivateRoute>
        //     <ManageMedia />
        //   </AdminPrivateRoute>
        // ),
      },
    ],
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
]);
export default router;
