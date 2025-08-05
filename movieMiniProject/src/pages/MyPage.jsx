import { useEffect } from "react";
import { useUserData } from "../hooks/useUserData";
import { useLoginStore } from "../store/LoginStore";
import { useNavigate } from "react-router";
import profileImg from "../assets/profile.png";
import FavoriteMovies from "../components/FavoriteMovies";

function MyPage() {
  const userData = useUserData();
  const { isUser, setIsUser } = useLoginStore();
  const navigate = useNavigate();

  useEffect(() => {
    userData && setIsUser(true); // 없으면 로그인페이지로 넘어감.
    !isUser && (navigate(`/login`), alert(`로그인이 필요합니다`));
  }, [userData, isUser, setIsUser, navigate]);

  if (!isUser) return null;

  console.log(isUser);

  return (
    <div className="pt-[150px] flex items-start">
      <div className="w-[300px] pt-24 flex flex-col justify-center items-center gap-1 p-8">
        {userData && userData.avatar_url === undefined && (
          <img
            src={profileImg}
            alt="profile 이미지"
            className="invert size-30 rounded-full"
          />
        )}
        {userData && userData.avatar_url && (
          <img
            src={userData.avatar_url}
            alt="profile 이미지"
            className="size-30 rounded-full"
          />
        )}
        <p className="pt-5">{userData && userData.name}</p>
        <p className="text-[#ffffff7b]">{userData && userData.email}</p>
      </div>
      <div className="w-[calc(100vw-340px)] min-w-[450px] mt-5 mr-10 p-[35px_40px] bg-[#ffffff3b] rounded-4xl flex flex-col items-start">
        <p className="w-[100%] border-b-2 border-[#00000077] pb-2">
          {" "}
          My Movies 🎞
        </p>
        <FavoriteMovies />
      </div>
    </div>
  );
}

export default MyPage;
