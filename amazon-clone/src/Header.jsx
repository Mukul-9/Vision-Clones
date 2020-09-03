import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="AMAZON"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {/* 1st */}
      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="span__first">Hello Mukul</span>
            <span>Sign In</span>
          </div>
        </Link>
        {/* 2nd */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="span__first">Returns</span>
            <span>Orders</span>
          </div>
        </Link>
        {/* 3rd */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="span__first">Your</span>
            <span>Prime</span>
          </div>
        </Link>
        {/* 4th */}
        <Link to="/checkout" className="header__link">
          <ShoppingBasketIcon className="header__cart" />
          <span className="basket__count">{basket?.length}</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
