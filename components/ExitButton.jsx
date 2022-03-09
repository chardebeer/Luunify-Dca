import styled from 'styled-components'
import {useRouter} from 'next/router'


const Button=styled.button`
    opacity:0.4;
    font-family:montserrat;
    color: black;
    padding: 0.1em 1em;
    margin:10px;
    float:right;
    height:35px;
    position:fixed;
    `

export default function ExitButton(props) {
    const router = useRouter();
  
    function backToSigninForm() {
        router.replace("/")
      }
    return (
    <Button onClick={backToSigninForm}>X</Button>

   
    
    )
    }