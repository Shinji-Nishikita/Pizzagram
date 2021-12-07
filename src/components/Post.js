import React from 'react';
import "./post.css";
import avatar from "./avatar.png";
import { useState, useEffect } from "react";

export default function Post({ photo }) {
  const [comments, setComments] = useState([]);
  // console.log("photoデータは:", photo)
  useEffect(() => {
    async function getComment() {
      const data = await fetch(`/comments/${photo.id}`)
      const parse = await data.json();
      console.log("parseは:", parse)
      setComments(parse)
    }
    getComment()
  }, [photo.id])

  return (
    <div className="container">
      <div className="postHead">
        <img className="avatar" src={avatar} alt="avatar"/>
        <div className="text-for-avatar">{photo.user}</div>
      </div>
      <div>
        <img className="photo" src={photo.photo_url} alt={photo.id}/>
      </div>
      {comments.map((item) => {
        return (
          <div className="comments" key={item.id}>
            <div className="commentUser">{item.user}</div>
            <div className="commentText">{item.text}</div>
          </div>
        )
      })}
      {comments.map((item) => {
        return (
          <div className="addComment">
            <input
              className="inputText"
              type="text"
              placeholder={`${item.user}としてコメントを追加する`}
            />
            <button className="button">send</button>
          </div>
        )
      })}
    </div>
  );
};
