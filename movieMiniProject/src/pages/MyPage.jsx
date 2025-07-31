import { useEffect } from "react";
import profileImg from "../assets/profile.png";
import { useUserData } from "../hooks/useUserData";
import { useLoginStore } from "../store/LoginStore";
import { useNavigate } from "react-router";

function MyPage() {
  const userData = useUserData();
  const { isUser } = useLoginStore();
  const navigate = useNavigate();

  useEffect(() => {
    !isUser && (navigate(`/login`), alert(`로그인이 필요합니다`));
  }, [isUser, navigate]);

  if (!isUser) return null;

  return (
    <div className="pt-[150px] flex">
      <div className="w-[300px] flex flex-col justify-center items-center gap-1 p-8">
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
      <div className="w-[calc(100vw-340px)] mt-5 mr-10 p-[35px_40px] bg-[#ffffff3b] rounded-4xl">
        <p className="border-b-2 border-[#00000077] pb-2"> My Movies 🎞</p>
      </div>
    </div>
  );
}

export default MyPage;
