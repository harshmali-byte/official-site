import React, { useState } from "react";

const Careers = () => {
  // Job listings data (dynamic content)
  const [jobs] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      location: "Remote",
      type: "Full-time",
      description:
        "Design and implement stunning user interfaces using React.js and Tailwind CSS. Collaborate with designers and back-end developers to deliver seamless user experiences.",
    },
    {
      id: 2,
      title: "Backend Developer",
      location: "Remote",
      type: "Full-time",
      description:
        "Develop scalable APIs and manage database systems. Experience with Node.js, MongoDB, and SQL is essential.",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      location: "Remote",
      type: "Part-time",
      description:
        "Create user-centered designs by understanding business requirements and customer feedback. Expertise in Figma or Adobe XD is required.",
    },
    {
      id: 4,
      title: "Project Manager",
      location: "Remote",
      type: "Contract",
      description:
        "Manage multiple projects, ensure timely delivery, and coordinate between teams. Prior experience in Agile methodologies is preferred.",
    },
  ]);

  return (
    <section className="py-16 bg-gray-50">
      {/* Header Section */}
      <div className="container mx-auto px-6 lg:px-16 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
          Join Our Team
        </h1>
        <p className="text-lg lg:text-xl text-gray-600">
          We are always on the lookout for talented individuals to join our growing team. Explore our open positions and become part of a company that values innovation, creativity, and collaboration.
        </p>
      </div>

      {/* Job Listings Section */}
      <div className="container mx-auto px-6 lg:px-16 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {job.title}
              </h3>
              <p className="text-gray-600">
                <strong>Location:</strong> {job.location}
              </p>
              <p className="text-gray-600">
                <strong>Type:</strong> {job.type}
              </p>
              <p className="text-gray-600 mt-4">{job.description}</p>
              <button className="mt-4  text-gray py-2 px-4 rounded-lg hover:bg-blue-700 transition"
>
                Send Your CV  at hr.khavestechnologies@gmail.com  
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Why Join Us Section */}
      <div className="container mx-auto px-6 lg:px-16 mt-16 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
          Why Work With Us?
        </h2>
        <p className="text-lg lg:text-xl text-gray-600 mb-12">
          We value our employees and create an environment that fosters growth, creativity, and innovation. Here’s why you should join us:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Competitive Pay
            </h3>
            <p className="text-gray-600">
              We offer industry-leading compensation and benefits.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Flexible Work Hours
            </h3>
            <p className="text-gray-600">
              Enjoy a healthy work-life balance with flexible schedules.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Growth Opportunities
            </h3>
            <p className="text-gray-600">
              Unlock your potential with learning and career development.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 py-10 text-white text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Ready to Take the Next Step?
        </h2>
        <p className="text-lg lg:text-xl mb-6">
          Join us in creating solutions that make a difference.
        </p>
        <button className="bg-white text-blue-600 py-3 px-6 rounded-lg hover:bg-gray-100 transition">
          Drop Your CV at ayam.khavesinfo@khaves.in
        </button>
      </div>
    </section>
  );
};

export default Careers;
