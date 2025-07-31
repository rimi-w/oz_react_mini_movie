import profileImg from "../assets/profile.png";

function MyPage() {
  return (
    <div className="pt-[150px] flex">
      <div className="w-[300px] flex flex-col justify-center items-center gap-1 p-8">
        <img src={profileImg} alt="profile 이미지" className="invert size-30" />
        <p className="pt-5">user.name</p>
        <p>user.email</p>
      </div>
      <div className="w-[calc(100vw-340px)] mt-5 mr-10 p-[35px_40px] bg-[#ffffff3b] rounded-4xl">
        <p className="border-b-2 border-[#00000077] pb-2"> My Movies 🎞</p>
      </div>
    </div>
  );
}

export default MyPage;
