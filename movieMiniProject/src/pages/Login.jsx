import { NavLink, useNavigate } from "react-router";
import { useState } from "react";
import { supabase } from "../supabase";
import Input from "../components/Input";
import googleImg from "../assets/google.png";
import kakaoImg from "../assets/kakao.png";
import githubImg from "../assets/github.png";

const Login = () => {
  const emailReg = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$";
  const passwordReg = "^[a-zA-Z0-9]{8,}$";
  const emailErrorMessage = `올바른 이메일 양식으로 입력해주세요`;
  const passwordErrorMessage = `비밀번호는 8자 이상이어야 합니다`;
  const [emailInput, setEmailInput] = useState(``);
  const [passwordInput, setPasswordInput] = useState(``);
  const navigate = useNavigate();

  async function logInWithEmail(e) {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: emailInput,
      password: passwordInput,
    });

    if (error) {
      console.error("로그인 실패:", error.message);
      alert("로그인 실패: " + error.message);
    } else {
      console.log("로그인 성공:", data);
      navigate("/");
    }
  }

  async function logInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  }

  async function logInWithKakao() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "kakao",
    });
  }

  async function logInWithGithub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  }

  return (
    <>
      <form
        onSubmit={logInWithEmail}
        className="pt-[200px] flex flex-col justify-center items-center gap-10"
      >
        <h1 className="text-5xl">로그인</h1>
        <div className="flex gap-8">
          <div className="flex flex-col gap-7">
            <Input
              type={`email`}
              placeHolder={`e-mail을 입력하세요`}
              value={emailInput}
              setValue={setEmailInput}
              pattern={emailReg}
              errorMessage={emailErrorMessage}
            />
            <Input
              type={`password`}
              placeHolder={`비밀번호를 입력하세요`}
              value={passwordInput}
              setValue={setPasswordInput}
              pattern={passwordReg}
              errorMessage={passwordErrorMessage}
            />
          </div>
          <button
            type="submit"
            className="w-[108px] bg-[#ffffff7a] rounded-3xl text-xl"
          >
            Login
          </button>
        </div>
        <div className="flex gap-8">
          <img
            src={googleImg}
            alt="google 로고"
            className="size-11"
            onClick={logInWithGoogle}
          />
          <img
            src={kakaoImg}
            alt="kakao talk 로고"
            className="size-12"
            onClick={logInWithKakao}
          />
          <img
            src={githubImg}
            alt="github 로고"
            className="size-12 invert"
            onClick={logInWithGithub}
          />
        </div>

        <p>
          {" "}
          OZ mate가 아니신가요?!{" "}
          <NavLink to={`/signup`} className={`animate-pulse`}>
            OZ mate 되기!
          </NavLink>
        </p>
      </form>
    </>
  );
};

export default Login;
