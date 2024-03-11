import React from "react";
import TextComponent from "../components/logo";
import CameraStream from "../components/webcam";
import GrayButton from "../components/graybutton";
import RedButton from "../components/redbutton";

const Monitoring = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <div>
          <div className="flex flex-col">
            <img src="/MedInTech.png" alt="logo" width="200px" />
            <TextComponent />
            <GrayButton text="Alarm" />
            <GrayButton text="BBOX" />
            <GrayButton text="HighLight" />
            <GrayButton text="Auto stillshot" />
          </div>
        </div>
        <div>
          <div className="flex flex-col">
            <GrayButton text="Setting" />
            <RedButton text="Exit" to="/" />
          </div>
        </div>
      </div>
      <div style={{ flex: 3 }}>
        <CameraStream />
      </div>
    </div>
  );
};

export default Monitoring;
