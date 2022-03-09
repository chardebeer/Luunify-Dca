import styled from 'styled-components'
import LoginButton from '../components/LoginButton'
import SignupButton from '../components/SignupButton'
import ExitButton from '../components/ExitButton'
import Logo from '../components/Logo'
import {useRouter} from 'next/router'
import Link from 'next/link';


const Container=styled.div`
background: #222222;
text-align: center;
height:100%;
color:#FFFFFF;
padding:20px; 
`
const Line=styled.hr`
width:35px;
height:8px;
background:white;
border:#FFFFFF;
opacity:0.5;
`

export default function Signin() {
    const router = useRouter();

return (
   
    <Container>
         <ExitButton/>
    <Logo/>
    <h1> Welcome to MuunBot </h1>
    <Line/>
    <LoginButton />
    <h3>or</h3>
    <Link href="pages/signupform2">
    <SignupButton/>
    </Link>
    </Container>
    )
}