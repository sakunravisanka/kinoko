import React from "react";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
const VideoD = () => {
  return (
    <div
      id="video"
      className="flex flex-col md:flex-row  justify-center p-40 bg-white"
    >
      {/* Left Text Section */}
      <motion.div
        className="md:w-1/2 text-left space-y-4"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-xl text-primary font-bold uppercase">
          Video explain
        </h2>
        <h1 className="text-4xl font-bold text-gray-800">Join the Movement</h1>
        <p className="text-lg text-gray-600">
          The Blend™ adds mushrooms to meat. Mushrooms add flavor, veggies, and
          an earth-friendly ingredient to the plate.
        </p>
        <Button variant="contained" color="success">
          Get More
        </Button>
      </motion.div>

      {/* Right Video Section */}
      <motion.div
        className="md:w-4/5 md:h-4/5 mt-14 md:mt-6 md:ml-15" // Adjusted to 1/2 for larger width
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="">
          <iframe
            className="rounded-3xl"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/80lkOgeBLJE" // Corrected src URL
            title="Chorizo Mushroom Blended Burgers"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
};

export default VideoD;
