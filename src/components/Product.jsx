import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  sliderAnimations,
  sliderContainer,
  fadeInOut,
} from "../utility/animation";

const products = [
  {
    id: 1,
    name: "Shiitake-Oyster-Lion's Mane Table Top Farm Set",
    image: "src/assets/Images/product/1.jpg", // Replace with actual image path or URL
  },
  {
    id: 2,
    name: "Mixed Mushroom 8-Block Outdoor Set",
    image: "src/assets/Images/product/2.jpg", // Replace with actual image path or URL
  },
  {
    id: 3,
    name: "Ready-to-fruit Pink Oyster mushroom kit,",
    image: "src/assets/Images/product/3.jpg", // Replace with actual image path or URL
  },
  {
    id: 4,
    name: "Fusion Mushroom Tincture - 4 oz",
    image: "src/assets/Images/product/5.jpg", // Replace with actual image path or URL
  },
  {
    id: 5,
    name: "Gift Products Each Mushroom",
    image: "src/assets/Images/product/4.jpg", // Replace with actual image path or URL
  },
];

const Product = () => {
  const sliderRef = useRef(null);

  return (
    <div
      id="products"
      className="product-slider p-4 pt-8 pb-10 relative bg-white"
    >
      <h2 className="text-primary text-center text-3xl font-bold mb-6">
        Our Product Organic Mushrooms
      </h2>

      <motion.div
        className="slider-container w-full flex justify-center items-center gap-6 overflow-x pb-4 scroll-smooth"
        ref={sliderRef}
        drag={sliderContainer.drag}
        dragConstraints={sliderContainer.dragConstraints}
        transition={sliderContainer.transition}
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="product-item bg-white p-4 shadow-md rounded-lg"
            whileHover={sliderAnimations.productItem.whileHover}
            whileTap={sliderAnimations.productItem.whileTap}
            initial={fadeInOut.initial}
            animate={fadeInOut.animate}
            exit={fadeInOut.exit}
            transition={fadeInOut.transition}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-50 h-auto rounded-md"
            />
            <h3 className="text-center mt-4 text-lg font-semibold text-gray-700">
              {product.name}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Product;
