import { type ReactNode } from "react";

type ImageType = {
    src : string;
    alt: string;
}

type HeaderProps = {
    image: ImageType;
    children: ReactNode;
}

function Header({image, children}: HeaderProps) {
  return (
    <div>
        <img src={image.src} alt={image.alt} />
        {children}
    </div>
  )
}

export default Header