import React, { useState } from "react";
import "./InfoPage.css";
import $ from "jquery";

function InfoPage() {
  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [Number, setNumber] = useState("");
  const [Address, setAddress] = useState("");

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };

  const onDescriptionHandler = (event) => {
    setDescription(event.currentTarget.value);
  };

  const onNumberHandler = (event) => {
    setNumber(event.currentTarget.value);
  };

  const onAddressHandler = (event) => {
    setAddress(event.currentTarget.value);
  };

  //   파일 정보 입력 받고 입력 받은 정보를 txt파일 형식으로 저장
  const Print = () => {
    var text = Name + "\n" + Description + "\n" + Number + "\n" + Address;
    download(text);
  };
  const download = (text) => {
    var pom = document.createElement("a");
    pom.setAttribute(
      "href",
      "data:text/plain; charset=utf-8," + encodeURIComponent(text)
    );
    pom.setAttribute("download", "Description.txt");
    pom.style.display = "none";
    document.body.appendChild(pom);
    pom.click();
    document.body.removeChild(pom);
  };

  //   로딩창 화면 구현
  const Loading = () => {
    LoadingProcess();
  };

  const LoadingProcess = () => {
    openLoading();
    setTimeout(function open() {
      window.location.assign("https://testnets.opensea.io/");
    }, 20000);
  };

  function openLoading() {
    //화면 높이와 너비를 구합니다.
    let maskHeight = $(document).height();
    let maskWidth = window.document.body.clientWidth;
    //출력할 마스크를 설정해준다.
    let mask =
      "<div id='mask' style='position:absolute; z-index:9000; background-color:#000000; display:none; left:0; top:0;'></div>";
    // 로딩 이미지 주소 및 옵션
    let loadingImg = "";
    loadingImg +=
      "<div id='loadingImg' style='position:absolute; top: calc(50%); width:100%; z-index:99999999;'>";
    loadingImg +=
      " <img src='https://loadingapng.com/animation.php?image=4&fore_color=000000&back_color=FFFFFF&size=128x128&transparency=1&image_type=0&uncacher=75.5975991029623' style='position: relative; display: block; margin: 0px auto;'/>";
    loadingImg += "<br />";
    loadingImg +=
      "<span  style='position:absolute; top: calc(70%); left:40%; z-index:99999999;'>";
    loadingImg += "<h2>NFT 이미지를 생성중입니다.</h2>";
    loadingImg += "</span>";
    loadingImg += "</div>";

    //레이어 추가
    $("body").append(mask).append(loadingImg);
    //마스크의 높이와 너비로 전체 화면을 채운다.
    $("#mask").css({
      width: maskWidth,
      height: maskHeight,
      opacity: "0.3",
    });
    //마스크 표시
    $("#mask").show();
    //로딩 이미지 표시
    $("#loadingImg").show();
  }

  return (
    <div>
      <div className="header">
        <h2>CONSOMME</h2>
      </div>
      <div className="InfoPageDIV">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>Image Name</label>
          <input type="text" value={Name} onChange={onNameHandler} />
          <label>Description</label>
          <input
            type="text"
            value={Description}
            onChange={onDescriptionHandler}
          />
          <label>Combination Number</label>
          <input type="text" value={Number} onChange={onNumberHandler} />
          <label>KLAY Address</label>
          <input type="text" value={Address} onChange={onAddressHandler} />
          <br />
          <button className="FIGMAButton" onClick={Print}>
            Submit
          </button>
          <button className="FIGMAButton" onClick={Loading}>
            FINISH
          </button>
        </div>
      </div>
    </div>
  );
}

export default InfoPage;
