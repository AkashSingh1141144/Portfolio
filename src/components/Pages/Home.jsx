import React from "react"
import Typer from "./Typer";
import { Link } from "react-router-dom";
import SocialMediaLinks from "./SocialMediaLinks";
import { send } from "@emailjs/browser";
import { useState } from "react";



const Home = () => {

// TODO:  
// Conatact Section -----

const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
});

const [status, setStatus] = useState("");

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  setStatus("Sending...");

  send(
    "service_f0t5nw3", //  EmailJS Service ID
    "template_pcj719i", //  EmailJS Template ID
    {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    },
    "YtJjYBSjgk5RR-8b9" //  EmailJS Public Key
  )
    .then(() => {
      setStatus("Message sent successfully! ✔️");
      setFormData({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      console.error(error);
      setStatus("Failed to send message. Please try again. ❌");
    });

  }

 // TODO:  Work section --------

const works = [
  {
    id: 1,
    title: "Project 1",
    description: "A brief description of Project 1.",
    image: "https://via.placeholder.com/300", // Replace with your image URL
    link: "https://example.com/project1", // Replace with your link
  },
  {
    id: 2,
    title: "Project 2",
    description: "A brief description of Project 2.",
    image: "https://via.placeholder.com/300",
    link: "https://example.com/project2",
  },
  {
    id: 3,
    title: "Project 3",
    description: "A brief description of Project 3.",
    image: "https://via.placeholder.com/300",
    link: "https://example.com/project3",
  },
  // {
  //   id: 4,
  //   title: "Project 4",
  //   description: "A brief description of Project 4.",
  //   image: "https://via.placeholder.com/300",
  //   link: "https://example.com/project4",
  // },
];

  return (
    <div>

      
<section
  id="home"
  className="flex flex-col lg:flex-row xl:flex-col xl:items-start xl:w-10/12 xl:left-44  lg:items-start relative h-screen w-full bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 mt-8 lg:w-10/12 lg:left-44">
  <div className="rounded-lg p-8 max-w-md text-center drop-shadow-lg border-gray-700 border-l-4 border-r-4 lg:h-44 mb-6 lg:mb-0">
    <h1 className="text-3xl sm:text-4xl font-bold text-white [text-shadow:_0_5px_10px_rgb(0_0_0_/_80%)]">Welcome to My Portfolio</h1>
  </div>
  <div className="flex flex-col items-center lg:items-start lg:top-64 lg:right-28 md:top-52 relative text-center lg:text-left xl:items-center xl:justify-center xl:w-5/6 xl:left-20 xl:top-36 xl:text-lg">
    <h1 className="text-3xl sm:text-4xl font-bold text-white [text-shadow:_0_5px_10px_rgb(0_0_0_/_80%)]">Hi! 😎</h1>
    <Typer />
    <p className="p-5 text-base sm:text-lg text-gray-300 [text-shadow:_0_1px_10px_rgb(0_0_0_/_80%)]">
      A Result-Oriented Web Developer building and managing Websites and Web Applications that lead to the success of the overall product.
    </p>
    <SocialMediaLinks />
  </div>
</section>

<section
  id="about"
  className="flex flex-col lg:flex-col relative h-auto lg:h-screen w-full   bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 mt-16  lg:w-10/12 lg:left-44">
  <div className="rounded-lg p-8 max-w-md text-center drop-shadow-lg border-gray-700 border-l-4 border-r-4 lg:h-44 mb-6 lg:mb-0">
    <h1 className="text-3xl lg:text-4xl font-bold text-white [text-shadow:_0_5px_10px_rgb(0_0_0_/_80%)]">About Me</h1>
    <p className="p-4 text-base lg:text-lg text-gray-300 [text-shadow:_0_1px_10px_rgb(0_0_0_/_80%)]">
      Here you will find more information about me, what I do, and my current
      skills mostly in terms of programming and technology.
    </p>
  </div>

  <div className="flex flex-col lg:flex-row lg:h-96 lg:top-6 lg:right-6  relative lg:w-10/12 lg:left-16 xl:left-20 xl:top-44 xl:rounded-2xl ">
    <div className="flex flex-col mt-8 lg:mt-0 lg:top-64 lg:right-96 glass drop-shadow-lg w-full lg:w-2/3 xl:w-2/3 h-auto lg:h-96 p-4">
      <h1 className="text-3xl lg:text-4xl font-bold mt-4 lg:mt-8 text-white [text-shadow:_0_5px_10px_rgb(0_0_0_/_80%)]">
        Get to know me ! 👉
      </h1>
      <p className="text-base lg:text-lg xl:mt-2 text-gray-200 mt-4 lg:mt-2 p-2 lg:p-6 [text-shadow:_0_5px_10px_rgb(0_0_0_/_80%)]">
        I'm a <span className="text-black font-bold text-lg"> Frontend </span>
        and also A{" "}
        <span className="text-black font-bold text-lg">
          Mern Stack Focused Web Developer
        </span>{" "}
        buiding and managing the Website and Web Applications that leads to the
        success of the overall product.
      </p>
    </div>

    <div className="flex flex-col mt-8 lg:mt-0 lg:top-64 lg:right-10 glass drop-shadow-lg w-full lg:w-2/3 h-auto lg:h-96 p-1 xl:w-5/6">
      <h1 className="flex ml-0 lg:ml-5 text-2xl lg:text-4xl font-bold mt-4 lg:mt-10 text-white [text-shadow:_0_5px_10px_rgb(0_0_0_/_80%)]">
        My Skills.
      </h1>

      <div className="grid grid-cols-2 lg:grid-cols-3 sm:grid-cols-3 xl:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-6 mt-4 lg:mt-2 p-2 lg:p-5">
        <div className="text-sm justify-center items-center pt-6 shadow-md rounded-lg text-center font-semibold text-gray-700 hover:shadow-lg hover:scale-105 transition transform duration-300 glass lg:p-6">
          HTML
        </div>
        <div className="bg-white text-sm justify-center items-center pt-6 shadow-md rounded-lg text-center font-semibold text-gray-700 hover:shadow-lg hover:scale-105 transition transform duration-300 glass lg:p-6">
          CSS
        </div>
        <div className="bg-white text-sm justify-center items-center pt-6 shadow-md rounded-lg text-center font-semibold text-gray-700 hover:shadow-lg hover:scale-105 transition transform duration-300 glass lg:p-4">
          Java Script
        </div>
        <div className="bg-white text-sm p-4 shadow-md rounded-lg text-center font-semibold text-gray-700 hover:shadow-lg hover:scale-105 transition transform duration-300 glass">
          React JS
        </div>
        <div className="bg-white text-sm p-4 shadow-md rounded-lg text-center font-semibold text-gray-700 hover:shadow-lg hover:scale-105 transition transform duration-300 glass">
          Git & GitHub
        </div>
        <div className="bg-white text-sm p-4 shadow-md rounded-lg text-center font-semibold text-gray-700 hover:shadow-lg hover:scale-105 transition transform duration-300 glass">
          Node JS
        </div>
        <div className="bg-white text-sm p-4 shadow-md rounded-lg text-center font-semibold text-gray-700 hover:shadow-lg hover:scale-105 transition transform duration-300 glass">
          Express JS
        </div>
        <div className="bg-white text-sm justify-center items-center pt-6 shadow-md rounded-lg text-center font-semibold text-gray-700 hover:shadow-lg hover:scale-105 transition transform duration-300 glass">
          MySQL
        </div>
        <div className="bg-white text-sm p-4 shadow-md rounded-lg text-center font-semibold text-gray-700 hover:shadow-lg hover:scale-105 transition transform duration-300 glass">
          Mongo DB
        </div>
      </div>
    </div>
  </div>
</section>



<section
  id="work"
  className="flex flex-col  relative h-auto lg:h-screen w-full bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 mt-16  xl:flex-col xl:items-start xl:w-10/12 xl:left-44 lg:w-10/12 lg:left-44">
  <div className="rounded-lg p-8 max-w-md text-center drop-shadow-lg border-gray-700 border-l-4 border-r-4 mb-6 ">
    <h1 className="text-3xl sm:text-4xl font-bold text-white [text-shadow:_0_5px_10px_rgb(0_0_0_/_80%)]">My Work</h1>
    <p className="p-5 text-base sm:text-lg text-gray-300 [text-shadow:_0_1px_10px_rgb(0_0_0_/_80%)]">
      Check out my amazing projects and case studies.
    </p>
  </div>
  <div className="bg-gray-100 mt-5 lg:ml-16 glass border-gray-300 border-l-4 border-r-4 w-10/12 lg:w-5/6 py-10 md:ml-8 ml-3 xl:mt-16 xl:ml-20">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl lg:text-4xl font-bold text-white [text-shadow:_0_5px_10px_rgb(0_0_0_/_80%)] xl:mb-3">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:h-44 lg:mb-10">
        {works.map((work) => (
          <div
            key={work.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition duration-300 lg:text-sm">
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-48 lg:h-10 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg sm:text-xl font-semibold">{work.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 mt-2">{work.description}</p>
              <a
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 mt-2 inline-block">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


<section
  id="contact"
  className="flex flex-col gap-10 relative h-auto lg:h-screen w-full bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 mt-16  xl:items-start xl:w-10/12 xl:left-44 xl:flex-col lg:w-10/12 lg:left-44">
  <div className="rounded-lg p-8 max-w-md text-center drop-shadow-lg border-gray-700 border-l-4 border-r-4 mb-6 lg:h-44">
    <h1 className="text-3xl sm:text-4xl font-bold text-white [text-shadow:_0_5px_10px_rgb(0_0_0_/_80%)]">Contact Me</h1>
    <p className="p-5 text-base sm:text-lg text-gray-300 [text-shadow:_0_1px_10px_rgb(0_0_0_/_80%)]">
      Let's work together! Reach out to me for collaborations.
    </p>
  </div>
  <div className="w-10/12 lg:w-5/6 p-4 border ml-3 md:ml-8  glass lg:ml-16 xl:ml-20">
    <h2 className="text-3xl pb-4 lg:text-3xl sm:text-4xl font-bold text-white [text-shadow:_0_5px_10px_rgb(0_0_0_/_80%)]">Contact Us</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full  p-2 border border-gray-500 rounded"
          required
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-500 rounded"
          required
        />
      </div>
      <div>
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border border-gray-500 rounded"
          rows="4"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Send Message
      </button>
    </form>
    <p className="text-center mt-4 text-sm text-gray-700">{status}</p>
  </div>
</section>

    </div>
  );
};

export default Home;
