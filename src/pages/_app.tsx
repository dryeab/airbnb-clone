import Head from "next/head";
import Header from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
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
    </>
  );
}
