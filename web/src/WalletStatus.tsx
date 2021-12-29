import Typist from "react-typist";
import { css } from "@emotion/css";
import * as styles from "./styles";
import {
  useWalletButton,
  useWeb3Wallet,
} from "@zoralabs/simple-wallet-provider";
import { useState, useEffect, useCallback, ChangeEvent } from "react";
import { formatEther } from "@ethersproject/units";
import { Gm__factory } from "./typechain/factories/Gm__factory";

const GM_ADDRESS = "0xDa30EaC642599989DE8aE3a3AE1669382a65BC60";

export const WalletStatus = ({ send, count }) => {
  const { active, account, library } = useWeb3Wallet();
  const { openModal, buttonAction } = useWalletButton();
  const [mint, setMint] = useState<string>();

  const [error, setError] = useState("");

  useEffect(() => {
    () => {
      setMint("");
      setError(undefined);
    };
  }, []);

  const doMint = useCallback(async () => {
    try {
      setError("");
      const signer = await library.getSigner();
      const factory = new Gm__factory(signer).attach(GM_ADDRESS);
      const mintTxn = await factory.mint(count);
      // set state minting
      const hasConfirmed = await mintTxn.wait(5);
      // set state confirmed
    } catch (e: any) {
      console.log("error", e.error, e.error.message);
      if (e.error.message) {
        setError(e.error.message);
      } else {
        setError(e.toString());
      }
    }
  }, [library]);

  const [balance, setBalance] = useState<string>("???");

  const getBalance = useCallback(async () => {
    const balance = await library.getBalance(account);
    setBalance(formatEther(balance));
  }, [library, account]);

  useEffect(() => {
    if (!active) {
      openModal();
    } else {
      setBalance("???");
      getBalance();
    }
  }, [active]);

  if (!active) {
    return (
      <div>
        <div className={styles.textLink}>You have no connected wallet.</div>
        <div className={styles.textLink}>
          <button className={styles.flowButton} onClick={buttonAction}>
            connect
          </button>
        </div>
      </div>
    );
  }

  if (balance === "???") {
    return (
      <div className={styles.textLink} key={account}>
        loading...
      </div>
    );
  }

  return (
    <>
      <Typist onTypingDone={() => send("WALLET_CONNECT_TYPED")}>
        <div className={styles.textLink} key={account}>
          you've connected wallet {account}
        </div>
        <div className={styles.textLink}>
          <button className={styles.flowButton} onClick={buttonAction}>
            connect a different wallet
          </button>
        </div>
        <div className={styles.textLink} key={`${balance}`}>
          your wallet has {balance} ETH
        </div>
        <div className={styles.textLink} key={count.toString()}>
          you need {(0.042 * count).toString()} ETH to mint {count.toString()}{" "}
          gms.
        </div>
        <div className={styles.textLink} key={`${balance}-${count}`}>
          {0.042 * count < parseFloat(balance)
            ? "you have enough eth"
            : "you need more eth"}
        </div>
        <div className={styles.textLink}>type mint to confirm</div>

        <div className={styles.textLink}>
          <input
            className={styles.cleanInput}
            disabled={mint === "mint"}
            autoFocus={true}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setMint(e.target.value);
              if (e.target.value === "mint") {
                doMint();
              }
            }}
            value={mint}
          />
          <button
            className={css([styles.flowButton, styles.buttonOptional])}
            onClick={() => doMint()}
          >
            mint!
          </button>
        </div>
      </Typist>
      {error && (
        <div className={styles.textLink} key={error}>
          {error}
        </div>
      )}
    </>
  );
};
