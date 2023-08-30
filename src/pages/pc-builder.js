/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Modal from 'react-modal';
import { RiArrowRightSLine } from 'react-icons/ri';
import RootLayout from '../../components/Layout';
import { categories } from '@/data/data';
import { MdClose } from 'react-icons/md'; 

const ProductModal = ({ isOpen, onClose, products, onSelectProduct }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start overflow-visible z-100"
      className="bg-white rounded-lg overflow-y-auto mt-14 w-[90vw]"
      ariaHideApp={false}
    >
      <div className="w-full relative">
        <button onClick={onClose} className="absolute top-0 right-0 m-2 text-gray-600">
          <MdClose size={20} />
        </button>
        <h2 className="text-sm mb-4">Select a Product</h2>
        <ul className="container">
          {products.map((product, index) => (
            <li key={'pro' + index}>
              <div className="flex items-center justify-between my-2 hover:scale-y-105 duration-500 shadow-md">
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
                    className="bg-purple-700 ring-1 hover:ring-offset-1 px-3 py-1 rounded-full"
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
