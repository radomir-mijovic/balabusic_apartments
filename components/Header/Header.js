import React from 'react';
import Image from "next/image";
import {HeaderStyled} from "./HeaderStyled";

const Header = () => {
    return (
        <HeaderStyled>
            <div className="header-text-box">
                <h1>Balabusic Apartments</h1>
                <h2>amazing apartments for<br/> the free spirited traveler</h2>
            </div>
            <div className="header-image-box">
                <Image
                    src='/images/hotel1.jpg'
                    width='500' height='500'
                    objectFit="cover"
                    layout='fill'
                    alt='cover-img'/>
            </div>
        </HeaderStyled>
    );
};

export default Header;