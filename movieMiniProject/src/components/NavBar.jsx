import { NavLink, useNavigate } from "react-router";
import logo from "../assets/logo.png";
import { useEffect, useState } from "react";

const useDebounce = (searchString) => {
  const [debounce, setDebounce] = useState(``);

  useEffect(() => {
    const debounceValue = setTimeout(() => {
      setDebounce(searchString.trim());
    }, 1000);
    return () => clearTimeout(debounceValue);
  }, [searchString]);

  return debounce;
};

const NavBar = () => {
  const [searchString, setSearchString] = useState("");
  const navigate = useNavigate();
  const debounceValue = useDebounce(searchString);

  useEffect(() => {
    if (debounceValue) {
      navigate(`search?name=${debounceValue}`);
    } else {
      navigate(`/`);
    }
  }, [debounceValue, navigate]);

  return (
    <nav className="w-screen h-24 p-[0_40px_15px_30px] flex justify-between items-end bg-black fixed z-50">
      <NavLink to={"/"} end>
        <img
          className="invert size-15 rounded-full mr-[20px]"
          src={logo}
          alt="OZ Movie 로고"
        />
      </NavLink>
      <input
        type="text"
        className="w-[70%] h-10 bg-[#ffffff80] rounded-full p-[0_20px]"
        placeholder="🔍 영화 제목을 검색하세요"
        onChange={(e) => {
          setSearchString(e.target.value);
        }}
        onKeyDown={(e) => {
          // enter 쳤을때 해당 페이지로 이동
          if (e.key === `Enter`) {
            const value = e.target.value.trim();
            if (!value) {
              navigate(`/`);
              return;
            }
            navigate(`search?name=${e.target.value}`);
          }
        }}
      />
      <div className=" items-end gap-3 text-[15px] ml-[20px] hidden sm:flex sm:block">
        <button>LogIn</button>
        <button>SignUp</button>
      </div>
    </nav>
  );
};

export default NavBar;
