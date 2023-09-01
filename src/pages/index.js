/* eslint-disable @next/next/no-img-element */
import RootLayout from "../../components/Layout";
import HeroSection from "../../components/Hero/HeroSection";
import Products from "../../components/FeatureProducts/Products";
import Categories from "../../components/category/Category";
// import { data } from "@/data/data";

const Home = ({ products }) => {
  return (
    <>
      <HeroSection />
      <Products products={products} />
      <Categories />
    </>
  );
};

Home.getLayout = function getLayout(page) {
  return <RootLayout childern={page} title="home" />;
};

export const getStaticProps = async () => {
  const result = await fetch("http://localhost:5000/products");
  const products = await result.json();
  return {
    props: { products }
  };
};

export default Home;
