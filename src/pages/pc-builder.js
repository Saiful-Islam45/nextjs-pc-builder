/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Modal from "react-modal";
import { RiArrowRightSLine } from "react-icons/ri";
import RootLayout from "../components/Layout";
import { categoryIcons, categoryWiseProducts } from "../utils/Category";
import { FaTimes } from "react-icons/fa";
import ProductCard from "../components/FeatureProducts/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearBuilder } from "@/redux/reducers/PcBuilder/pcBuilderSlice";
import { useRouter } from "next/router";
const serverUrl = process.env.SERVER_BASE_URL;

const ProductModal = ({ isOpen, onClose, products, onSelectProduct }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-50 flex sm:flex-col md:flex-row justify-center items-center"
      className="bg-white rounded-lg overflow-y-auto w-[90vw] max-w-3xl max-h-[90vh] p-4"
      ariaHideApp={false}
    >
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute stiky top-2 right-2 text-gray-500"
        >
          <FaTimes size={20} />
        </button>
        <h2 className="text-lg font-semibold mb-4">Select a Product</h2>
        <ul className="space-y-4">
          {products.map((product, index) => (
            <li key={"pro" + index} className="my-2">
              <ProductCard
                product={product}
                onSelectProduct={onSelectProduct}
                shouldRemove={false}
              />
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
};

const CategoryList = ({ categoryData }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { pcBuilder } = useSelector(state => state);
  const dispatch = useDispatch();
  const router= useRouter()

  const handleChooseClick = category => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const isBuildComplete = () => {
    const existCategories = Object.values(pcBuilder).filter(c => c);
    return existCategories.length === 7;
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectProduct = () => {
    setIsModalOpen(false);
  };

  const handleRemoveProduct = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <div className="container mx-auto">
        {categoryData.map(category => (
          <div key={category.id}>
            <div className="flex w-full md:w-[80vw] items-center justify-between m-auto shadow-md p-2">
              <div className=" text-5xl">{categoryIcons[category.name]}</div>
              <div>{category.name}</div>
              <button onClick={() => handleChooseClick(category)}>
                {pcBuilder[category.name] ? (
                  " "
                ) : (
                  <span className=" flex items-center justify-center">
                    {" "}
                    Choose <RiArrowRightSLine className="ml-2" />
                  </span>
                )}
              </button>
            </div>
            <div className="w-full md:w-[75vw] m-auto">
              {pcBuilder[category.name] && (
                <ProductCard
                  product={pcBuilder[category.name]}
                  onSelectProduct={handleRemoveProduct}
                  shouldRemove={true}
                />
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full md:w-[90vw] items-center justify-end p-2  mt-2 mb-4 ">
        <button
          onClick={() => {
            toast.success(
              "Congratulations! You have successfully done your PC Build. "
            );
            dispatch(clearBuilder());
            router.push('/')
          }}
          disabled={isBuildComplete() ? false : true}
          className={` ${
            isBuildComplete()
              ? "bg-purple-600 text-white"
              : "bg-purple-300 text-gray-100"
          } font-bold text-center p-2 rounded-md `}
        >
          Complete Build
        </button>
      </div>
      <div className="mt-20">
        <ProductModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          products={selectedCategory ? selectedCategory.products : []}
          onSelectProduct={handleSelectProduct}
        />
      </div>
    </div>
  );
};

CategoryList.getLayout = function getLayout(page) {
  return <RootLayout childern={page} title="PC-Builder" />;
};

export default CategoryList;

export const getServerSideProps = async () => {
  const result = await fetch(serverUrl);
  const products = await result.json();
  return {
    props: { categoryData: categoryWiseProducts(products) }
  };
};
