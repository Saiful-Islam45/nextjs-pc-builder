import { store } from "@/redux/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || (page => page);

  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        {getLayout(<Component {...pageProps} />)}
        <ToastContainer/>
      </Provider>
    </SessionProvider>
  );
}
