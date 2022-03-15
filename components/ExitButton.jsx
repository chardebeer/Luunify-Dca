import React from 'react'
import {useRouter} from 'next/router'




export default function ExitButton(props) {
    const router = useRouter();
  
    function backToSigninForm() {
        router.replace("/")
      }
    return (
    <button onClick={backToSigninForm}>X</button>
    )
    }