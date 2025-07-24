import { NavLink } from "react-router";
import logo from "../assets/logo.jpg";

const NavBar = () => {
  return (
    <nav className="p-5 flex justify-between">
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
