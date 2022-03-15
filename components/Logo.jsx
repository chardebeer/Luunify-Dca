import Image from 'next/image'
import React from 'react'
import iconsrc from "/public/MuunLogo.ico";

export default function Logo(props) {
    return <Image alt="Logo PlaceHolder" src={iconsrc} />
}