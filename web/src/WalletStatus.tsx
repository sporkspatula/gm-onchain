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
import { TestBase__factory } from "./typechain/factories/TestBase__factory";
import { BigNumber, ethers } from "ethers";
import { GM_CONTRACT } from "./env-vars";

const ButtonPrompts = {
  shown: "mint",
  minting: "minting",
  minted: "mint again",
  hidden: "",
  showMintButton: "mint",
};

export const WalletStatus = ({ state, send, count, info }: any) => {
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

  const doMint = useCallback(() => {
    (async () => {
      try {
        setError("");
        const signer = await library.getSigner();
        const factory = new Gm__factory(signer).attach(GM_CONTRACT);
        const baseContract = new TestBase__factory(signer).attach(GM_CONTRACT);
        const mintTxn = await factory.mint(count, {
          value: BigNumber.from(info.salePrice).mul(BigNumber.from(count)),
        });
        baseContract.on(
          "Transfer",
          (from: string, to: string, tokenId: BigNumber) => {
            console.log({ from, to, tokenId, account });
            if (from === ethers.constants.AddressZero && to === account) {
              send("NEW_MINT_ID", { value: tokenId.toNumber() });
            }
          }
        );
        send("MINTING");
        // set state minting
        await mintTxn.wait(1);
        send("MINTED");
        // set state confirmed
      } catch (e: any) {
        if (e?.error?.message) {
          setError(e.error.message);
        } else {
          setError(e.message || e.toString());
        }
      }
    })();
  }, [library, account, send, setError]);

  const [balance, setBalance] = useState<BigNumber | undefined>();

  const getBalance = useCallback(async () => {
    const balance = await library.getBalance(account);
    setBalance(balance);
  }, [library, account]);

  useEffect(() => {
    if (!active) {
      openModal();
    } else {
      setBalance(undefined);
      getBalance();
    }
  }, [active]);

  if (!info) {
    return (
      <div>
        <div className={styles.textLink}>...</div>
      </div>
    );
  }

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

  if (balance === undefined) {
    return (
      <div className={styles.textLink} key={account}>
        loading...
      </div>
    );
  }

  return (
    <>
      <Typist
        key={`${count}-${account}`}
        onTypingDone={() => send("WALLET_CONNECT_TYPED")}
      >
        <div className={styles.textLink} key={account}>
          you've connected wallet {account}
        </div>
        <div className={styles.textLink}>
          <button className={styles.flowButton} onClick={buttonAction}>
            connect a different wallet
          </button>
        </div>
        <div className={styles.textLink} key={`${balance.toString()}`}>
          your wallet has {formatEther(balance)} ETH
        </div>
        <div className={styles.textLink} key={count.toString()}>
          you need {formatEther(BigNumber.from(info.salePrice).mul(BigNumber.from(count)))} ETH
          to mint {count.toString()} gms.
        </div>
        <div className={styles.textLink} key={`${balance.toString()}-${count}`}>
          {BigNumber.from(info.salePrice).mul(BigNumber.from(count)).lt(balance)
            ? "you have enough eth"
            : "you need more eth"}
        </div>

        <div className={styles.textLink} key="mint-button">
          {/* <input
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
          /> */}
        </div>
      </Typist>
      {(state === "showMintButton" || state === "minting") && (
        <>
          <button
            key="mint-button-actual"
            className={css([styles.flowButton, styles.buttonOptional])}
            disabled={state === "minting"}
            onClick={() => doMint()}
          >
            {ButtonPrompts[state]}
          </button>
          {error && (
            <div className={styles.textLink} key={error}>
              Error! {error}
            </div>
          )}
        </>
      )}
    </>
  );
};
