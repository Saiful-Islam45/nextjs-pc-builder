import React from "react";
import RootLayout from "../../components/Layout";
import { categoryUrl, findKeyByValue } from "@/utils/Category";
import Products from "../../components/FeatureProducts/Products";

const CatgoryWiseProducts = ({ products }) => <Products products={products} />;

CatgoryWiseProducts.getLayout = function getLayout(page) {
  return <RootLayout childern={page} />;
};

export const getStaticPaths = () => {
  const paths = Object.values(categoryUrl).map(cat => ({
    params: {
      catUrl: cat
    }
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async context => {
  const { catUrl } = context?.params;
  const category = findKeyByValue(catUrl);
  const res = await fetch(
    `http://localhost:5000/products/by-category/${category}`
  );
  const products = await res.json();
  return {
    props: {
      products
    }
  };
};

export default CatgoryWiseProducts;
