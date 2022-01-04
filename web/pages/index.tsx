import { GetStaticProps } from "next";

import {
  FetchStaticData,
  MediaFetchAgent,
  NetworkIDs,
} from "@zoralabs/nft-hooks";
import { GM_CONTRACT, NETWORK_ID } from "../src/env-vars";
import HeadInfo from "../src/HeadInfo";
import { Page } from "../src/Page";

export default function Home({ tokens }: { tokens: any }) {
  return (
    <>
      <HeadInfo
        title="Mint your GM"
        description="GM"
      />
      <Page tokens={tokens} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const fetchAgent = new MediaFetchAgent(NETWORK_ID as NetworkIDs);
  const contractAddress = GM_CONTRACT;
  const tokens = await FetchStaticData.fetchZoraIndexerList(fetchAgent, {
    collectionAddresses: [contractAddress],
    limit: 40,
    offset: 0,
  });

  return {
    props: {
      tokens,
    },
    revalidate: 180,
  };
};
