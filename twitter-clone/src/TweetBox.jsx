import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://i.pinimg.com/originals/8e/20/e1/8e20e10ee0a3819332944e5096e3bbb2.jpg" />
          <input
            className="tweetBox__input"
            placeholder="What's Happeing?"
            type="text"
          />
        </div>
        <input
          className="tweetBox__inputImage"
          placeholder="Enter Image URL"
          type="text"
        />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
