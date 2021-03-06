import React, { useRef } from 'react';
import "./footer.css";
import camera from "./camera.png";
require("dotenv").config();

export default function Footer({postFlag, setPostFlag}) {

  const postButton = useRef(null);

  // upload関数
  async function upload(e) {
    if (!e.target.files.length) return;
    const fileOfPics = e.target.files[0]

    // GCSへimageデータをアップロード
    await fetch(
      `https://storage.googleapis.com/upload/storage/v1/b/pizzagram-app/o?uploadType=media&name=${fileOfPics.name}`,
      {
        method: "POST",
        body: fileOfPics,
      }
    );

    // postgreSQLへpostするimageデータURL情報
    const imageDataUrl = await fetch(
      `https://storage.googleapis.com/storage/v1/b/pizzagram-app/o/${fileOfPics.name}?fields=mediaLink`
    );
    const parsedImageDataUrl = await imageDataUrl.json();
    const photoUrl = parsedImageDataUrl.mediaLink;

    // postsテーブルへpost
    const data = { user: "shinji_n", photo_url: photoUrl };
    await fetch("/posts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // App.js内のuseEffect内のfetchData関数発動トリガー
    setPostFlag(!postFlag)

    // 新規投稿後、inputフォームをクリアにする
    postButton.current.value = ""
  }

  return (
    <div className="footer">
      <div className="footerBack"></div>
      <div className="cameraIcon">
        <img className="cameraImg" src={camera} alt="cam" onClick={() => {
          postButton.current.click()
        }}/>
        <input id="input_img" type="file" ref={postButton} onChange={upload}></input>
      </div>
    </div>
  )
}
