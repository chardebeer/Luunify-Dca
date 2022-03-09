import styled from 'styled-components'
import {useRouter} from 'next/router'


export default function SignupButton() {
 
  const router = useRouter();
  function gotoSignupForm() {
    router.replace("/signupform")
  }

const Button=styled.button`
background: transparent;
font-family:montserrat;
border-radius: 25px;
border: 2px solid white;
color: ${props => props.theme.fg};

background: ${props => props.theme.bg};
width:30%;
height:35px;
`;
Button.defaultProps = {
    theme: {
      fg: "grey",
      bg:"white"
    }
  }

 const invertTheme = ({ fg, bg }) => ({
  fg: bg,
  bg: fg
});

    return (<Button onClick={gotoSignupForm}>Sign Up</Button>)
    }