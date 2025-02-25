import { useState } from "react";
import { Button, Input, Typography, message } from "antd";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      // Mock submission process
      message.success("Your message has been sent successfully!");
      console.log("Form Data Submitted: ", formData);

      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } else {
      message.error("Please fill in all the fields.");
    }
  };

  return (
    <div className="container max-w-lg mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
      <Typography.Title level={3} className="text-center text-gray-700">
        Contact Us
      </Typography.Title>
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-1"
          />
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1"
          />
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <Input.TextArea
            id="message"
            name="message"
            placeholder="Enter your message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full mt-1"
          />
        </div>

        {/* Submit Button */}
        <Button
          type="primary"
          onClick={handleSubmit}
          className="w-full bg-[#8b2deb] text-white hover:bg-[#7a23cb] px-4 py-2 rounded-md"
        >
          Submit
        </Button>
      </form>

      <Typography.Paragraph className="text-center text-gray-600 mt-4">
        Alternatively, you can email us directly at: <br />
        <a
          href="mailto:khavs0007@gmail.com"
          className="text-blue-500 hover:underline"
        >
          ayam.khavesinfo@gmail.com
        </a>
      </Typography.Paragraph>
    </div>
  );
};

export default Contact;
