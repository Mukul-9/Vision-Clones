import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_p._CB407694171_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="1"
          title="Origin"
          price={991}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/913hhYLKs3L.jpg"
        />

        <Product
          id="2"
          title="Origin"
          price={992}
          rating={1}
          image="https://images-na.ssl-images-amazon.com/images/I/913hhYLKs3L.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="3"
          title="Origin"
          price={993}
          rating={2}
          image="https://images-na.ssl-images-amazon.com/images/I/913hhYLKs3L.jpg"
        />

        <Product
          id="4"
          title="Origin"
          price={994}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/913hhYLKs3L.jpg"
        />

        <Product
          id="5"
          title="Origin"
          price={995}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/913hhYLKs3L.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="6"
          title="Origin"
          price={996}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/913hhYLKs3L.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
