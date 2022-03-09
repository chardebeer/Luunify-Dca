import Image from 'next/image'
import iconsrc from "/public/MuunLogo.ico";

export default function Logo() {
    return <Image alt="Logo PlaceHolder" src={iconsrc} />
}