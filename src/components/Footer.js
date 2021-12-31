import React, { useRef } from 'react';
import S3 from 'react-aws-s3';
import "./footer.css";
import camera from "./camera.png";
require("dotenv").config();

export default function Footer() {

  const postButton = useRef();
  const config = {
    bucketName: "pizzagram-s3",
    region: "ap-northeast-1",
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    }
  const ReactS3Client = new S3(config);

  // upload関数
  async function upload(e) {
    // console.log("eは:", e)
    // console.log("postButton is", postButton)
    if (!e.target.files.length) return;
    const fileOfPics = e.target.files[0]
    // console.log("fileOfPicsは:", fileOfPics)

    await ReactS3Client
    .uploadFile(fileOfPics)
    .then(data => console.log(data))
    .catch(err => console.error(err))
  }

  return (
    <div className="footer">
      <div className="footerBack"></div>
      <div className="cameraIcon">
        <img className="cameraImg" src={camera} alt="cam" onClick={() => {
          postButton.current.click();
        }}/>
        <input id="input_img" type="file" ref={postButton} onChange={upload}></input>
      </div>
    </div>
  )
}
