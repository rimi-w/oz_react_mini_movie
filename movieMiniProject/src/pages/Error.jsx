import { NavLink, useRouteError } from "react-router";
import logo from "../assets/logo.png";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center m-auto">
      <NavLink to={"/"} end>
        <div className="w-[140px] flex justify-between items-center absolute top-5 left-5">
          <span>{`< Back to`}</span>
          <img
            className="invert size-15 rounded-full"
            src={logo}
            alt="OZ Movie 로고"
          />
        </div>
      </NavLink>
      <h1 className="pb-5 text-[#681d1d] text-5xl font-extrabold">Error</h1>
      <p className="pb-5">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default Error;
