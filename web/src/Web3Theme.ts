import { css } from "@emotion/css";

import { Theme } from "@zoralabs/simple-wallet-provider/dist/constants";

export const Web3Theme = {
  modalText: css`
    padding: 18px;
    background: #1e1e1e;
    box-shadow: 0px 2.7px 3px -2.5px rgba(0, 0, 0, 0.1),
      0px 1.1px 1.2px -1.3px rgba(0, 0, 0, 0.1),
      0px 0.7px 0.8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    z-index: 100;
    pointer-events: all;
    font-family: 'DM Mono';
    font-weight: normal;

    width: 380px;
    max-width: calc(100vw - 56px);
  `,
  modalContent: css`
    ${Theme.modalContent}
    min-height: 100vh;
  `,
  modalHeader: css`
    ${Theme.modalHeader}
    padding: 0;
    border: 0;
    font-size: 16px;
    color: #fff;
    font-family: 'DM Mono';

    line-height: 30px;
    padding-bottom: 18px;

    /* or 156% */
  `,
  walletOptionsWrapper: css``,
  walletOptionsList: css``,
  dialogOverlay: css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 0;
    margin: 0;
    z-index: 99999999;
    overflow: auto;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
  `,
  walletError: css`
    color: white;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
  `,
  walletOption: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12.5px 10px;

    border: 0;
    margin: 10px 0;
    width: 100%;

    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 25px;
    text-align: center;

    color: #ffffff;
    cursor: pointer;

    background: #333333;
    border-radius: 4px;
  `,
  modalClose: css`
    cursor: pointer;
    border: 0;
    background: transparent;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;

    path {
      fill: white;
    }
  `,
};
