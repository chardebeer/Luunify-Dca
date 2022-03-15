import styled from 'styled-components'
import {StyledNextButton} from '../components/styles/NextButton.style'
import {StyledExitButton} from '../components/styles/ExitButton.style'
import {StyledModal} from '../components/styles/Modal.style'

import { GlobalStyles } from '../components/styles/GlobalStyles.style'
import Link from 'next/link';

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

export default function NewAccount2(props) {


return (
    
    <Container>
        <GlobalStyles/>
        <Link href="/signin">
        <StyledExitButton/>
        </Link>
        <h6>Step #2</h6>
   <h2>Confirmation</h2>
   <Line/>
   <StyledModal modalText={"Hello"}></StyledModal>
   
    <Link href="/newaccount">
    <StyledNextButton buttonLabel={"Next >"}/>
    </Link>
    </Container>
    )
}