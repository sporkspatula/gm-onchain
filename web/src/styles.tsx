import { css } from "@emotion/css";

export const gmBox = css`
  white-space: pre;
`;

export const textLink = css`
  display: block;
  line-height: 24px;
  &:before {
    content: "> ";
  }
`;

export const flowButton = css`
  color: var(--text-color);
  background: transparent;
  border: 2px solid var(--text-color);
  cursor: pointer;
  font: inherit;
  margin: 4px;
  padding: 2px 6px;
`;

export const wrapper = css`
  font-family: "DM Mono", monospace;
  padding: 18px;
`;

export const buttonOptional = css`
  animation: fadeInDelay 6s;
  @keyframes fadeInDelay {
    0% {
      opacity: 0;
    }
    70% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const cleanInput = css`
  font-family: inherit;
  background: transparent;
  border: 2px solid var(--text-color);
  padding: 4px;
  top: -1px;
  display: inline-block;
  position: relative;
`;

export const buttonSelected = css`
  font-weight: 600;
  border-color: var(--text-color);
`;
