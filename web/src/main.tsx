import ReactDOM from "react-dom";
import { Page } from "./Page";
import { Web3ConfigProvider } from "@zoralabs/simple-wallet-provider";

ReactDOM.render(
  <Web3ConfigProvider rpcUrl={undefined} networkId={4}>
    <Page />
  </Web3ConfigProvider>,
  document.getElementById("root")
);
