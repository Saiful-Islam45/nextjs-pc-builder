import React from "react";
import RootLayout from "../../components/Layout";
import { categoryUrl, findKeyByValue } from "@/utils/Category";
import Products from "../../components/FeatureProducts/Products";
const serverUrl= process.env.SERVER_BASE_URL

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
    `${serverUrl}/by-category/${category}`
  );
  const products = await res.json();
  return {
    props: {
      products
    }
  };
};

export default CatgoryWiseProducts;
