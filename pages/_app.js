import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from "web3uikit";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Head from "next/head";

import Header from "../components/Header";
import "../styles/global.css";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: " https://api.studio.thegraph.com/query/98072/anime-nft-marketplace/v0.0.1",
});

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
        <ApolloProvider client={client}>
          <NotificationProvider>
            <Header />
            <Component {...pageProps} />
          </NotificationProvider>
        </ApolloProvider>
      </MoralisProvider>
    </div>
  );
}

export default MyApp;
