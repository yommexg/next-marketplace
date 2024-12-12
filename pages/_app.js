import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from "web3uikit";
import Head from "next/head";

import Header from "../components/Header";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Anime Code MarketPlace.</title>
        <meta
          name="description"
          content="Market place for nfts"
        />
      </Head>
      <MoralisProvider initializeOnMount={false}>
        <NotificationProvider>
          <Header />
          <Component {...pageProps} />
        </NotificationProvider>
      </MoralisProvider>
    </div>
  );
}

export default MyApp;
