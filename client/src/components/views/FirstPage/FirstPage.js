import React from "react";
import { useNavigate } from "react-router-dom";
import "./FirstPage.css";

function FirstPage() {
  const navigate = useNavigate();

  const GoToLoginPage = () => {
    navigate("/login");
  };
  const GoToRegisterPage = () => {
    navigate("/register");
  };
  return (
    <div>
      <div className="header">
        <h1>CORNSOME</h1>
      </div>
      <div className="First">
        <button className="LoginButton" onClick={GoToLoginPage}>
          Log in
        </button>
        <br />
        <button className="SigninButton" onClick={GoToRegisterPage}>
          Sign up
        </button>
      </div>
    </div>
  );
}

export default FirstPage;
