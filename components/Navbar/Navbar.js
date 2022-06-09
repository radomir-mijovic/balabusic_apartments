import React from 'react';
import Image from "next/image";
import {NavbarStyled} from "./NavbarStyled";

const Navbar = () => {
    return (
        <NavbarStyled>
            <h3>Budva 30C</h3>
            <h1>Balabusic</h1>
            <h3>info@balabusic.com</h3>
        </NavbarStyled>
    );
};

export default Navbar;