import React from 'react';
import Image from "next/image";
import {HeaderStyled} from "./HeaderStyled";
import {motion} from "framer-motion";
import mainImg from "../../public/images/main_img2.jpg"

const Header = () => {
    return (
        <HeaderStyled>
            <motion.div
                animate={{opacity: 1, x: 1}}
                transition={{duration: .5, delay: .5}}
                initial={{opacity: 0, x: -50}}
                className="header-text-box">
                <h1>Balabusic Apartments</h1>
                <h2>amazing apartments for<br/> the free spirited traveler</h2>
                <p>Since 1983</p>
            </motion.div>
            <motion.div
                animate={{opacity: 1, x: 1}}
                transition={{duration: .5, delay: .5}}
                initial={{opacity: 0, x: 50}}
                className="header-image-box">
                <Image
                    src={mainImg}
                    width='500' height='500'
                    objectFit="cover"
                    layout='fill'
                    alt='cover-img'/>
            </motion.div>
        </HeaderStyled>
    );
};

export default Header;