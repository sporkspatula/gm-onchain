import { useCallback, useEffect, useState } from "react";
import Typist from "react-typist";
import { getMintInfo, getQueryContract } from "./get-query-contract";
import * as styles from "./styles";
import { formatEther } from "@ethersproject/units";
import { css } from "@emotion/css";
import { NETWORK_ID } from "./env-vars";

export const Disclaimer = ({ send }) => {
  const [info, setInfo] = useState<any>(undefined);
  console.log({info})
  const getPrice = useCallback(async () => {
    try {
      const newInfo = await getMintInfo();
      if (!newInfo) {
        throw new Error('not found');
      }
      console.log({newInfo});
      setInfo(newInfo);
      send("UPDATE_INFO", { value: newInfo });
      console.log("update_info");
    } catch (e) {
      setInfo({ salePrice: '0', mintsLeft: 6969, maxSupply: 6969 });
    }
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

  console.log(info, NETWORK_ID)

  if (info === undefined) {
    return <div className={styles.textLink}>...</div>;
  }

  if (info?.salePrice === '0') {
    return (
      <Typist>
        {mintInfo}
        <div className={styles.textLink}>
          mint is not open yet. please follow our twitter for updates
        </div>
      </Typist>
    );
  }

  return (
    <Typist onTypingDone={() => send("DISCLAIMER_TYPED")}>
      <div className={styles.textLink} key="mint">
        {info?.salePrice === '0'
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
