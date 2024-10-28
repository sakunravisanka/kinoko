import React from "react";
import { motion } from "framer-motion";

const YoutubeCollection = () => {
  // Video data with titles and YouTube IDs
  const videos = [
    { id: "80lkOgeBLJE", title: "Chorizo Mushroom Blended Burgers" },
    { id: "mn8xurTlDZ0", title: "Mushrooms 1" },
    { id: "Jp1MWTq8pu4", title: "Mushrooms 2" },
    { id: "-GnmZium698", title: "Mushrooms 3" },
    { id: "aAmN2yllS2o", title: "Mushrooms 4" },
    { id: "mn8xurTlDZ0&t=8s", title: "Mushrooms 5" },
  ];

  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-10 text-black">
        Mushroom Collection
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <motion.div
            key={video.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold text-center py-4 text-gray-700">
              {video.title}
            </h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="rounded-xl"
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${video.id}`} // Using video ID
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div className="" whileHover={{ scale: 1.09 }}>
        <h2 className="mb-8 mt-8 pt-5 text-4xl font-bold text-center text-green-700">
          <span className="text-green-600">About</span> Collection
        </h2>
      </motion.div>
      {/* Farm Description */}
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <p className="mb-4 text-lg text-gray-700">
          Welcome to the Kinoko Mushroom Collection, where nature's umami-rich
          treasures await you. Kinoko, the Japanese word for mushroom,
          encompasses a variety of exquisite fungi celebrated for their unique
          flavors, textures, and culinary versatility.
        </p>
      </div>
    </div>
  );
};

export default YoutubeCollection;
