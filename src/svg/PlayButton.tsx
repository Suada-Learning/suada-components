import React from "react";
import { SvgProps } from "./svgTypes.interface";

const PlayButtonSVG: React.FC<SvgProps> = ({
  className,
  onClick,
  ...props
}) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
      {...props}
    >
      <g id="Play--filled--alt">
        <path
          id="Vector"
          d="M5.99972 24.2863C5.77239 24.2863 5.55438 24.196 5.39363 24.0353C5.23288 23.8745 5.14258 23.6565 5.14258 23.4292V4.57205C5.14257 4.42309 5.18137 4.27671 5.25517 4.14732C5.32897 4.01793 5.43522 3.91001 5.56343 3.83419C5.69165 3.75837 5.83741 3.71727 5.98635 3.71495C6.13529 3.71262 6.28226 3.74915 6.41278 3.82094L23.5556 13.2495C23.6901 13.3235 23.8023 13.4322 23.8804 13.5643C23.9585 13.6964 23.9998 13.8471 23.9998 14.0006C23.9998 14.1541 23.9585 14.3047 23.8804 14.4369C23.8023 14.569 23.6901 14.6777 23.5556 14.7516L6.41278 24.1802C6.28622 24.2498 6.14415 24.2863 5.99972 24.2863Z"
          fill="white"
        />
      </g>
    </svg>
  );
};

export default PlayButtonSVG;
