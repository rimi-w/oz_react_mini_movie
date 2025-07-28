import { useNavigation } from "react-router";
import logo from "../assets/logo.png";
import ozCharacter from "../assets/oz-character.png";

const Loading = () => {
  const navigation = useNavigation(); // 로딩상태를 알려주는 react-router hook
  const isLoading = navigation.state === "loading";

  return (
    isLoading && (
      <div className="w-screen h-[calc(100vh-120px)] pt-[150px] flex flex-col items-center">
        <div className="w-96 h-96 flex justify-center items-center relative">
          <img src={logo} alt="OZ Movie의 로고" className="size-96 invert" />
          <div className="size-40 bg-black top-15 left-6 absolute rounded-full"></div>
          <img
            src={ozCharacter}
            alt="OZ Movie의 로고"
            className="size-40 absolute top-15 left-10 rounded-full invert animate-bounce"
          />
        </div>
        <p className="text-4xl font-bold">
          OZ가 영화를 가지고 뛰어오고 있어요!!
        </p>
      </div>
    )
  );
};

export default Loading;
