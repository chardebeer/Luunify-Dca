import React from "react";

export default function GraphModal({ className, headerText, graphX, graphY }) {
  return (
    <div className={className}>
      <span>
        <h2>{headerText}</h2>
      </span>
      <h6>{graphX}</h6>
      <div>
        <h6>{graphY}</h6>
      </div>
    </div>
  );
}
