import React, { useState } from 'react';
import Modal from 'react-modal';
import { RiArrowRightSLine } from 'react-icons/ri';
import RootLayout from '../../components/Layout';
import { categories } from '@/data/data';


const ProductModal = ({ isOpen, onClose, products, onSelectProduct }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <h2>Select a Product</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index} onClick={() => onSelectProduct(product)}>
            {product}
          </li>
        ))}
      </ul>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

const CategoryList = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  console.log("Categories:", categories);

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

CategoryList.getLayout= function getLayout(page) {
  return <RootLayout childern={page} title='PC-Builder'/>
}

export default CategoryList;
