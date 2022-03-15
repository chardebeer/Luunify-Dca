import styled from 'styled-components'
import Button from '../Button'

export const StyledButton=styled(Button)`
font-family:montserrat,arial;
border-radius: 25px;
margin: 0 1em;
padding: 0.25em 1em;
margin:10px;
background-color: rgba(255,255,255,0);
color: #ffffff;
border: 2px solid #ffffff ;
width:30%;
height:35px;
&: hover{
  background: white;
  color: #222222;
border: 2px solid grey;
}
&: focus{
  background: white;
  color: #222222;
border: 2px solid grey;
}
`; 

Button.defaultProps = {
    theme: {
      fg: "white",
      bg:"grey"
    }
  }

 const invertTheme = ({ fg, bg }) => ({
  fg: bg,
  bg: fg
});