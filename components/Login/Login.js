import * as S from "./Login.style";
import React from "react";
import { useRouter } from "next/router";

const Login = ({ isLogin, setIsLogin }) => {
  const [userInfo, setUserInfo] = React.useState({
    userID: "",
    userPassword: null,
  });
  const router = useRouter();
  const [userID, setUserID] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");

  const submit = () => {
    setUserInfo({ userID: userID, userPassword: userPassword });
    setIsLogin(true);
  };

  React.useEffect(() => {
    if (isLogin) {
      router.push("/main");
    }
  }, [isLogin]);
  return (
    <S.Container>
      <S.InputsArea>
        <S.InputBox>
          <S.Title>ID</S.Title>
          <S.Input
            type="text"
            value={userID || ""}
            onChange={(e) => setUserID(e.target.value)}
          />
        </S.InputBox>
        <S.InputBox>
          <S.Title>Password</S.Title>
          <S.Input
            type="password"
            value={userPassword || ""}
            onChange={(e) => {
              setUserPassword(Number(e.target.value));
            }}
          />
        </S.InputBox>
        <S.SubmitButton onClick={submit}>로그인</S.SubmitButton>
      </S.InputsArea>
    </S.Container>
  );
};

export default Login;
