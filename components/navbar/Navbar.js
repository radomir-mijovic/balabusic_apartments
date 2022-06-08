import React from 'react';
import Image from "next/image";
import {NavbarStyled} from "./NavbarStyled";

const Navbar = () => {
    return (
        <NavbarStyled>
            <h3>Budva 30C</h3>
            <Image
                src="/logo.png"
                objectFit="scale-down"
                height={120}
                width={220}
                alt='balabusic logo'/>
            <h3>info@balabusic.com</h3>
            {/*<h2>Balabusic Apartments</h2>*/}
        </NavbarStyled>
    );
};

export default Navbar;