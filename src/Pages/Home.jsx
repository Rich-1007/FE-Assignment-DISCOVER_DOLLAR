import React from "react";
import Categories from "../Components/Categories";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Slider from "../Components/Slider ";

const Home = () => {
  return (
    <>
      <div className="bg-gray-200 h-screen w-screen">

        {/* <Navbar />
        <Categories />
        <Slider /> */}

        <Hero />
      </div>
    </>
  );
};

export default Home;
