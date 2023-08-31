/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Modal from 'react-modal';
import { RiArrowRightSLine } from 'react-icons/ri';
import RootLayout from '../../components/Layout';
import { categories as categoryData } from '@/data/data';
import { categoryIcons } from '../utils/Category';
import { FaTimes } from 'react-icons/fa';

const ProductModal = ({ isOpen, onClose, products, onSelectProduct }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
      className="bg-white rounded-lg overflow-y-auto w-[90vw] max-w-3xl max-h-[90vh] p-4"
      ariaHideApp={false}
    >
      <div className="relative">
        <button onClick={onClose} className="absolute stiky top-2 right-2 text-gray-500">
          <FaTimes size={20} />
        </button>
        <h2 className="text-lg font-semibold mb-4">Select a Product</h2>
        <ul className="space-y-4">
          {products.map((product, index) => (
            <li key={'pro' + index}>
              <div className="flex items-center xs:flex-col sm:flex-col md:flex-row justify-between my-2 hover:scale-y-105 duration-500 shadow-md">
                <img src={product.image} height={150} width={150} alt={product.name} />
                <div className="pl-2 mt-3">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <ul className="pl-2">
                    {Object.entries(product.keyFeatures).map(([key, value]) => (
                      <li key={'key' + key}>{key}: {value}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p>$ {product.price}</p>
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="bg-purple-700 ring-1 hover:ring-offset-1 px-3 py-1 rounded-full text-white"
                  >
                    Add
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
};

const CategoryList = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleChooseClick = (category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-1/2">
        {categoryData.map((category) => (
          <div key={category.id} className="flex justify-between items-center mb-4 shadow-md p-2">
            <div className=" text-5xl">{categoryIcons[category.name]}</div>
            <div>{category.name}</div>
            <button
              className="flex items-center"
              onClick={() => handleChooseClick(category)}
            >
              Choose <RiArrowRightSLine className="ml-2" />
            </button>
          </div>
        ))}
      </div>
      {selectedCategory && (
        <div className="ml-8">
          <h2>Selected Category: {selectedCategory.name}</h2>
          {selectedProduct && <p>Selected Product: {selectedProduct}</p>}
        </div>
      )}
      <div className='mt-20'>
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
  return <RootLayout childern={page} title='PC-Builder' />
}

export default CategoryList;
