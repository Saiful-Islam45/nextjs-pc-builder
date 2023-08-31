/* eslint-disable @next/next/no-img-element */
import { data } from "@/data/data";
import React from "react";
import Link from "next/link";
import Rating from "../../src/ui/Rating";

const Products = () => {
  const products = data;
  return (
    <div>
      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Feature Products
            </h2>
            <p className="max-w-md mx-auto mt-4 text-gray-500">
              Get Your Desired Product from Featured products!
            </p>
          </header>

          <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
            {products.map(
              ({ id, image, name, price, category, rating, status }, index) => (
                <li
                  key={"product-" + index}
                  className="shadow-md flex flex-col items-center justify-center"
                >
                  <div className="bg-lightGrey1 overflow-hidden group rounded-2xl p-1 relative  w-[250px] cursor-pointer">
                    <img
                      src={image}
                      alt={name}
                      className="h-[225px] w-full object-cover rounded transition duration-500 group-hover:scale-105 "
                    />
                    <div
                      className={`flex items-center gap-1 right-[-15px] text-md text-black absolute top-5  bg-white px-5 py-1.5 rounded-full`}
                    >
                      {status}
                    </div>
                  </div>
                  <h3 className="text-gray-500 mt-2 text-xs tracking-widest title-font mb-1">
                    {category.toUpperCase()}
                  </h3>
                  <div className="mt-4 px-5 pb-5">
                    <a href="#">
                      <h5 className="text-xl font-semibold tracking-tight text-slate-900">
                        {name}
                      </h5>
                    </a>
                    <Rating rating={rating} />
                    <div className="flex items-center justify-between">
                      <p>
                        <span className="text-xl font-semibold text-slate-900">
                          $ {price}
                        </span>
                      </p>
                      <span className="flex items-center rounded-md bg-purple-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                        <Link href={`/productDetails/${id}`}>See Details</Link>
                      </span>
                    </div>
                  </div>
                </li>
              )
            )}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Products;
