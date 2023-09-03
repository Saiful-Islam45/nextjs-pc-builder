import RootLayout from "../components/Layout";
import HeroSection from "../components/Hero/HeroSection";
import Products from "../components/FeatureProducts/Products";
import Categories from "../components/category/Category";
const serverUrl= process.env.SERVER_BASE_URL
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
  const result = await fetch(serverUrl);
  const products = await result.json();
  return {
    props: { products }
  };
};

export default Home;
