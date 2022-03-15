//import LoginButton from '../components/Button'
//import SignupButton from '../components/SignupButton'
//import {useRouter} from 'next/router'
import styled from 'styled-components'
import {StyledContainer} from '../components/styles/Container.style'
import {StyledButton} from '../components/styles/Button.style'
import {StyledExitButton} from '../components/styles/ExitButton.style'
import { GlobalStyles } from '../components/styles/GlobalStyles.style'
import Logo from '../components/Logo'
import Link from 'next/link';


const Container=styled.div`
background: linear-gradient(180deg, rgba(94,93,93,1) 0%, rgba(0,0,0,1) 100%); 
text-align: center;
height:100vh;
width:100vw;
color:#FFFFFF;
padding:20px; 
font-family:montserrat, sans-serif;
    `

const Line=styled.hr`
width:35px;
height:8px;
background:white;
border:#FFFFFF;
opacity:0.5;
`

export default function Signin(props) {
  //  const router = useRouter();
  // function gotoSignupForm() {
  //   router.replace("/signupform")
  // }
  // function backToSigninForm() {
  //   router.replace("/")
  // }

return (
   
    <Container>
        <GlobalStyles/>
       
        <Link href="/signin">
        <StyledExitButton/>
        </Link>
    <Logo/>
    <h1> Welcome to MuunBot </h1>
    <Line/>
    <StyledButton buttonLabel={"Sign In"}></StyledButton>
    <h3>or</h3>
    <Link href="/signupform">
    <StyledButton buttonLabel={"Sign Up"} ></StyledButton>
    </Link>
   
    </Container>
    
    
    )
}