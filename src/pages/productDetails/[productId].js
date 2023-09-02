/* eslint-disable @next/next/no-img-element */
import React from "react";
import Rating from "../../ui/Rating";
import RootLayout from "../../components/Layout/index";
import { addToBuilder } from "@/redux/reducers/PcBuilder/pcBuilderSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
const serverUrl= process.env.SERVER_BASE_URL

const ProductDetails = ({ products }) => {
  const dispatch = useDispatch();
  const router = useRouter()
  const product = products[0];
  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src={product.image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {product.category}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.name}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <Rating rating={product.rating} isNumberShow={false} />
                <span className="text-gray-600 ml-3 mt-[-16px]">
                  {product?.reviews?.length || 0} Reviews
                </span>
              </span>
            </div>
            <p className="leading-relaxed">{product.description}</p>
            <div className="pl-2 mt-3">
              <h3 className=" text-xl">Key Features:</h3>
              <ul className="pl-2">
                {Object.entries(product.keyFeatures || {}).map(
                  ([key, value]) => (
                    <li key={"key" + key}>
                      {key}: {value}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                $ {product.price}
              </span>
              <button
                onClick={() => {
                  dispatch(addToBuilder(product))
                  router.push('/pc-builder')
                }}
                className="flex ml-auto text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded"
              >
                Add To Builder
              </button>
            </div>
          </div>
        </div>
      </div>
      {product?.reviews?.map(review => (
        <div
          key={"review" + review.comment}
          className=" px-4 md:px-8 ml-0 md:ml-8 w-[95vw] md:w-[50vw] border-b border-gray-200 mb-1"
        >
          <p className="font-semibold">{review.user}</p>
          <div className="pl-2 mb-2 flex items-center gap2">
            <span className="mt-[-10px] pr-1">Rating: </span>
            <Rating rating={review.rating} isNumberShow={false} />
          </div>
          <p className="pl-2">{review.comment}</p>
        </div>
      ))}
    </section>
  );
};

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout childern={page} title="Product Details" />;
};

export const getStaticPaths = async () => {
  const result = await fetch(serverUrl);
  const products = await result.json();
  const paths = products.map(p => ({
    params: {
      productId: p._id
    }
  }));
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async context => {
  const productId = context.params.productId;
  const result = await fetch(`${serverUrl}/${productId}`);
  const products = await result.json();
  return {
    props: {
      products
    }
  };
};

export default ProductDetails;
