import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 Stays . 26th August to 30th August . 2 Guests</p>
        <h1>Stay Nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More Filters</Button>
      </div>
      <SearchResult
        img="https://i.pinimg.com/originals/23/a7/67/23a76716eccb4250384ec9a5056dafd3.jpg"
        location="Private Room In The Center Of Mumbai"
        title="The Inferno Homes"
        description="1 guest . 1 bedroom . 1 bed . 1 bathroom . wifi"
        star={4.73}
        price="Rs.1490/ night"
        total="Rs. 3000 total"
      />

      <SearchResult
        img="https://i.pinimg.com/originals/23/a7/67/23a76716eccb4250384ec9a5056dafd3.jpg"
        location="Private Room In The Center Of Mumbai"
        title="The Inferno Homes"
        description="1 guest . 1 bedroom . 1 bed . 1 bathroom . wifi"
        star={4.73}
        price="Rs.1490/ night"
        total="Rs. 3000 total"
      />

      <SearchResult
        img="https://i.pinimg.com/originals/23/a7/67/23a76716eccb4250384ec9a5056dafd3.jpg"
        location="Private Room In The Center Of Mumbai"
        title="The Inferno Homes"
        description="1 guest . 1 bedroom . 1 bed . 1 bathroom . wifi"
        star={4.73}
        price="Rs.1490/ night"
        total="Rs. 3000 total"
      />

      <SearchResult
        img="https://i.pinimg.com/originals/23/a7/67/23a76716eccb4250384ec9a5056dafd3.jpg"
        location="Private Room In The Center Of Mumbai"
        title="The Inferno Homes"
        description="1 guest . 1 bedroom . 1 bed . 1 bathroom . wifi"
        star={4.73}
        price="Rs.1490/ night"
        total="Rs. 3000 total"
      />

      <SearchResult
        img="https://i.pinimg.com/originals/23/a7/67/23a76716eccb4250384ec9a5056dafd3.jpg"
        location="Private Room In The Center Of Mumbai"
        title="The Inferno Homes"
        description="1 guest . 1 bedroom . 1 bed . 1 bathroom . wifi"
        star={4.73}
        price="Rs.1490/ night"
        total="Rs. 3000 total"
      />

      <SearchResult
        img="https://i.pinimg.com/originals/23/a7/67/23a76716eccb4250384ec9a5056dafd3.jpg"
        location="Private Room In The Center Of Mumbai"
        title="The Inferno Homes"
        description="1 guest . 1 bedroom . 1 bed . 1 bathroom . wifi"
        star={4.73}
        price="Rs.1490/ night"
        total="Rs. 3000 total"
      />
    </div>
  );
}

export default SearchPage;
