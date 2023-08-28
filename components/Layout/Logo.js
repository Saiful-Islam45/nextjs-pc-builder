import React from "react";

const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="150"
      height="50"
      viewBox="0 0 150 50"
      fill="none"
    >
      <style>
        {`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        `}
      </style>
      <text
        x="0"
        y="35"
        fontFamily="Arial, sans-serif"
        fontSize="24"
        fill="purple"
        style={{ animation: "pulse 1s infinite" }}
      >
        PC Builder
      </text>
    </svg>
  );
};

export default Logo;
