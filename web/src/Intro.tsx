import Typist from "react-typist";
import * as styles from './styles';

export const Intro = ({ send }) => (
  <Typist avgTypingDelay={12} stdTypingDelay={8} onTypingDone={() => send("LOAD_COMPLETED")}>
    <div className={styles.gmBox}>
      <div className={styles.textLink}>
        &#x000A0;&#x000A0;&#x000A0;__&#x000A0;&#x000A0;&#x000A0;&#x000A0;___&#x000A0;___&#x000A0;&#x000A0;
      </div>
      <div className={styles.textLink}>
        &#x000A0;&#x0002F;&#x00027;_&#x000A0;`\&#x0002F;&#x00027;&#x000A0;_&#x000A0;`&#x000A0;_&#x000A0;`\
      </div>
      <div className={styles.textLink}>
        &#x00028;&#x000A0;&#x00028;_)&#x000A0;||&#x000A0;&#x00028;&#x000A0;)&#x000A0;&#x00028;&#x000A0;)&#x000A0;|
      </div>
      <div className={styles.textLink}>
        `\__&#x000A0;&#x000A0;|&#x00028;_)&#x000A0;&#x00028;_)&#x000A0;&#x00028;_)
      </div>
      <div className={styles.textLink}>
        &#x00028;&#x000A0;)_)&#x000A0;|&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;
      </div>
      <div className={styles.textLink}>
        &#x000A0;\___&#x0002F;&#x00027;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;&#x000A0;
      </div>
    </div>
    <div className={styles.textLink}>now say it back:</div>
  </Typist>
);