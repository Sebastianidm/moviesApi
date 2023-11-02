// Home.js
import React from "react";
import MainComponent from "../components/MainComponent";
import MovieCarousel from "../components/MovieCarousel";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <MainComponent />
      <MovieCarousel />
    </div>
  );
};

export default Home;
