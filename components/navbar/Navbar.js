import React from 'react';
import Image from "next/image";
import {NavbarStyled} from "./NavbarStyled";

const Navbar = () => {
    return (
        <NavbarStyled>
            <Image
                src="/logo.png"
                objectFit="cover"
                height={120}
                width={220}
                alt='balabusic logo'/>
            {/*<h2>Balabusic Apartments</h2>*/}
        </NavbarStyled>
    );
};

export default Navbar;