import { css } from "@emotion/css";
import HeadInfo from "../src/HeadInfo";

export default function FAQ({}: any) {
  return (
    <>
      <HeadInfo title="FAQ" description="FAQ" />
      <div
        className={css`
          color: var(--text-color);
          margin: 5%;
          .dark {
            opacity: 0.5;
          }
          .link-first {
            margin-top: 14px;
          }
          font-family: DM Mono;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 32px;

          /* identical to box height, or 200% */
          font-feature-settings: "zero" on;

          a {
            text-decoration: none;
            color: inherit;
          }
        `}
      >
        <h1>Gm</h1>
          <h2><b>What is gm-onchain?</b></h2>
          gm-onchain is an onchain art project exploring the boundaries of what sort of nft's can be rendered on chain. <br/> <br/>

          There are 6969 total gms. <br/>
          69 unique rendering styles.  <br/>
          69 + 42 unique colors for backgorund and font <br/>
          Some <b>rare</b> effects. <br/>
        Mint Price: <b>0.042 eth</b><br/><br/>



          <h2><b>Nerdy Details</b></h2>
          gm's are generated based on a 32 byte seed that is created at mint. That is the only piece of storage on the contract. <br/>
          Each gm's metadata is rendered completely onchain as a base64 encoded data uri. The image is a base64 encoded svg that
          is generated and rendered fully on chain. <br/> <br/>

          To generate the svg there are 4 contracts: <br/>

        <ul>
          <div className={css`li {padding:10;text-align:left;margin:10px 0;}`}>
          <li>CourierFont.sol: Contract that contains a bold monospace font used to render the ascii art.</li>
          <li>GmData1.sol: Contract that contains compressed ascii art styles</li>
          <li>GmData2.sol: Contract that contains more compressed ascii art styles</li>
          <li>GmRenderer.sol: Contract that contains logic to generate and encode the svg based on a seed</li>
          </div>
        </ul>
      <br/>







        <h2>Who is behind the project?</h2>
        <a href="https://twitter.com/brxckinridge">Breck Stodghill</a> and <a href="https://twitter.com/isiain">Iain Nash</a> started working on the project to explore what could be done with nfts rendered fully on chain.
        <br/>
        <br/>

        <h2>Is there a roadmap?</h2>
        No roadmap, no discord, just vibes. However, if we choose to make new onchain rendered nfts, it is likely gm holders will get access.
        <br/>
        <br/>

        <h2>Shoutouts</h2>
        <ul>
          <div className={css`li {padding:10;text-align:left;margin:10px 0;}`}>
          <li><a href="https://twitter.com/dhof">Dom Hoffman</a> -- for all the onchain rendered nfts he's done and inspiration he has given the community.</li>
          <li><a href="https://github.com/patorjk">Patorjk</a> -- for building a very useful js figlet <a href="https://github.com/patorjk/figlet.js">library</a> which we used to generate the gm ascii art</li>
          <li><a href="https://github.com/meodai">meodai</a> -- for building a very useful color name <a href="https://github.com/meodai/color-names">repositoy</a> and api which we used to generate the sampled color names</li>
          </div>
        </ul>
      </div>
    </>
  );
}
