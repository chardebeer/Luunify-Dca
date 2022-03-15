import React from 'react'
import {StyledNextButton} from '../components/styles/NextButton.style'
import Link from 'next/link';


function Modal({className,modalText,checkEmail}) {

return (<div className={className} >
    <div>
    </div>
   <h1>
   {modalText}
   </h1>
    <h5>{checkEmail}</h5>
   
     
    
    <Link href="/newaccount2">
    <StyledNextButton buttonLabel={"Next >"}/>
    </Link>
    
    </div>)

}

export default Modal 