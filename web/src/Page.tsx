import { useState } from "react";
import { css } from "@emotion/css";
import { useMachine } from "@xstate/react";
import { assign, createMachine } from "xstate";
import { Disclaimer } from "./Disclaimer";
import { Intro } from "./Intro";
import * as styles from "./styles";
import { WalletStatus } from "./WalletStatus";

const range = (n: number) => [...Array(n).keys()];

const mintMachine = createMachine({
  id: "mintMachine",
  type: "parallel",
  context: {
    mintCount: 0,
  },
  states: {
    loading: {
      states: {
        shown: {},
      },
      initial: "shown",
    },
    sayback: {
      states: {
        shown: {},
        hidden: {},
        complete: {},
      },
      on: {
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
        SAY_BACK_COMPLETE: "disclaimer.shown",
        DISCLAIMER_TYPED: "disclaimer.complete",
        SET_MINT_COUNT: {
          target: "connectWallet.shown",
          actions: [
            assign({ mintCount: (context, evt) => (evt as any).value }),
          ],
        },
      },
    },
    connectWallet: {
      states: {
        shown: {},
        hidden: {},
        complete: {},
      },
      initial: "hidden",
      on: {},
    },
  },
});

export const Page = () => {
  const [state, send] = useMachine(mintMachine);

  const [back, setBack] = useState("");

  const atState = state.value as any;

  console.log({ atState, ctx: state.context });

  return (
    <div className={styles.wrapper}>
      <Intro send={send} />
      {atState.sayback !== "hidden" && (
        <div className={styles.textLink}>
          <input
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
          />
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
        <WalletStatus count={state.context.mintCount} send={send} />
      )}
    </div>
  );
};
