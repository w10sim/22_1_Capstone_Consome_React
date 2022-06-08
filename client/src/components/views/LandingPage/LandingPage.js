import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/api/hello").then((response) => console.log(response.data));
  }, []);

  const onClickHandler = () => {
    axios.get("/api/users/logout").then((response) => {
      if (response.data.success) {
        alert("로그아웃 되었습니다.");
        navigate("/login");
      } else {
        alert("로그아웃 도중 오류가 발생했습니다.");
      }
    });
  };
  const FIGMAPAGE = () => {
    window.open("https://www.figma.com");
  };
  const AGGIEPAGE = () => {
    window.open("https://aggie.io");
  };
  const SUMO = () => {
    window.open("https://sumo.app/paint/?lang=en");
  };
  // window.location.assign이 next버튼에 할당된 함수
  // 괄호 안에 주소를 넣어주면 됨
  const LoadingPage = () => {
    window.location.assign("https://d318-210-179-210-243.jp.ngrok.io");
  };

  return (
    <div>
      {/* //맨처음 뜨는 화면 
      //화면 상단에 고정되며, 로그아웃 버튼은 우측 상단,글자는 좌측 상단에 고정됨 
      //화면을 내릴 필요가 없이 한 화면에 보이기 때문에 고정시켜도 상관없음 */}
      <div className="header">
        <h2>CORNSOME</h2>
        <div>
          <button className="LogoutButton" onClick={onClickHandler}>
            LOGOUT
          </button>
        </div>
      </div>
      <div className="LandPageDIV">
        <button className="FIGMAButton" onClick={FIGMAPAGE}>
          FIGMA
        </button>
        <button className="FIGMAButton" onClick={AGGIEPAGE}>
          AGGIE
        </button>
        <button className="FIGMAButton" onClick={SUMO}>
          SUMO
        </button>
        <br />
        <label className="LandingLabel">Are you done? then click here!!</label>
        <button className="FIGMAButton" onClick={LoadingPage}>
          Next
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
