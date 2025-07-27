import { useNavigation } from "react-router";
import logo from "../assets/logo.png";
import ozCharacter from "../assets/oz-character.png";

const Loading = () => {
  const navigation = useNavigation(); // 로딩상태를 알려주는 react-router hook
  const isLoading = navigation.state === "loading";

  return (
    isLoading && (
      <div className="flex flex-col items-center m-auto">
        <div className="w-screen h-[calc(100vh-100px)] flex justify-center items-center relative">
          <img src={logo} alt="OZ Movie의 로고" className="size-96 invert" />
          <div className="size-40 bg-black absolute top-[200px] left-[300px] rounded-full"></div>
        </div>
        <img
          src={ozCharacter}
          alt="OZ Movie의 로고"
          className="size-40 absolute top-[200px] left-[320px] rounded-full invert animate-bounce"
        />
        <p className="text-4xl font-bold absolute bottom-[200px]">
          OZ가 영화를 가지고 뛰어오고 있어요!!
        </p>
      </div>
    )
  );
};

export default Loading;
