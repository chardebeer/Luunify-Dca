import styled from 'styled-components'
//import SignupField from '../components/SignupField'
//import Logo from '../components/Logo'
//import SignupButton from '../components/SignupButton'
//import {useRouter} from 'next/router'
//import ExitButton from '../components/ExitButton'
import {StyledNextButton} from '../components/styles/NextButton.style'
import {StyledButton} from '../components/styles/Button.style'
import {StyledLogo} from '../components/styles/Logo.style'
import {StyledExitButton} from '../components/styles/ExitButton.style'
import { GlobalStyles } from '../components/styles/GlobalStyles.style'

import Link from 'next/link';

import {StyledSignUpField} from '../components/styles/SignupField.style'
import {StyledContainer} from '../components/styles/Container.style'

const Container=styled.div`
    text-align: center;
    height:100vh;
    width:100vw;
    color:#FFFFFF;
    padding:20px; 
    background: linear-gradient(
        180deg,
        hsl(180, 80%, 65%),
        hsl(255, 98%, 60%)
      );
      font-family:montserrat, arial;
    `

    const Line=styled.hr`
    width:35px;
    height:8px;
    background:white;
    border:#FFFFFF;
    opacity:0.5;
    `

export default function SignupForm() {
    const typeEmail="email";
    const typeText="text";
    const typeDate="date";
    const typePassword="password";
    const typeSubmit="submit";



return (
    
    <Container>
        <GlobalStyles/>
        <Link href="/signin">
        <StyledExitButton/>
        </Link>
        <StyledLogo/>
   <h2>READY TO AUTOMATE?</h2>
   <Line/>
   <form>
    <StyledSignUpField id={"username"} type={typeText} placeholder={"username"}/>
    <StyledSignUpField id={"email"} type={typeEmail} placeholder={"email"}/>
    <StyledSignUpField id={"DOB"} type={typeDate} placeholder={"Birth Date"}/>
    <StyledSignUpField id={"password"} type={typePassword} placeholder={"password"}/>
    <p style={{opacity:0.6}}>I agree to terms and conditions</p>
    <StyledButton buttonLabel={"Submit"} type={typeSubmit}/>
    </form>
    <Link href="/newaccount">
    <StyledNextButton buttonLabel={"Next >"}/>
    </Link>
    </Container>
    )
}