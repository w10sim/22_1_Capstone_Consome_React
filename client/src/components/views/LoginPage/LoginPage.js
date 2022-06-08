import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_action";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
function LoginPage(props) {
  const navigate = useNavigate();
  const disaptch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    let body = {
      email: Email,
      password: Password,
    };

    disaptch(loginUser(body)).then((response) => {
      if (response.payload.loginSuccess) {
        alert("로그인에 성공하였습니다.");
        navigate("/land");
      } else {
        alert("아이디 혹은 비밀번호가 일치하지 않습니다.");
      }
    });
  };
  return (
    <div>
      <div className="header">
        <h2>LOGIN PAGE</h2>
      </div>
      <div className="LoginPageDIV">
        <form className="LoginPageFORM" onSubmit={onSubmitHandler}>
          <label>Email</label>
          <input type="email" value={Email} onChange={onEmailHandler} />
          <br />
          <label>Password</label>
          <input
            type="password"
            value={Password}
            onChange={onPasswordHandler}
          />

          <br />
          <button className="LoginButton" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
