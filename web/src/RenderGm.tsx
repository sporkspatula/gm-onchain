import { useCallback, useEffect, useState } from "react";
import { getQueryContract } from "./get-query-contract";
import { css } from "@emotion/css";

export const RenderGm = ({ gmId }: { gmId: number }) => {
  const [gm, setGm] = useState<any>();
  const fetchGm = useCallback(
    async (gmId) => {
      const queryContract = getQueryContract();
      const token = await queryContract.tokenURI(gmId);
      const data = Buffer.from(
        token.substring(token.indexOf(",") + 1),
        "base64"
      ).toString("utf-8");
      const tokenInfo = JSON.parse(data);
      setGm(tokenInfo);
    },
    [setGm]
  );
  useEffect(() => {
    fetchGm(gmId);
  }, []);

  if (!gm) {
    return <div>...</div>;
  }
  return (
    <div
      className={css`
        a {
          color: inherit;
          padding-top: 4px;
          display: block;
        }
      `}
    >
      <img
        className={css`
          max-width: 20vw;
          margin-top: 4px;
        `}
        alt={`GM #${gmId}`}
        src={gm.image}
      />
      <a href={`/nft/${gmId}`} target="_blank">
        view GM
      </a>
    </div>
  );
};
