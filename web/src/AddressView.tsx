import { useENSAddress } from "@zoralabs/nft-hooks";


export const sliceAddress = (address: string) => {
  if (!address) {
    return <>?</>;
  }
  const showChars = 4;
  const PREFIX_ADDRESS = "0x";
  const addressFirst = address.slice(0, showChars + PREFIX_ADDRESS.length);
  const addressLast = address.slice(address.length - showChars);
  return `${addressFirst}…${addressLast}`;
};

export const AddressView = ({ address }) => {
  const ensResult = useENSAddress(address);
  if (ensResult.error || !ensResult.data) {
    return <>{sliceAddress(address)}</>;
  }
  return <>{ensResult.data}</>;
};
