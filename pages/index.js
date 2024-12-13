import { useMoralis } from "react-moralis";
import { useQuery } from "@apollo/client";

import networkMapping from "../constants/networkMapping.json";
import GET_ACTIVE_ITEMS from "../constants/subgraphQueries";
import NFTBox from "../components/NFTBox";

export default function Home() {
  const { isWeb3Enabled, chainId } = useMoralis();

  const chainIdString = chainId ? parseInt(chainId).toString() : "31337";
  const marketplaceAddress = networkMapping[chainIdString].NftMarketPlace[0];

  const { loading, error, data: listedNfts } = useQuery(GET_ACTIVE_ITEMS);


  return (
    <div className="container mx-auto">
      <h1 className="py-4 px-4 font-bold text-2xl">Recently Listed</h1>
      <div className="flex flex-wrap">
        {isWeb3Enabled ? (
          loading || !listedNfts ? (
            <div>Loading...</div>
          ) : (
            listedNfts.activeItems.map((nft) => {
              // console.log(nft);
              const { price, nftAddress, tokenId, seller } = nft;
              return (
                <NFTBox
                  price={price}
                  nftAddress={nftAddress}
                  tokenId={tokenId}
                  marketplaceAddress={marketplaceAddress}
                  seller={seller}
                  key={`${nftAddress}${tokenId}`}
                />
              );
            })
          )
        ) : (
          <div>Web3 Currently Not Enabled</div>
        )}
      </div>
    </div>
  );
}
