import React from "react";
import HeroSection from "../components/HeroSection";

function Home() {
  return (
    <div>
      <HeroSection />
      <section className="py-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">About Khaves Technologies Infosoft</h2>
          <p className="text-lg text-gray-700">
            Khaves Technologies Infosoft is a leading software company dedicated to delivering
            innovative solutions across various industries. We specialize in cutting-edge
            technologies, software development, AI-driven automation, and enterprise solutions
            to help businesses scale and succeed in the digital era.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
