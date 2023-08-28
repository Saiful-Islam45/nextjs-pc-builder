/* eslint-disable @next/next/no-img-element */
import RootLayout from "../../components/Layout";
import HeroSection from "../../components/Hero/HeroSection";
import Products from "../../components/FeatureProducts/Products";
import Categories from "../../components/category/Category";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Products />
      <Categories/>
    </>
  );
};

Home.getLayout = function getLayout(page) {
  return <RootLayout childern={page} title="home" />;
};

export default Home;
