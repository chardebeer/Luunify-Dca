import React from "react";
import { StyledGetStartedButton } from "../components/styles/GetStartedButton.style";
import StyledConfirmationIcon from "./icons/ConfirmationIcon";
import Link from "next/link";

export default function ConfirmationModal({
  className,
  modalText,
  modalText2,
}) {
  return (
    <div className={className}>
      <StyledConfirmationIcon />
      <h1>{modalText}</h1>
      <h5>{modalText2}</h5>
      <div></div>
      <Link href="/dashboard" passHref={true}>
        <a>
          <StyledGetStartedButton buttonLabel={"✓ Get Started"} />
        </a>
      </Link>
    </div>
  );
}
