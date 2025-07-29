import { NavLink } from "react-router";
import Input from "../components/Input";
import { useState } from "react";

const Login = () => {
  const emailReg = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$";
  const passwordReg = "^[a-zA-Z0-9]{8,}$";
  const emailErrorMessage = `올바른 이메일 양식으로 입력해주세요`;
  const passwordErrorMessage = `비밀번호는 8자 이상이어야 합니다`;
  const [emailInput, setEmailInput] = useState(``);
  const [passwordInput, setPasswordInput] = useState(``);

  return (
    <>
      <form className="pt-[200px] flex flex-col justify-center items-center gap-10">
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
