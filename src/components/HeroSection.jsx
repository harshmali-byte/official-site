import React from "react";
import logo from "../assets/logo.png";
import banner from "../assets/banner.png";

function HeroSection() {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-20 text-center relative"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        <img
          src={logo}
          alt="Khaves Logo"
          className="mx-auto w-48 md:w-64 drop-shadow-lg"
        />
        <h1 className="text-4xl font-bold">Welcome to Khaves Technologies</h1>
        <p className="text-xl">
          Delivering innovative software solutions to businesses worldwide.
        </p>
      </div>
      
    </section>
  );
}

export default HeroSection;
