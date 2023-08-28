
import RootLayout from "../../components/Layout";

const Home = () => {
  return <h3>Home</h3>
};

Home.getLayout = function getLayout(page) {
  return <RootLayout childern={page} title="home" />;
};

export default Home;