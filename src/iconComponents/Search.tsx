import React from "react";

const Search = (props: React.SVGAttributes<SVGSVGElement>) => {
  return (
    <svg
      width="58"
      height="58"
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="25" cy="25" r="24" stroke="black" strokeWidth="2" />
      <rect
        x="40"
        y="43.5355"
        width="5"
        height="20"
        transform="rotate(-45 40 43.5355)"
        fill="black"
      />
    </svg>
  );
};

export default Search;
