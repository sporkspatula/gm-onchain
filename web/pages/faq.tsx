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
        <h2>FAQ</h2>
        <p>CONTENT</p>
      </div>
    </>
  );
}
