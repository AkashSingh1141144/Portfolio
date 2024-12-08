import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const SocialMediaLinks = () => {
  const links = [
    { href: "https://github.com/AkashSingh1141144", icon: <FaGithub />, label: "GitHub" },
    { href: "https://www.linkedin.com/in/akash-kumar-singh-536406255/", icon: <FaLinkedin />, label: "LinkedIn" },
    { href: "https://www.facebook.com/profile.php?id=100050652782242", icon: <FaFacebook />, label: "Facebook" },
    { href: "https://www.instagram.com/akash__k.singh/", icon: <FaInstagram />, label: "Instagram" },
    { href: "https://x.com/KumarAkash90018", icon: <FaTwitter />, label: "Twitter" },
  ];

  return (
    <div className="flex justify-center space-x-4">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-200 hover:text-blue-500 transition duration-300 text-2xl"
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
