import React from "react";

function Modal({ className, modalText, checkEmail, children }) {
  return (
    <div className={className}>
      <div></div>
      <h1>{modalText}</h1>
      <h5>{checkEmail}</h5>
      {children}
    </div>
  );
}

export default Modal;
