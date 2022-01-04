import { assign, createMachine } from "xstate";

export const mintMachine = createMachine({
  id: "mintMachine",
  type: "parallel",
  context: {
    mintCount: 0,
    info: undefined,
    mintIDs: [],
  },
  states: {
    loading: {
      states: {
        shown: {},
      },
      initial: "shown",
      on: {
        INIT_COUNT: {
          actions: [assign({ mintCount: (_, evt) => (evt as any).value })],
        },
      },
    },
    sayback: {
      states: {
        shown: {},
        hidden: {},
        complete: {},
      },
      on: {
        INIT_COUNT: "sayback.shown",
        LOAD_COMPLETED: "sayback.shown",
        SAY_BACK_COMPLETE: "sayback.complete",
      },
      initial: "hidden",
    },
    disclaimer: {
      states: {
        shown: {},
        hidden: {},
        complete: {},
      },
      initial: "hidden",
      on: {
        INIT_COUNT: "disclaimer.complete",
        SAY_BACK_COMPLETE: "disclaimer.shown",
        DISCLAIMER_TYPED: "disclaimer.complete",
        SET_MINT_COUNT: {
          target: "connectWallet.shown",
          actions: [assign({ mintCount: (_, evt) => (evt as any).value })],
        },
        UPDATE_INFO: {
          actions: [assign({ info: (_, evt) => (evt as any).value })],
        },
      },
    },
    connectWallet: {
      states: {
        shown: {},
        hidden: {},
        showMintButton: {},
        minting: {},
        minted: {},
        complete: {},
      },
      initial: "hidden",
      on: {
        WALLET_CONNECT_TYPED: "connectWallet.showMintButton",
        INIT_COUNT: "connectWallet.showMintButton",
        MINTING: "connectWallet.minting",
        MINTED: "connectWallet.minted",
        NEW_MINT_ID: {
          target: "connectWallet.minted",
          actions: [
            assign({
              mintIDs: (context, evt) => [
                ...(context as any).mintIDs,
                (evt as any).value,
              ],
            }),
          ],
        },
      },
    },
  },
});