import Login from "@/components/Login/Login";
import React from "react";

const index = () => {
  const [isLogin, setIsLogin] = React.useState();
  return (
    <>
      <Login isLogin={isLogin} setIsLogin={setIsLogin} />
    </>
  );
};

export default index;
