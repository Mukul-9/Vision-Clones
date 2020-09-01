import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}
export default App;

//928b6836a751213685e929eae478407f
//https://api.themoviedb.org/3/movie/550?api_key=928b6836a751213685e929eae478407f

//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjhiNjgzNmE3NTEyMTM2ODVlOTI5ZWFlNDc4NDA3ZiIsInN1YiI6IjVmNGNmNGRlMTJhYWJjMDAzNGFiYzA4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kqFzbXnRJaePR68ezfCpnOh9TmuFM23o2Y1JAMRBkTg
