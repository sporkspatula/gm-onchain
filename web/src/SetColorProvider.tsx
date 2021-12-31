import { useMemo } from "react";
import { css } from "@emotion/css";

const randrange = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const SetColorProvider = ({ children }: any) => {
  const [color1, color2] = useMemo(() => {
    const hue1 = randrange(0, 360);
    const hue2 = randrange(0, 360);
    const s1 = randrange(22, 111);
    const s2 = randrange(22, 120);
    const lightnessAdd = randrange(0, 20);
    let lightness1 = 20 + lightnessAdd;
    if (randrange(1, 3) == 1) {
      lightness1 = 80 + lightnessAdd;
    }
    const lightness2 = 100 - lightness1;
    return [
      `hsl(${hue1}, ${s1}%, ${lightness1}%)`,
      `hsl(${hue2}, ${s2}%, ${lightness2}%)`,
    ];
  }, []);
  return (
    <div
      className={css`
        --bg-color: ${color1};
        --text-color: ${color2};
        background: ${color1};
        min-height: 100vh;
        min-width: 100vh;
        color: var(--text-color);
        font-family: "DM Mono", monospace;
      `}
    >
      {children}
    </div>
  );
};
