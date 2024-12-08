import React from "react";
import Nav from "./Nav";

const About = () => {
  return (
	<>
    <section
      id="about"
      className="h-screen flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-600 text-white"
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="text-lg mt-4">I am a passionate developer with experience in web development.</p>
      </div>
    </section>
	<section>
		<Nav />
	</section>
	</>
  );
};

export default About;
