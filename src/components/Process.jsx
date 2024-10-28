import React, { useState } from "react";
import { motion } from "framer-motion"; // Importing Framer Motion

const Process = () => {
  const [openSection, setOpenSection] = useState(null); // Manages which section is open

  const processes = [
    {
      id: 1,
      title: "Making Mushroom Compost",
      description:
        "Phase I composting is initiated by mixing and wetting the ingredients as they are stacked in a rectangular pile with tight sides and a loose center.",
      image: "src/assets/Images/process/1.webp", // Example image
    },
    {
      id: 2,
      title: "Finishing the Compost",
      description:
        "There are two major purposes to Phase II composting. Pasteurization is necessary to kill any insects, nematodes, pest fungi, or other pests that may be present in the compost.",
      image: "src/assets/Images/process/2.webp",
    },
    {
      id: 3,
      title: "Spawning",
      description:
        "As a mushroom matures, it produces millions of microscopic spores on mushroom gills lining the underside of a mushroom cap. These spores function roughly similar to the seeds of a higher plant. However, growers do not use mushroom spores to 'seed' mushroom compost because they germinate unpredictably and therefore, are not reliable.",
      image: "src/assets/Images/process/3.webp",
    },
    {
      id: 4,
      title: "Casing",
      description:
        "Casing is a top dressing applied to the spawn-run compost on which the mushrooms eventually form. A mixture of peat moss with ground limestone can be used as casing.",
      image: "src/assets/Images/process/4.webp",
    },
    {
      id: 5,
      title: "Pinning",
      description:
        "Mushroom initials develop after rhizomorphs have formed in the casing. The initials are extremely small but can be seen as outgrowths on a rhizomorph.",
      image: "src/assets/Images/process/5.webp",
    },
    {
      id: 6,
      title: "Cropping",
      description:
        "The terms flush, break, or bloom are names given to the repeating 3- to 5-day harvest periods during the cropping cycle; these are followed by a few days when no mushrooms are available to harvest.",
      image: "src/assets/Images/process/6.webp",
    },
  ];

  // Toggle the section, ensuring only one section is open at a time
  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <div className="bg-white pt-16">
      <h2 className="text-primary text-center text-4xl font-bold mb-4">
        The production process
      </h2>
      <p className="text-black text-center mb-8">
        Enviro Mushrooms are grown at the state of the art production
        facilities...
      </p>
      <div className="relative process-container bg-white pt-10 p-10 pb-40">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('src/assets/Images/processback.jpg')",
            backgroundAttachment: "fixed", // Keep background fixed during scroll
            filter: "brightness(0.5)", // Adjust brightness here (0.5 = 50%)
          }}
        />
        <div className="relative z-10">
          {" "}
          {/* Ensure content is above the background */}
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-2 px-4 sm:px-80 ">
            {processes.map((process) => (
              <div
                key={process.id}
                className={`border rounded-lg p-1 shadow transition-colors duration-300 ${
                  openSection === process.id
                    ? "bg-white border-green-500"
                    : "bg-white border-gray-300"
                }`}
              >
                <div className="flex justify-between items-center text-black">
                  <h3 className="text-lg font-semibold">
                    {process.id}. {process.title}
                  </h3>
                  <button
                    className="text-1xl text-black bg-white border-green-600"
                    onClick={() => toggleSection(process.id)}
                  >
                    {openSection === process.id ? "-" : "+"}
                  </button>
                </div>
                {openSection === process.id && (
                  <motion.div
                    className="mt-4 p-1 flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 1.0 }}
                  >
                    <div className="flex-1">
                      <p className="whitespace-pre-line text-black">
                        {process.description}
                      </p>
                    </div>
                    {process.image && (
                      <div className="flex-1">
                        <img
                          src={process.image}
                          alt={process.title}
                          className="w-32 h-auto sm:w-80 rounded"
                        />
                      </div>
                    )}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
