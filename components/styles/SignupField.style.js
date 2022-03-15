import styled from 'styled-components'
import SignupField from '../SignupField'


export const StyledSignUpField=styled(SignupField)`
    background: #FFFFFF;
    background-color: rgba(255,255,255,0.3);
    font-family:montserrat,arial;
    border-radius: 25px;
    border: none;
    color: white;
    padding: 0.1em 1em;
    display:block;
    margin:12px auto;
    align-items:center;
    box-sizing: border-box;
    width:30%;
    height:38px;
    font-weight: 600;
    &: focus{
        background-color: rgba(255,255,255,0.5)
      }
    `   