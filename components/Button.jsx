import React from 'react'

function Button({className,theme,buttonLabel,onClick}) {

return (<button className={className} theme={theme} onClick={onClick}>{buttonLabel}</button>)

}

export default Button 