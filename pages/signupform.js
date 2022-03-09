import styled from 'styled-components'
import SignupField from '../components/SignupField'
import Logo from '../components/Logo'
import SignupButton from '../components/SignupButton'
import ExitButton from '../components/ExitButton'

import {useRouter} from 'next/router'

const Container=styled.div`
    text-align: center;
    height:100%;
    color:#FFFFFF;
    padding:20px; 
    background: linear-gradient(
        180deg,
        hsl(180, 80%, 65%),
        hsl(255, 98%, 60%)
      );
      height: 100%;
      font-family:montserrat;
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
        <ExitButton/>
        <Logo/>
   <h2>READY TO AUTOMATE?</h2>
   <Line/>
   <form>
    <SignupField id={"username"} type={typeText} value={"username"}/>
    <SignupField id={"email"} type={typeEmail} value={"email"}/>
    <SignupField id={"DOB"} type={typeDate}/>
    <SignupField id={"password"} type={typePassword} value={"password"}/>
    <p style={{opacity:0.6}}>I agree to terms and conditions</p>
    <SignupButton type={typeSubmit}/>
    </form>
    </Container>
    )
}