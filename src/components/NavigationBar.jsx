import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link"; // For smooth scrolling
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation"; // Import the SlideUp animation

function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.nav
      className="bg-gray-200 shadow shadow-gray-300"
      initial="initial"
      animate="animate"
      variants={SlideUp(0.4)} // Apply SlideUp with a 0.4s delay
    >
      <div className="container mx-auto py-3 flex justify-between items-center">
        {/* Logo and name */}
        <div className="flex items-center space-x-3 text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-15 w-8"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 2C7.5 2 3.5 6 3 10h18c-.5-4-4.5-8-9-8zM7 10v2h10v-2H7zm0 2v4h10v-4H7zm2 4v3c0 .5-.5 1-1 1s-1-.5-1-1v-3h2zm6 0v3c0 .5-.5 1-1 1s-1-.5-1-1v-3h2z"
            />
          </svg>
          <h1 className="text-2xl font-serif">Mushroom</h1>
        </div>

        {/* Hamburger menu for mobile view */}
        <button
          className="md:hidden flex items-center  ml-auto"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Desktop Navigation Tabs */}
        <div className="hidden md:flex space-x-10 text-primary">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#products">Products</NavLink>
          <NavLink href="#video">Video</NavLink>
          <NavLink href="#about">About Us</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>

        {/* Social Icons in the right corner */}
        <div className="hidden md:flex items-center space-x-4">
          <SocialIcon
            href="https://www.facebook.com"
            svgClass="h-4 w-4 fill-[#1877f2]"
            svgPath={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M80 299.3V512H196V299.3h70.3c2.3-24.4 7.1-47.8 7.1-47.8H196v-38.8c0-12.1 4-22.6 10.6-28.6c9.1-7.1 23.2-5.8 40.6-5.8c10.2 0 18.6.8 26.1 1.3v-50.9c-7-1-17-2.7-33.5-2.7c-29.8 0-49.8 14.1-60.7 28.5c-10.6 14.1-12.7 30.3-12.7 37.4V251H80v47.8h70.3z" />
              </svg>
            }
          />
          <SocialIcon
            href="https://www.youtube.com"
            svgClass="h-4 w-4 fill-[#ff0000]"
            svgPath={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M549.655 124.083C534.443 70.59 492.385 32 438.94 32H137.06C83.615 32 41.557 70.59 26.345 124.083 8.571 184.507 8.571 256 26.345 316.417 41.557 369.91 83.615 408.5 137.06 408.5h301.88c53.445 0 95.503-38.59 110.715-92.083C567.429 256 567.429 184.507 549.655 124.083zM232 336.465V175.535l142.132 80.465L232 336.465z" />
              </svg>
            }
          />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden flex flex-col items-center bg-gray-100 shadow-lg py-2 space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#products">Products</NavLink>
          <NavLink href="#about">About Us</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </motion.div>
      )}
    </motion.nav>
  );
}

// NavLink component for navigation links
function NavLink({ href, children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="flex items-center space-x-2"
    >
      <Link to={href} className="flex items-center space-x-2 text-black">
        <span>{children}</span>
      </Link>
    </motion.div>
  );
}

// SocialIcon component for social media icons
function SocialIcon({ href, svgClass, svgPath }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <span className={svgClass}>{svgPath}</span>
    </a>
  );
}

export default NavigationBar;
