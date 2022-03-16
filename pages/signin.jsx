//import LoginButton from '../components/Button'
//import SignupButton from '../components/SignupButton'
//import {useRouter} from 'next/router'
import styled from "styled-components";
import { StyledContainer } from "../components/styles/BlackContainer.style";
import { StyledButton } from "../components/styles/Button.style";
import { StyledExitButton } from "../components/styles/ExitButton.style";
import { GlobalStyles } from "../components/styles/GlobalStyles.style";
import Logo from "../components/Logo";
import Link from "next/link";
import React from "react";

const Line = styled.hr`
  width: 35px;
  height: 8px;
  background: white;
  border: #ffffff;
  opacity: 0.5;
`;

export default function Signin() {
  //  const router = useRouter();
  // function gotoSignupForm() {
  //   router.replace("/signupform")
  // }
  // function backToSigninForm() {
  //   router.replace("/")
  // }

  return (
    <StyledContainer>
      <GlobalStyles />

      <Link href="/signin" passHref={true}>
        <a>
          <StyledExitButton />
        </a>
      </Link>
      <Logo />
      <h1> Welcome to MuunBot </h1>
      <Line />
      <StyledButton buttonLabel={"Sign In"} />
      <h3>or</h3>
      <Link href="/signupform" passHref={true}>
        <StyledButton buttonLabel={"Sign Up"} />
      </Link>
    </StyledContainer>
  );
}
