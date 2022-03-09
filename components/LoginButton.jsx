import styled from 'styled-components'

const Button=styled.button`
font-family:montserrat;
border-radius: 25px;
margin: 0 1em;
padding: 0.25em 1em;
margin:10px;
color: ${props => props.theme.fg};
border: 2px solid ${props => props.theme.fg};
background: ${props => props.theme.bg};
width:30%;
height:35px;
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

export default function LoginButton() {

return (<Button>Sign In</Button>)
}