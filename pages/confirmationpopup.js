import styled from 'styled-components'
import {StyledExitButton} from '../components/styles/ExitButton.style'
import {ConfirmationModal} from '../components/styles/ConfirmationModal.style'
import { GlobalStyles } from '../components/styles/GlobalStyles.style'
import Link from 'next/link';
import {StyledContainer} from '../components/styles/Container.style'

const Container=styled.div`
    text-align: center;
    height:100vh;
    width:100vw;
    color:#777;
    background: #666666;
    font-family:montserrat, arial;
    display: 'flex';
    justify-content: 'center';
    align-items: 'center';
    `

export default function Confirmationpopup(props) {


return (
    
    <Container>
        <GlobalStyles/>
        <Link href="/signin">
        <StyledExitButton/>
        </Link>
   <ConfirmationModal modalText={"Welcome Ejoke"} modalText2={"Welcome Video / Tutorial of Tool"}/>
    </Container>
    )
}