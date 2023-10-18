import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const LayoutMain = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default LayoutMain;
