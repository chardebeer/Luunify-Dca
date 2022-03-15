import React from 'react'
import {StyledGetStartedButton} from '../components/styles/GetStartedButton.style'
import StyledConfirmationIcon from './ConfirmationIcon'
import Link from 'next/link';


function ConfirmationModal({className,modalText,modalText2}) {

return (<div className={className} >
   <StyledConfirmationIcon/>
   <h1>
   {modalText}
   </h1>
    <h5>{modalText2}</h5>
    <div>
     
    </div>
    <Link href="/newaccount2">
    <StyledGetStartedButton buttonLabel={"✓ Get Started"}/>
    </Link>
    </div>)

}

export default ConfirmationModal 