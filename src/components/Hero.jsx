import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion'; 
import heroImage from '../assets/Images/hero.webp';

const Hero = () => {
  const canvasRef = useRef(null);

  // Function to draw floating spores on canvas
  const drawSpores = (ctx, width, height) => {
    const sporeCount = 50;
    const spores = [];

    for (let i = 0; i < sporeCount; i++) {
      spores.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 0.7 + 0.2,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }

    function animateSpores() {
      ctx.clearRect(0, 0, width, height);
      spores.forEach(spore => {
        spore.x += spore.speedX;
        spore.y += spore.speedY;

        if (spore.y > height) spore.y = 0; // Reset spore position when it goes off screen
        if (spore.x > width) spore.x = 0;

        ctx.beginPath();
        ctx.arc(spore.x, spore.y, spore.radius, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255, 255, 255, ${spore.opacity})`;
        ctx.fill();
      });
      requestAnimationFrame(animateSpores);
    }
    animateSpores();
  };

  // Add floating spores effect using canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawSpores(ctx, canvas.width, canvas.height);
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawSpores(ctx, canvas.width, canvas.height);
    });
  }, []);

  return (
    <section
      className="relative h-screen bg-center bg-cover hero-bg"
      style={{
        backgroundImage: `url(${heroImage})`, 
      }}
    >
      {/* Canvas for floating spores */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      ></canvas>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        {/* Animate the header with hover effect */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // Slight hover effect
          className="mb-4 text-4xl font-extrabold md:text-6xl"
        >
          Welcome to Our Mushroom Farm
        </motion.h1>

        {/* Animate the subtext with hover effect */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // Slight hover effect
          className="max-w-2xl mb-6 text-lg md:text-2xl"
        >
          Fresh. Organic. Sustainable.
        </motion.p>

        {/* Call-to-Action button with pulsing animation */}
        <motion.a
          href="#about" // A section in your site
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          whileHover={{ scale: 1.1 }} // Hover effect
          className="px-6 py-3 font-bold text-white transition-transform transform bg-green-600 rounded-lg shadow-lg hover:bg-green-700 hover:scale-110"
        >
          Explore More
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
