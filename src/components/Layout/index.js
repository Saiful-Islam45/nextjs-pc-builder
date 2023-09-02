import Head from "next/head";
import Navbar from './Navbar';
import Footer from "./Footer";

const RootLayout = ({ childern, title }) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} | PC builder` : "PC builder"}</title>
      </Head>
      <Navbar/>

      <main className="min-h-screen">{childern}</main>
      <Footer/>
    </>
  );
};

export default RootLayout;
