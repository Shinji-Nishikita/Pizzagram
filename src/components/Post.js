import React from 'react';
import "./post.css";
import avatar from "./avatar.png";
import { useState, useEffect } from "react";

export default function Post({ photo }) {

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  console.log("newCommentは:", newComment)

  useEffect(() => {

    async function getComment() {
      const data = await fetch(`/comments/${photo.id}`)
      const parse = await data.json();
      setComments(parse)
    }

    if (photo.id) getComment();

  }, [photo.id, newComment])
  //===> photo.idがないとエラー出る

  async function postComment() {

    if (newComment === "") return;

    const data = { user: "shinji_n", text: newComment, post_id: photo.id };

    // コメントをpostする
    await fetch("/comments", {
      method: "POST",
      headers: {
      "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })

    setNewComment("")
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
              value={newComment}
              onChange={e => {
                setNewComment(e.target.value)
              }}
            />
            <button className="button" onClick={postComment}>send</button>
          </div>
    </div>
  );
};
