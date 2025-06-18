import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaWhatsapp, FaPhone, FaVoicemail, FaPhoneAlt, FaMailBulk, FaMailchimp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">Sunil G</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Professional Projects", id: "professional-projects" },
            { name: "Personal Projects", id: "personal-projects" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaPhoneAlt className="w-4 h-4"/>, link: "tel:+918277434979" },
            { icon: <FaTwitter />, link: "https://twitter.com/gsunil1999" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/gsunil99" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/gsunil.99" },
            { icon: <FaWhatsapp />, link: "https://wa.me/+918277434979" },
            { icon: <MdOutlineEmail />, link: "mailto:gsunil99920@gmail.com" },
            
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {React.cloneElement(item.icon, { className: "w-4 h-4 lg:w-8 lg:h-8" })}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Sunil G. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
