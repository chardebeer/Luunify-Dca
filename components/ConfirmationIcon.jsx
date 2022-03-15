import Image from 'next/image'
import React from 'react'
import iconsrc from "/public/confirmationicon.png";
import styled from 'styled-components'


const ImageHolder=styled.div`
    background: white;
    border-radius:100%;
    width:110px;
    height:110px;
    display: block;
    margin: 10px auto;
    box-shadow: 1px 10px 10px #aaaaaa;
    `   

export default function ConfirmationIcon(props) {
    return (
    <ImageHolder>
    <Image alt="Confirmation Icon" src={iconsrc} />
    </ImageHolder>
    )
}