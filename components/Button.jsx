import React from "react";

export default function Button({ className, theme, buttonLabel, onClick }) {
  return (
    <button className={className} theme={theme} onClick={onClick}>
      {buttonLabel}
    </button>
  );
}
