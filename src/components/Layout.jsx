import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="grid grid-cols-6 gap-4">
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
