import { useState } from "react";
import { supabase } from "../supabase";
import { useNavigate } from "react-router";
import { regExp } from "../constants/regularExpression";
import { errorMessage } from "../constants/errorMessage";
import Input from "../components/Input";

const Signup = () => {
  const [emailInput, setEmailInput] = useState(``);
  const [nameInput, setNameInput] = useState(``);
  const [passwordInput, setPasswordInput] = useState(``);
  const [checkPasswordInput, setCheckPasswordInput] = useState(``);
  const navigate = useNavigate();

  const signUp = async (emailInput, nameInput, passwordInput) => {
    // 1. Supabase에 회원가입 시도
    const { data, error } = await supabase.auth.signUp({
      email: emailInput,
      password: passwordInput,
      options: {
        data: {
          name: nameInput,
        },
      },
    });

    if (error) {
      console.error("회원가입 실패:", error.message);
    } else {
      console.log("회원가입 성공!", data);
    }

    console.log("회원가입 성공:", data);

    // 2. 회원가입 성공했으면 → users 테이블에도 정보 저장
    const userId = data.user.id; // 유저의 고유 ID 가져오기

    const { error: insertError } = await supabase
      .from("users") // ← 네가 만든 users 테이블
      .insert([
        {
          id: userId,
          name: nameInput,
          email: emailInput,
        },
      ]);

    if (insertError) {
      console.error("유저 정보 저장 실패:", insertError.message);
    } else {
      console.log("유저 정보 저장 성공!");
    }
    // display name에 nameInput 업데이트
    await supabase.auth.updateUser({
      data: {
        name: nameInput,
        full_name: nameInput,
      },
    });
  };

  return (
    <article className="pt-[150px] flex justify-center items-center">
      <form
        onSubmit={(e) => {
          e.preventDefault(); // 새로고침 막기 => 이후 함수 실행하기 위함.
          signUp(emailInput, nameInput, passwordInput);
        }}
        className="w-[40%] min-w-[422px] h-[800px] pt-10 rounded-[40px] m-auto bg-[#ffffff5e] flex flex-col justify-center items-center gap-5"
      >
        <h1 className="text-5xl pb-8">🎉 회원가입 🎉</h1>
        <div className="w-[350px] flex flex-col items-center gap-6">
          <div className="flex flex-col gap-2">
            <p>이메일</p>
            <Input
              type={`email`}
              placeHolder={`abc@defgh.com`}
              value={emailInput}
              setValue={setEmailInput}
              pattern={regExp.email}
              errorMessage={errorMessage.email}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p>이름</p>
            <Input
              type={`text`}
              placeHolder={`2~8자 사이 한글, 영어만 사용`}
              value={nameInput}
              setValue={setNameInput}
              pattern={regExp.name}
              errorMessage={errorMessage.name}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p>비밀번호</p>
            <Input
              type={`password`}
              placeHolder={`영어 대문자/소문자 + 숫자의 조합 사용`}
              value={passwordInput}
              setValue={setPasswordInput}
              pattern={regExp.password}
              errorMessage={errorMessage.password}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p>비밀번호 확인</p>
            <Input
              type={`password`}
              placeHolder={`비밀번호를 한 번 더 입력하세요`}
              value={checkPasswordInput}
              setValue={setCheckPasswordInput}
              pattern={regExp.password}
              errorMessage={errorMessage.checkPassword}
              compareValue={passwordInput}
            />
          </div>
        </div>
        <button
          type="submit"
          className="text-2xl text-[#14477b] border-4 border-[#14477b81] hover:text-white hover:bg-[#14477b] active:bg-[#b47840] active:border-[#b47840] p-[10px_20px] rounded-2xl mt-10"
        >
          OZ mate 되기!
        </button>
      </form>
    </article>
  );
};

export default Signup;
