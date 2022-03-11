import { GetServerSideProps } from "next";
import { css } from "@emotion/css";
import { NETWORK_ID, GM_CONTRACT } from "../../src/env-vars";
import HeadInfo from "../../src/HeadInfo";
import { getTokenInfo } from "../../src/get-query-contract";
import { AddressView } from "../../src/AddressView";

export default function GM({ id, tokenInfo }: any) {
  // console.log({tokenInfo})

  return (
    <>
      <HeadInfo title="View your GM" description="GM" />
      <div
        className={css`
          color: #f6f6f6;
          .dark {
            opacity: 0.9;
          }
          .link-first {
            margin-top: 14px;
          }
          font-family: DM Mono;
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 38px;

          /* identical to box height, or 200% */
          font-feature-settings: "zero" on;

          margin: 5%;

          a {
            text-decoration: none;
            color: inherit;
          }
        `}
      >
        <h1>GM #{id}</h1>
        <img src={tokenInfo.data.image} alt={`GM ${id}`} />
        <div className="dark"><AddressView address={tokenInfo.owner} /></div>
        <div className="link-first">
          <a
            href={`https://${
              NETWORK_ID === "4" ? "rinkeby." : ""
            }etherscan.io/token/${GM_CONTRACT}?a=${id}`}
            target="_blank"
          >
            View on Etherscan
          </a>
        </div>
        <div>
          <a
            href={`https://${
              NETWORK_ID === "4" ? "rinkeby." : ""
            }zora.co/collections/${GM_CONTRACT}/${id}`}
            target="_blank"
          >
            View on ZORA
          </a>
        </div>
        <div>
          <a
            href={tokenInfo.data.image}
            download={`gm-${id}.svg`}
          >
            Download SVG
          </a>
        </div>
        <div>
          <a
            href={`data:application/json;base64,${Buffer.from(JSON.stringify(tokenInfo.data)).toString('base64')}`}
            download={`gm-${id}-metadata.json`}
          >
            Download Metadata
          </a>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  let tokenInfo = null;
  try {
    tokenInfo = await getTokenInfo(params.id as string)
  } catch (e) {
    console.error(e);
    // couldnt get token info
  }
  return {
    props: {
      id: params.id,
      tokenInfo,
    },
  };
};
