import React from 'react';
import S3 from 'react-aws-s3';
import "./footer.css";
import camera from "./camera.png";

export default function Footer() {

  const config = {
    bucketName: 'test',
    dirName: 'test', /* optional */
    region: 'test',
    accessKeyId: 'test',
    secretAccessKey: 'test',
    s3Url: 'test', /* optional */
  }

  const ReactS3Client = new S3(config);

  // upload関数
  async function upload(e) {
    // console.log("eは:", e)
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
        <img className="cameraImg" src={camera} alt="cam" />
        <input id="input_img" type="file" accept="image/*" onChange={upload}></input>
      </div>
    </div>
  )
}
