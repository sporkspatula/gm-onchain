import Typist from "react-typist";
import * as styles from "./styles";

export const Disclaimer = ({ send }) => {


  return (
    <Typist onTypingDone={() => send("DISCLAIMER_TYPED")}>
      <div className={styles.textLink}>time to mint!</div>
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
        each mint costs <strong>0.042</strong> eth with a total supply of{" "}
        <strong>6969</strong> gms.
      </div>
      <div className={styles.textLink}>how many do you want to mint?</div>
    </Typist>
  );
};
