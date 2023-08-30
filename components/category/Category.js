/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BsFillCpuFill,
  BsFillDatabaseFill,
  BsMotherboard,
  BsPower
} from "react-icons/bs";
import { CgSmartphoneRam } from "react-icons/cg";
import { PiMonitor } from "react-icons/pi";
import { GiComputerFan } from "react-icons/gi";

const CategoryCard = ({ icon, title }) => (
  <div className=" flex bg-white flex-col items-center justify-center p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
    <div className=" text-5xl">{icon}</div>
    <h3 className="text-xl font-semibold">{title}</h3>
  </div>
);

const Categories = () => {
  const categories = [
    { title: "Motherboard", icon: <BsMotherboard className="text-purple-600"/> },
    { title: "Power Supply Unit", icon: <BsPower className="text-purple-600"/> },
    { title: "RAM", icon: <CgSmartphoneRam className="text-purple-600"/> },
    { title: "Storage", icon: <BsFillDatabaseFill className="text-purple-600"/> },
    { title: "Monitor", icon: <PiMonitor className="text-purple-600"/> },
    { title: "CPU", icon: <BsFillCpuFill className="text-purple-600"/> },
    { title: "Others", icon: <GiComputerFan className="text-purple-600"/> }
  ];

  return (
    <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
      <div className="text-center py-4">
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
          Featured Categories
        </h2>

        <p className="max-w-md mx-auto mt-4 text-gray-500">
          Choose Your Desired Product from Featured Categories!
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            title={category.title}
            icon={category.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
