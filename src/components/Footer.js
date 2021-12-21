import React from 'react';
import "./footer.css";
import camera from "./camera.png";

export default function Footer() {

  // upload関数
  async function upload(e) {
    console.log("eは:", e)
    if (!e.target.files.length) return;
    const fileOfPics = e.target.files[0]
    console.log("fileOfPicsは:", fileOfPics)

    await fetch(
      process.env.IMGBB_URL,
      {
      method: "POST",
      headers: {
      "Content-Type": "Access-Control-Allow-Headers"
      },
      body: fileOfPics,
      }
    )
  }
  return (
    <div className="footer">
      <div className="footerBack"></div>
      <div className="cameraIcon">
        <img className="cameraImg" src={camera} alt="cam" />
        <input id="input_img" type="file" accept="image/*" onChange={upload}></input>
      </div>
    </div>
  )
}
