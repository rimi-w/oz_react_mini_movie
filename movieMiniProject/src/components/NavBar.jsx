import { NavLink, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useModeStore } from "../store/ModeStore";
import profile from "../assets/profile.png";
import logo from "../assets/logo.png";
import darkToggle from "../assets/darkToggle.png";
import lightToggle from "../assets/lightToggle.png";
import { supabase } from "../supabase";

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
  const [searchedString, setSearchedString] = useState(``);
  const [searchString, setSearchString] = useState("");
  const [user, setUser] = useState(false);
  const [userName, setUserName] = useState(``);
  const [profileClick, setProfileClick] = useState(false);
  const { isDark, toggleMode } = useModeStore();
  const debounceValue = useDebounce(searchString);
  const navigate = useNavigate();

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session) {
          setUser(true);
          console.log("✅ 로그인 상태:", session.user);
        } else {
          setUser(false);
          console.log("❌ 로그아웃됨");
        }
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    async function getUserData() {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      setUserName(user.user_metadata.name);
    }
    user && getUserData();
  }, [user]);

  useEffect(() => {
    if (debounceValue) {
      navigate(`search?name=${debounceValue}`);
    } else {
      navigate(`/`);
    }
    return setSearchedString(``);
  }, [debounceValue, navigate]);

  const handleProfile = () => {
    setProfileClick((prev) => !prev);
  };

  async function signOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("로그아웃 실패:", error.message);
      alert("로그아웃 실패: " + error.message);
    } else {
      console.log("로그아웃 성공:");
      navigate("/");
      setProfileClick(false);
    }
  }

  return (
    <nav
      className={`w-screen h-24 p-[0_40px_15px_30px] flex justify-between items-end fixed z-50`}
    >
      <NavLink to={"/"} end>
        {isDark && (
          <img
            className="invert size-15 rounded-full mr-[20px]"
            src={logo}
            alt="OZ Movie 로고"
          />
        )}
        {!isDark && (
          <img
            className="size-15 rounded-full mr-[20px]"
            src={logo}
            alt="OZ Movie 로고"
          />
        )}
      </NavLink>
      <input
        value={searchedString}
        type="text"
        className="w-[60%] h-10 bg-[#ffffff80] rounded-full p-[0_20px]"
        placeholder="🔍 영화 제목을 검색하세요"
        onChange={(e) => {
          setSearchString(e.target.value);
          setSearchedString(e.target.value);
        }}
        onKeyDown={(e) => {
          // enter 쳤을때 해당 페이지로 이동
          if (e.key === `Enter`) {
            const value = searchString.trim();
            if (!value) {
              navigate(`/`);
              return;
            }
            navigate(`/search?name=${value}`);
          }
        }}
      />
      <div className="flex items-end gap-2">
        <div className="flex">
          {isDark && (
            <img
              src={lightToggle}
              alt="라이트모드 전환 버튼"
              className="invert size-7"
              onClick={toggleMode}
            />
          )}
          {!isDark && (
            <img
              src={darkToggle}
              alt="다크모드 전환 버튼"
              className="size-7"
              onClick={toggleMode}
            />
          )}
        </div>
        {!user && (
          <div className="w-12.5 items-end gap-3 text-[15px] ml-[10px] hidden sm:flex sm:flex-col sm:block">
            <button onClick={() => navigate(`/login`)}>LogIn</button>
          </div>
        )}
        {user && (
          <img
            src={profile}
            alt="프로필 사진"
            className="invert size-11 ml-[16px]"
            onClick={handleProfile}
          />
        )}
        {profileClick && (
          <div className="w-30 flex flex-col justify-center items-center p-1 absolute right-10 top-[90px] bg-[#ffffff92] rounded-[5px]">
            <p className="w-[100%] text-center pb-2 text-[#ffffffc8] border-b-2 border-[#8484847b]">
              {userName} 님
            </p>
            <NavLink to={`/my-page`} onClick={handleProfile}>
              <p className="text-[#0000006f] active:text-[#0f2374cf] p-[8px_0]">
                My page
              </p>
            </NavLink>
            <p
              onClick={signOut}
              className="w-[100%] text-center text-[#0000006f] active:text-[#0f2374cf] border-[#8484847b] border-t-2 p-[8px_0]"
            >
              Logout
            </p>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
