/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CategoryCard = ({ imageSrc, title }) => (
  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
    {/* <img src={imageSrc} alt={title} className="w-20 h-20 mx-auto mb-4" /> */}
    <FontAwesomeIcon icon="fa-regular fa-microchip" style={{color: "#5a2e66",}} />
    <h3 className="text-xl font-semibold text-center">{title}</h3>
  </div>
);

const Categories = () => {
  const categories = [
    { title: "Motherboard", imageSrc: "/images/cpu.png" },
    { title: "Power Supply Unit", imageSrc: "/images/gpu.png" },
    { title: "RAM", imageSrc: "/images/ram.png" },
    { title: "Storage", imageSrc: "/images/storage.png" },
    { title: "Monitor", imageSrc: "/images/storage.png" },
    { title: "GPU", imageSrc: "/images/storage.png" },
    { title: "Mouse", imageSrc: "/images/storage.png" },
    { title: "Keyboard", imageSrc: "/images/storage.png" }
  ];

  return (
    <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
      <div class="text-center py-4">
        <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
          Featured Categories
        </h2>

        <p class="max-w-md mx-auto mt-4 text-gray-500">
          Choose Your Desired Product from Featured Categories!
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            title={category.title}
            imageSrc={category.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
