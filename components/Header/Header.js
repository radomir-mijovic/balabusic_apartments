import React from 'react';
import Image from "next/image";
import {HeaderStyled} from "./HeaderStyled";
import {motion} from "framer-motion";

const Header = () => {
    return (
        <HeaderStyled>
            <motion.div
                animate={{opacity: 1, x: 1, delay: .5}}
                transition={{duration: .5}}
                initial={{opacity: 0, x: -50}}
                className="header-text-box">
                <h1>Balabusic Apartments</h1>
                <h2>amazing apartments for<br/> the free spirited traveler</h2>
            </motion.div>
            <motion.div
                animate={{opacity: 1, x: 1, delay: .5}}
                transition={{duration: .5}}
                initial={{opacity: 0, x: 50}}
                className="header-image-box">
                <Image
                    src='/images/hotel1.jpg'
                    width='500' height='500'
                    objectFit="cover"
                    layout='fill'
                    alt='cover-img'/>
            </motion.div>
        </HeaderStyled>
    );
};

export default Header;