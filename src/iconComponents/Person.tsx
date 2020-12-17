import React from "react";

const SvgWrapper = (props: React.SVGAttributes<SVGSVGElement>) => {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="30" cy="30" r="30" fill="black" />
      <path
        d="M18 44.3C18 37.5069 23.5069 32 30.3 32V32C37.0931 32 42.6 37.5069 42.6 44.3V45H18V44.3Z"
        fill="white"
      />
      <circle cx="30.3" cy="22.5" r="7.5" fill="white" />
    </svg>
  );
};

export default SvgWrapper;
