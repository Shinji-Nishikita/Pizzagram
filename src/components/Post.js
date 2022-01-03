import React, { useState, useEffect, useRef } from 'react';
import "./post.css";
import avatar from "./avatar.png";
import LikeButton from "./Likebutton";

export default function Post({ photo }) {

  const [comments, setComments] = useState([]);
  const [commentFlag, setCommentFlag] = useState(false);
  const inputEl = useRef(null);
  // console.log("newCommentは:", newComment)

  useEffect(() => {

    async function getComment() {
      // console.log("rendering!!!");
      const data = await fetch(`/comments/${photo.id}`)
      const parse = await data.json();
      setComments(parse)
    }

    if (photo.id) getComment();

  }, [photo.id, commentFlag])
  //===> photo.idがないとエラー出る

  async function postComment() {
    // console.log("inputEl.current.value is:", inputEl.current.value);//コメントフォームに入力した文字
    // console.log("photo.id is:", photo.id);//コメントした写真のID
    const data = { user: "shinji_n", text: inputEl.current.value, post_id: photo.id };

    // コメントをpostする
    await fetch("/comments", {
      method: "POST",
      headers: {
      "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })

    // useEffect内のgetComment関数発動トリガー
    setCommentFlag(!commentFlag)

    // コメント投稿後、入力フォームをクリアにする
    inputEl.current.value = ""
    // console.log("rendering!!!");
  }

  return (
    <div className="container">
      <div className="postHead">
        <img className="avatar" src={avatar} alt="avatar"/>
        <div className="text-for-avatar">{photo.user}</div>
      </div>
      <div>
        <img className="photo" src={photo.photo_url} alt={photo.id}/>
      </div>
      <div>
      <LikeButton />
      </div>
      {comments.map((item) => {
        return (
          <div className="comments" key={item.id}>
            <div className="commentUser">{item.user}</div>
            <div className="commentText">{item.text}</div>
          </div>
        )
      })}
          <div className="addComment" >
            <input
              className="inputText"
              type="text"
              placeholder={"Add a comment"}
              ref={inputEl}
            />
            <button className="button" onClick={postComment}>send</button>
          </div>
    </div>
  );
};
