import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";
import firebase from "firebase";

function TweetBox() {
  const [tweetMessage, settweetMessage] = useState("");
  const [tweetImage, settweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Mukul",
      username: "Holy_Geek_",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://i.pinimg.com/originals/8e/20/e1/8e20e10ee0a3819332944e5096e3bbb2.jpg",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    settweetImage("");
    settweetMessage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://i.pinimg.com/originals/8e/20/e1/8e20e10ee0a3819332944e5096e3bbb2.jpg" />
          <input
            value={tweetMessage}
            onChange={(e) => settweetMessage(e.target.value)}
            className="tweetBox__input"
            placeholder="What's Happeing?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => settweetImage(e.target.value)}
          className="tweetBox__inputImage"
          placeholder="Enter Image URL"
          type="text"
        />
        <Button
          type="submit"
          onClick={sendTweet}
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
