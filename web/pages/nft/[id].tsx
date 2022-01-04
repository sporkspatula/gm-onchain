import { GetServerSideProps } from "next";
import { css } from "@emotion/css";
import { NETWORK_ID, GM_CONTRACT } from "../../src/env-vars";
import HeadInfo from "../../src/HeadInfo";
import { getTokenInfo } from "../../src/get-query-contract";
import { AddressView } from "../../src/AddressView";

export default function GM({ id, tokenInfo }: any) {
  return (
    <>
      <HeadInfo title="View your GM" description="GM" />
      <div
        className={css`
          color: #f6f6f6;
          .dark {
            opacity: 0.5;
          }
          .link-first {
            margin-top: 14px;
          }
          font-family: DM Mono;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 32px;

          /* identical to box height, or 200% */
          font-feature-settings: "zero" on;

          a {
            text-decoration: none;
            color: inherit;
          }
        `}
      >
        <div>GM #{id}</div>
        <div className="dark"><AddressView address={tokenInfo.ownerAddress} /></div>
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
