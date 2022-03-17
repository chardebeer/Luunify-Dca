import React from "react";

export default function BalanceModal({
  className,
  headerText,
  walletTotal,
  bitValue,
}) {
  return (
    <div className={className}>
      <span>
        <h2>{headerText}</h2>
        <button>+</button>
      </span>
      <h3>{walletTotal}</h3>
      <div>
        <h6>{bitValue}</h6>
      </div>
      <span>
        <button>+</button>
        <button>-</button>
      </span>
    </div>
  );
}
