import Head from "next/head";
import Header from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import store from "@/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Head>
          <link
            rel="shortcut icon"
            sizes="76x76"
            type="image/x-icon"
            href="/assets/icons/favicon.ico"
          ></link>
          <title>Airbnb</title>
        </Head>
        <Header />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
