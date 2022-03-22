import * as React from "react";

function ActivityIcon(props) {
  return (
    <svg
      width={33}
      height={33}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.8 17.615a1.187 1.187 0 0 0 1.062-1.718L16.614 11.4V8.12a7.12 7.12 0 1 0-14.24 0v3.28L.126 15.897a1.187 1.187 0 0 0 1.062 1.718H7.12a2.374 2.374 0 0 0 4.746 0h5.934Zm-3.375-2.198h1.75l-1.75-3.15V8.404h-.015a4.924 4.924 0 1 0-9.82 0h-.014v3.849h-.003l-1.758 3.164h1.76v.007h9.85v-.007Z"
        fill="#222"
        fillOpacity={0.5}
      />
    </svg>
  );
}

export default ActivityIcon;
