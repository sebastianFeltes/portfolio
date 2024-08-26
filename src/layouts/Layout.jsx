import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Layout() {
  return (
    <div className="flex flex-col lg:flex-row w-screen h-screen bg-gray-900">
      <div className="sticky top-0 h-16 lg:h-full lg:w-16 w-full hidden lg:block">
        <Navbar />
      </div>
      <div className="h-full w-full text-orange-500 z-30 overflow-y-scroll">
        <Outlet />
      </div>
      <div className="sticky top-0 h-16 lg:h-full lg:w-16 w-full lg:hidden">
        <Navbar />
      </div>
    </div>
  );
}

export default Layout;
