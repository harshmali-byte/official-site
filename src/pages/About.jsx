import React from "react";
import image from "../assets/khavespic.png";

function About() {
  return (
    <section className="py-16 bg-gray-50 relative">
      {/* Background overlay with opacity */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-600 opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        {/* Section Heading */}
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center text-gray-800 mb-8">
          About Khaves Technologies Infosoft
        </h2>

        {/* Company Overview */}
        <p className="text-center text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
          Khaves Technologies Infosoft is a leading software development company
          headquartered in Bhopal, India. We specialize in creating innovative
          solutions for businesses worldwide, focusing on AI-driven automation,
          enterprise software, and cutting-edge technology solutions.
        </p>

        {/* Vision & Mission Section */}
        <h2 className="text-4xl lg:text-5xl font-extrabold text-center text-gray-800 mb-8">
          Our Vision & Mission
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To lead the global tech landscape by creating revolutionary
              solutions that redefine innovation and pave the way for a smarter
              future.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600">
              Empower businesses with tailor-made software, enhance operational
              efficiency, and build a sustainable ecosystem for technological
              growth.
            </p>
          </div>
        </div>

        {/* Technologies We Use */}
        <div className="mt-12 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Technologies We Specialize In
          </h3>
          <p className="text-lg text-gray-600">
            Our expertise includes MERN Stack (MongoDB, Express.js, React.js,
            Node.js), SQL Databases, iOS Development, and AI Training. We
            harness these technologies to build scalable and high-performance
            applications.
          </p>
        </div>

        {/* Headquarters Section */}
        <div className="mt-12 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Our Headquarters
          </h3>
          <p className="text-lg text-gray-600">
            We are based in Bhopal, India, where our talented team of developers
            and innovators work tirelessly to deliver high-quality software
            solutions to our global clientele.
          </p>
        </div>

        {/* Decorative Image */}
        <div className="mt-12">
          <img
            src={image}
            alt="Tech Innovation"
            className="rounded-lg shadow-lg w-full opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
