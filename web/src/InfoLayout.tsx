import { css } from "@emotion/css";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS, NETWORK_ID } from "./env-vars";

export const InfoLayout = ({ children }: any) => (
  <div
    className={css`
      display: grid;
      grid-template-areas:
        "mint sidebar"
        "mint sidebar"
        "footer footer";

      a {
        color: var(--color-text);
      }
      ul {
        margin: 0;
        padding: 0;
      }
      li {
        list-style: none;
        padding-bottom: 8px;
        text-align: right;
      }
      @media only screen and (max-width: 600px) {
        grid-template-areas:
          "mint mint"
          "mint mint"
          "sidebar sidebar";
        li {
          text-align: right;
        }
      }
      grid-template-rows: 4fr 1fr;
      grid-template-columns: 1fr 200px;
      grid-gap: 10px;
      min-height: 100vh;
    `}
  >
    <div
      className={css`
        grid-area: mint;
      `}
    >
      {children}
    </div>
    <div
      className={css`
        grid-area: sidebar;
        padding: 20px;
        border: 2px dashed var(--color-text);
      `}
    >
      <ul
        className={css`
          margin-right: 4px;
          display: block;
        `}
      >
        {CONTRACT_ADDRESS !== ethers.constants.AddressZero && (
          <li>
            <a
              target="_blank"
              href={`https://${
                NETWORK_ID === "1" ? "www" : "rinkeby"
              }.etherscan.io/address/${CONTRACT_ADDRESS}`}
            >
              contract
            </a>
          </li>
        )}
        <li>
          <a href="https://" target="_blank">
            twitter
          </a>
        </li>
        <li>
          <a href="/faq">faq</a>
        </li>
        {CONTRACT_ADDRESS !== ethers.constants.AddressZero && (
          <li>
            <a
              href={`https://${
                NETWORK_ID === "1" ? "" : "rinkeby."
              }zora.co/collections/${CONTRACT_ADDRESS}`}
            >
              mints on zora
            </a>
          </li>
        )}
      </ul>
    </div>
    <footer
      className={css`
        grid-area: footer;
        display: none;
        @media only screen and (max-width: 600px) {
          display: block;
        }
      `}
    ></footer>
  </div>
);
