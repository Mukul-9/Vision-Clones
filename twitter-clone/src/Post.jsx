import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlinedIcon from "@material-ui/icons/ChatBubbleOutlined";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://i.pinimg.com/originals/8e/20/e1/8e20e10ee0a3819332944e5096e3bbb2.jpg" />
      </div>

      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Mukul
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge" />
                @Holy_Geek_
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>Let's Go Guys! This Is My Fuckin' Twitter!</p>
          </div>
        </div>
        <img
          src="https://i.pinimg.com/originals/8e/20/e1/8e20e10ee0a3819332944e5096e3bbb2.jpg"
          alt=""
        />

        <div className="post__footer">
          <ChatBubbleOutlinedIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
