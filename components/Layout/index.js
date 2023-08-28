import Head from "next/head";
import Navbar from './Navbar';

const RootLayout = ({ children, title }) => {
  return (
    <>
      <Head>title={title ? `${title}-PC builder` : "PC builder"}</Head>
      <Navbar/>

      <main className="min-h-screen">{children}</main>
      <footer className="text-center"> This is footer</footer>
    </>
  );
};

export default RootLayout;
