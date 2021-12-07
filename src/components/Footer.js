import React from 'react';
import "./footer.css";
import camera from "./camera.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerBack"></div>
      <div className="cameraIcon">
        <img className="cameraImg" src={camera} alt="cam" />
      </div>
    </div>
  )
}
