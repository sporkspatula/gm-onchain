import ReactDOM from "react-dom";
import { Page } from "./Page";
import { Web3ConfigProvider } from "@zoralabs/simple-wallet-provider";
import { SetColorProvider } from "./SetColorProvider";
import { InfoLayout } from "./InfoLayout";

console.log(process.env.RPC_URL, process.env.NETWORK_ID);

const networkId = parseInt(process.env.NETWORK_ID || "1");
const rpcUrl = process.env.RPC_URL;

ReactDOM.render(
  <Web3ConfigProvider rpcUrl={rpcUrl} networkId={networkId}>
    <SetColorProvider>
      <InfoLayout>
        <Page />
      </InfoLayout>
    </SetColorProvider>
  </Web3ConfigProvider>,
  document.getElementById("root")
);
