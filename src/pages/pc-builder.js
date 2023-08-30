/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Modal from 'react-modal';
import { RiArrowRightSLine } from 'react-icons/ri';
import { RiCloseLine } from 'react-icons/ri';
import { FaPlus } from 'react-icons/fa'; 

// Sample data for categories and products
const categories = [
  { id: 1, name: 'Category 1', products: ['Product A', 'Product B', 'Product C'] },
  { id: 2, name: 'Category 2', products: ['Product X', 'Product Y', 'Product Z'] },
  // Add more categories as needed
];
const AnimatedCard = ({ children, className }) => {
  return (
    <div className={`transition duration-300 ease-in-out transform hover:scale-105 ${className}`}>
      {children}
    </div>
  );
};

const ProductModal = ({ isOpen, onClose, products, onSelectProduct }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="overlay"
    >
      <div className="modal-content">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl">Select a Product</h2>
          <button onClick={onClose} className="btn-close">
            <RiCloseLine />
          </button>
        </div>
        <ul className="grid grid-cols-2 gap-4">
          {products.map((product, index) => (
            <AnimatedCard key={index} className="product-card p-4 rounded-md shadow-md hover:shadow-lg hover:scale-105">
              <div className="flex items-center justify-between">
                <img
                  src={product.imageSrc} 
                  alt={product.name}
                  className="w-16 h-16 rounded-full"
                />
                <button
                  onClick={() => onSelectProduct(product)}
                  className="btn-add"
                >
                  <FaPlus />
                </button>
              </div>
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
              <p className="text-gray-500 mt-1">${product.price}</p>
            </AnimatedCard>
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
        {categories.map((category) => (
          <div key={category.id} className="flex justify-between items-center mb-4">
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
      <ProductModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        products={selectedCategory ? selectedCategory.products : []}
        onSelectProduct={handleSelectProduct}
      />
    </div>
  );
};

export default CategoryList;
