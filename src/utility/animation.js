// create Utility Folder for this

export const SlideRight = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: -100, // Start from left
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5, // Reduce duration for quicker animations
        delay: delay,
      },
    },
  };
};

export const SlideLeft = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: 100, // Start from right
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5, // Reduce duration for quicker animations
        delay: delay,
      },
    },
  };
};

export const SlideUp = (delay = 0) => ({
  initial: {
    y: "-20%", // Only slightly out of view
    opacity: 0,
  },
  animate: {
    y: "0%", // Moves it back to its normal position
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: delay,
      ease: "easeInOut",
    },
  },
});

// animation.js
export const sliderAnimations = {
  // Animation for each product item when hovered or clicked
  productItem: {
    whileHover: { scale: 1.1 }, // Scale up the item when hovered
    whileTap: { scale: 0.9 }, // Scale down slightly when tapped/clicked
  },
};

export const buttonAnimations = {
  // Button hover effect for < and > buttons
  leftButton: {
    initial: { x: 0 },
    whileHover: { x: -10 }, // Moves left button 10px to the left when hovered
    transition: { type: "spring", stiffness: 300 }, // Smooth spring animation
  },
  rightButton: {
    initial: { x: 0 },
    whileHover: { x: 10 }, // Moves right button 10px to the right when hovered
    transition: { type: "spring", stiffness: 300 }, // Smooth spring animation
  },
};

export const sliderContainer = {
  // Slider container drag constraints and smooth dragging animation
  drag: "x",
  dragConstraints: { left: -500, right: 0 }, // Adjust these values as needed
  transition: { duration: 0.5 }, // Smooth transition for dragging
};

export const fadeInOut = {
  // General fade in and fade out animations
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 }, // Fast fade in/out
};
