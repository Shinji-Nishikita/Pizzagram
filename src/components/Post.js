import React from 'react';
import "./post.css";
import avatar from "./avatar.png";

export default function Post({ photo }) {
  return (
    <div className="container">
      <div className="postHead">
        <img className="avatar" src={avatar} alt="avatar"/>
        <div className="text-for-avatar">{photo.user}</div>
      </div>
      <div>
        <img className="photo" src={photo.photo_url} alt={photo.id}/>
      </div>
      <div className="comments">comments</div>
    </div>
  );
};
