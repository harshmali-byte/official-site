import React from "react";

function Services() {
  const services = [
    { title: "Web Development", description: "Building scalable and efficient web applications." },
    { title: "Mobile Development", description: "Creating seamless mobile experiences for Android and iOS." },
    { title: "Cloud Solutions", description: "Offering secure and reliable cloud services." },
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded shadow-lg text-center">
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
