import React from "react";
import { categoryIcons, categoryUrl } from "../../utils/Category";
import { useRouter } from "next/router";

const CategoryCard = ({ icon, title }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/category/${categoryUrl[title]}`)}
      className=" flex cursor-pointer bg-white flex-col items-center justify-center p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
    >
      <div className=" text-5xl">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  );
};

const Categories = () => (
  <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-4">
    <div className="text-center py-4">
      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
        Featured Categories
      </h2>

      <p className="max-w-md mx-auto mt-4 text-gray-500">
        Choose Your Desired Product from Featured Categories!
      </p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {Object.entries(categoryIcons).map(([key, value]) => (
        <CategoryCard key={key} title={key} icon={value} />
      ))}
    </div>
  </div>
);

export default Categories;
