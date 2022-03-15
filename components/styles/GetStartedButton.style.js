import styled from 'styled-components'
import GetStartedButton from '../GetStartedButton'

export const StyledGetStartedButton=styled(GetStartedButton)`
font-family:montserrat,arial;
border-radius: 25px;
margin: 0 1em;
padding: 0.25em 1em;
margin:10px;
background-color: rgba(255,255,255,0);
color: black;
border: solid 3px transparent;
  background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(180deg, #78e4ff, #ff48fa);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px #fff inset;
width:120px;
height:35px;

&:hover{
    box-shadow: none;
    color: white;
  }

&: focus{
  background: white;
  color: #222222;
border: 2px solid grey;
}
`;  