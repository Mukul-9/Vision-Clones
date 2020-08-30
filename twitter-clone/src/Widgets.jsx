import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's Happening</h2>
        <TwitterTweetEmbed tweetId={"1294007790357196800"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Holy_Geek_"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={""}
          options={{ text: "I Own This Thing Right Here!", via: "Mukul" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
