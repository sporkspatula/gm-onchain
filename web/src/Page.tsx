import { useEffect, useState } from "react";
import { css } from "@emotion/css";
import { useMachine } from "@xstate/react";
import { assign, createMachine } from "xstate";
import { Disclaimer } from "./Disclaimer";
import { Intro } from "./Intro";
import * as styles from "./styles";
import { WalletStatus } from "./WalletStatus";
import { RenderGm } from "./RenderGm";

const range = (n: number) => [...Array(n).keys()];

const mintMachine = createMachine({
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

export const Page = () => {
  const [state, send] = useMachine(mintMachine);
  const [back, setBack] = useState("");
  const atState = state.value as any;

  console.log(state, atState);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search.substring(1));
    if (params.get("count")) {
      const count = parseInt(params.get("count"));
      send("INIT_COUNT", { value: count });
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <Intro send={send} />
      {atState.sayback !== "hidden" && (
        <div>
          {/* <input
            className={styles.cleanInput}
            disabled={atState.sayback === "complete"}
            autoFocus={true}
            onChange={(e) => {
              setBack(e.target.value);
              if (e.target.value === "gm") {
                send("SAY_BACK_COMPLETE");
              }
            }}
            value={back}
          /> */}
          {atState.sayback !== "complete" && (
            <button
              className={css([styles.flowButton, styles.buttonOptional])}
              onClick={() => send("SAY_BACK_COMPLETE")}
            >
              gm
            </button>
          )}
        </div>
      )}
      {atState.disclaimer !== "hidden" && <Disclaimer send={send} />}
      {atState.disclaimer === "complete" && (
        <>
          {range(10).map((i) => (
            <button
              key={i}
              onClick={() => {
                send("SET_MINT_COUNT", { value: i + 1 });
              }}
              className={css(
                styles.flowButton,
                state.context.mintCount === i + 1
                  ? styles.buttonSelected
                  : undefined
              )}
            >
              {i + 1}
            </button>
          ))}
        </>
      )}
      {atState.connectWallet !== "hidden" && (
        <WalletStatus
          state={atState.connectWallet}
          info={state.context.info}
          count={state.context.mintCount}
          send={send}
        />
      )}
      {atState.connectWallet === "minted" && (
        <div>
          MINTED!
          <br />{" "}
          {state.context.mintIDs.map((id) => (
            <RenderGm gmId={id} key={id} />
          ))}
        </div>
      )}
    </div>
  );
};
