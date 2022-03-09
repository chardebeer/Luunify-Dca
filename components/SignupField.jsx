import styled from 'styled-components'

const SignUpInput=styled.input`
    background: #FFFFFF;
    opacity:0.5;
    font-family:montserrat;
    border-radius: 25px;
    border: 2px solid white;
    color: grey;
    padding: 0.1em 1em;
    margin:10px;
    width:30%;
    height:35px;
    font-weight: 600;
    `

export default function SignupField(props) {
    
    return (<div>
    <SignUpInput id={props.id} type={props.type} value={props.value}/>
    </div>
    
    
    )
    }