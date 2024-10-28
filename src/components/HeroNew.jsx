import React from "react";
import HeroImg from "../assets/Images/download.png";
import backgroundImage from "../assets/Images/backg2.jpg"; // Use this import correctly
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import { SlideRight } from "../utility/animation";
import Button from "@mui/material/Button";

const HeroNew = () => {
  return (
    <>
      <div
        className="container grid grid-cols-1 md:grid-cols-2 min-h-screen max-w-full relative"
        style={{
          width: "100%", // Full width
          height: "100vh", // Full viewport height
        }}
      >
        {/* Background image with low brightness */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`, // Ensure this URL is correct
            backgroundSize: "cover", // Cover the entire div
            filter: "brightness(0.4)", // Reduce brightness
          }}
        ></div>

        {/* Brand info */}
        <div className="flex flex-col justify-center py-10 px-4 md:px-10 xl:px-20 relative z-10">
          <div className="text-center md:text-left space-y-4 md:space-y-6">
            <motion.p
              variants={SlideRight(0.4)}
              initial="hidden"
              animate="visible"
              className="text-third uppercase font-semibold text-sm md:text-base"
            >
              100% Satisfaction Guarantee
            </motion.p>
            <motion.h1
              variants={SlideRight(0.6)}
              initial="hidden"
              animate="visible"
              className="text-white text-4xl md:text-5xl font-semibold lg:text-6xl leading-tight"
            >
              Our Organic Mushroom <span className="text-white">Farm</span>
            </motion.h1>
            <motion.p
              variants={SlideRight(0.8)}
              initial="hidden"
              animate="visible"
              className="text-secondary text-sm md:text-base"
            >
              Mushrooms are a rich, low-calorie source of fiber, protein, and
              antioxidants.
            </motion.p>
            {/* Button section */}
            <motion.div
              variants={SlideRight(1.0)}
              initial="hidden"
              animate="visible"
              className="text-white flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-6 md:mt-8 items-center"
            >
              <Button variant="contained" color="success">
                Get More
              </Button>

              <Button
                variant="contained"
                className=" flex justify-end items-center gap-2 font-semibold"
              >
                <span className="w-8 h-5 bg-blue-500 rounded-full flex justify-center items-center">
                  <FaPlay className="text-secondary" />
                </span>
                See how it works
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Hero image */}
        <div className="flex justify-center items-center relative z-10">
          <motion.img
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 20, delay: 0.3 }}
            src={HeroImg}
            alt="Hero"
            className="w-[180px] sm:w-[350px] md:w-[450px] xl:w-[600px]"
          />
        </div>
      </div>
    </>
  );
};

export default HeroNew;
