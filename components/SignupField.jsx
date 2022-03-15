import React from 'react'

function SignupField(props) {
    
    return (
    <input placeholder={props.placeholder} className={props.className} id={props.id} type={props.type} value={props.value}/>
    
    )
    }

    export default SignupField;