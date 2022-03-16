import React from "react";
import styled from "styled-components";
import { StyledExitButton } from "../components/styles/ExitButton.style";
import { StyledConfirmationModal } from "../components/styles/ConfirmationModal.style";
import { GlobalStyles } from "../components/styles/GlobalStyles.style";
import Link from "next/link";

const Container = styled.div`
  text-align: center;
  height: 100vh;
  width: 100vw;
  color: #777;
  background: #666666;
  font-family: montserrat, arial;
  display: "flex";
  justify-content: "center";
  align-items: "center";
`;

export default function Confirmationpopup() {
  return (
    <Container>
      <GlobalStyles />
      <Link href="/signin" passHref={true}>
        <a>
          <StyledExitButton />
        </a>
      </Link>
      <StyledConfirmationModal
        modalText={"Welcome Ejoke"}
        modalText2={"Welcome Video / Tutorial of Tool"}
      />
    </Container>
  );
}
