import { NavLink } from "react-router";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <nav className="w-screen h-24 p-[0_40px_15px_30px] flex justify-between items-end bg-black fixed z-50">
      <NavLink to={"/"} end>
        <img
          className="invert size-15 rounded-full"
          src={logo}
          alt="OZ Movie 로고"
        />
      </NavLink>
      <div className="flex items-end gap-3 text-[15px]">
        <button>LogIn</button>
        <button>SignUp</button>
      </div>
    </nav>
  );
};

export default NavBar;
