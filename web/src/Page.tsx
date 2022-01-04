import { useEffect, useState } from "react";
import { css } from "@emotion/css";
import { useMachine } from "@xstate/react";
import { Disclaimer } from "./Disclaimer";
import { Intro } from "./Intro";
import * as styles from "./styles";
import { WalletStatus } from "./WalletStatus";
import { RenderGm } from "./RenderGm";
import { mintMachine } from "./machine";

const range = (n: number) => [...Array(n).keys()];

export const Page = ({tokens}: any) => {
  const [state, send] = useMachine(mintMachine);
  const [back, setBack] = useState("");
  const atState = state.value as any;
  
  console.log({atState})

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
