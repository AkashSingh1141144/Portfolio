import React, { useState, useEffect } from "react";
import logo from "../../assets/images/Logo.jpg";

const Nav = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Handle scroll to highlight the active section
  const handleScroll = () => {
    const sections = ["home", "about", "work", "contact"];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed z-50  sm:w-auto lg:top-16 lg:left-10 h-auto sm:h-5/6 lg:w-32 bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 shadow-md border-gray-700 border-t-4 border-b-4 rounded-lg w-10/12">
      {/* Toggle Button for Small Screens */}
      <div className="flex justify-between items-center px-4 py-2 sm:hidden">
        <div className="flex items-center">
          <img
            src={logo}
            alt="My Logo"
            className="w-8 h-8 rounded-full object-cover shadow-md border-2 border-gray-300"
          />
          <span className="ml-3 text-lg font-bold text-white">
            Akash Singh
          </span>
        </div>
        <button
          className="text-white text-2xl focus:outline-none"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          ☰
        </button>
      </div>

      {/* Navigation Menu */}
      <div
        className={`${
          isNavOpen ? "block" : "hidden"
        } sm:flex sm:flex-col items-center justify-between h-full px-4 py-4 lg:py-16 space-y-8 lg:space-y-0`}
      >
        {/* Logo */}
        <div className="hidden sm:flex flex-col items-center rounded-lg p-2">
          <img
            src={logo}
            alt="My Logo"
            className="w-12 h-12 rounded-full object-cover shadow-md border-2 border-gray-300"
          />
          <span className="text-center mt-3 text-lg font-bold text-white [text-shadow:_0_5px_10px_rgb(0_0_0_/_80%)]">
            Akash Singh
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col gap-4">
          {["home", "about", "work", "contact"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`text-lg font-semibold ${
                  activeSection === section
                    ? "text-gray-400"
                    : "text-white [text-shadow:_0_5px_10px_rgb(0_0_0_/_80%)]"
                } hover:text-white`}
                onClick={() => setIsNavOpen(false)} // Close menu on link click
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
