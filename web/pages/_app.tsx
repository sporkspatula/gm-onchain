import { css } from "@emotion/css";
import { Networks, NFTFetchConfiguration } from "@zoralabs/nft-hooks";
import { NETWORK_ID, RPC_URL } from "../src/env-vars";
import { Web3ConfigProvider } from "@zoralabs/simple-wallet-provider";
import { Web3Theme } from "../src/Web3Theme";
import { PageHeader } from "../src/PageHeader";

export default function App({ Component, pageProps }: any) {
  return (
    <div
      className={css`
        p,
        dl {
          margin: 0;
        }
        font-family: 'DM Mono', monospace;
      `}
    >
      <Web3ConfigProvider
        theme={Web3Theme}
        rpcUrl={RPC_URL}
        networkId={parseInt(NETWORK_ID, 10)}
        // strings={{WALLETLINK_APP_NAME: 'GM Minter'}}
      >
        <NFTFetchConfiguration
          networkId={
            NETWORK_ID === "4"
              ? Networks.RINKEBY
              : Networks.MAINNET
          }
        >
          <PageHeader>
            <Component {...pageProps} />
          </PageHeader>
        </NFTFetchConfiguration>
      </Web3ConfigProvider>
    </div>
  );
}
