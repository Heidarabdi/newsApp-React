import React, { useEffect } from "react";
import Hero from "../components/Hero";
import CategoryNews from "../components/CategoryNews";
import Signup from "../components/Signup";

function Home() {

  return (
    <main className="bg-white h-fit space-y-12 flex flex-col items-center">
      <Hero  />
      <div className="border border-[#94929254] text-center blur-5 w-[95%]	"></div>
      <CategoryNews category={"technology"} />
      <CategoryNews category={"business"} />
      <div className="border border-b-2 mt-2 border-[#4a52636c]"></div>
        <Signup />
        <div className="border border-b-2 mt-2 border-[#5c60696c]"></div>
      <CategoryNews category={"entertainment"} />
      <CategoryNews category={"sports"} />
      <CategoryNews category={"science"} />

     
    </main>
  );
}

export default Home;
