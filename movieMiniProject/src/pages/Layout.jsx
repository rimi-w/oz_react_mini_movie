import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Loading from "./Loading";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Loading />
      <Outlet />
    </>
  );
};

export default Layout;
