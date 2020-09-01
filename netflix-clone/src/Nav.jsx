import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <img
        className="nav__logo"
        src="https://imgix.bustle.com/uploads/image/2017/8/29/c8c8077a-10fc-44d5-93f0-da4e592a299e-netflix-logo-print_pms.jpg?w=800&auto=format%2Ccompress&cs=srgb&q=70&fit=crop&crop=faces"
        alt="NETFLIX"
      />

      <img
        className="nav__avatar"
        src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png"
        alt="AVATAR"
      />
    </div>
  );
}

export default Nav;
