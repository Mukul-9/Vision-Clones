import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";
function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src="https://i.pinimg.com/originals/23/a7/67/23a76716eccb4250384ec9a5056dafd3.jpg"
          title="Entire Home"
          description="Ekdum kadak maal hai baba!!"
        />
        <Card
          src="https://i.pinimg.com/originals/23/a7/67/23a76716eccb4250384ec9a5056dafd3.jpg"
          title="Vella Villa"
          description="Ekdum kadak maal hai baba!!"
        />
        <Card
          src="https://i.pinimg.com/originals/23/a7/67/23a76716eccb4250384ec9a5056dafd3.jpg"
          title="Delux Suite"
          description="Ekdum kadak maal hai baba!!"
        />
      </div>
      <div className="home__section">
        <Card
          src="https://i.pinimg.com/originals/23/a7/67/23a76716eccb4250384ec9a5056dafd3.jpg"
          title="Entire Home"
          description="Ekdum kadak maal hai baba!!"
        />
        <Card
          src="https://i.pinimg.com/originals/23/a7/67/23a76716eccb4250384ec9a5056dafd3.jpg"
          title="Vella Villa"
          description="Ekdum kadak maal hai baba!!"
        />
        <Card
          src="https://i.pinimg.com/originals/23/a7/67/23a76716eccb4250384ec9a5056dafd3.jpg"
          title="Delux Suite"
          description="Ekdum kadak maal hai baba!!"
        />
      </div>
    </div>
  );
}

export default Home;
