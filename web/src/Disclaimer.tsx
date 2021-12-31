import { useCallback, useEffect, useState } from "react";
import Typist from "react-typist";
import { getQueryContract } from "./eth-utils";
import * as styles from "./styles";
import { formatEther } from "@ethersproject/units";

export const Disclaimer = ({ send }) => {
  const [info, setInfo] = useState<any>(undefined);
  const getPrice = useCallback(async () => {
    const queryContract = getQueryContract();
    const [maxSupply, mintsLeft, salePrice] = await Promise.all([
      queryContract.maxSupply(),
      queryContract.mintsLeft(),
      queryContract.salePrice(),
    ]);
    const newInfo = { maxSupply, mintsLeft, salePrice };
    setInfo(newInfo);
    send("UPDATE_INFO", { value: newInfo });
    console.log('update_info')
  }, [getQueryContract, setInfo]);
  useEffect(() => {
    getPrice();
  }, []);

  const mintInfo = (
    <div>
      <div className={styles.textLink}>
        this is a fully immutable on-chain NFT.
      </div>
      <div className={styles.textLink}>
        there is no roadmap, discord, or presale, only vibes
      </div>
      <div className={styles.textLink}>
        {" "}
        and (maybe?) access to future mints
      </div>
      <div className={styles.textLink}>
        each mint costs{" "}
        <strong>
          {info?.salePrice ? formatEther(info.salePrice) : "0.069"}
        </strong>{" "}
        eth with a total supply of{" "}
        <strong>{info?.maxSupply.toString() || "?"}</strong> gms.
      </div>
    </div>
  );

  if (info === undefined) {
    return <div className={styles.textLink}>...</div>;
  }

  if (info?.salePrice === 0) {
    return <Typist>{mintInfo}</Typist>;
  }

  return (
    <Typist onTypingDone={() => send("DISCLAIMER_TYPED")}>
      <div className={styles.textLink} key="mint">
        {info?.salePrice.toNumber() === 0
          ? "mint not opened yet"
          : "time to mint!"}
      </div>
      {mintInfo}
      <div className={styles.textLink}>
        there are <strong>{info.mintsLeft.toString()} available</strong> NFTs to
        mint
      </div>
      <div className={styles.textLink}>how many do you want to mint?</div>
    </Typist>
  );
};
