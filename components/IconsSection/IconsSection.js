import React from 'react';
import {IconsSectionStyled} from "./IconsSectionStyled";
import {icons} from "./icons_hellper";
import Image from "next/image";
import {motion} from "framer-motion";

const IconsSection = () => {

    const variants = {
        animate: i => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: i * .3,
                // duration: 1,
                type: 'spring'
            }
        }),
        initial: {
            opacity: 0,
            scale: 0
        }
    }

    return (
        <IconsSectionStyled>
            <div className="icons-box">
                {icons.map((icon, index) => {
                    return (
                        <motion.div
                            custom={index}
                            whileInView='animate'
                            initial='initial'
                            variants={variants}
                            viewport={{once: true}}
                            className='icon-box'
                            key={index}>
                            <Image src={icon.src} alt={icon.alt} width='40' height='40'/>
                            <h4>{icon.text}</h4>
                        </motion.div>
                    )
                })}
            </div>
        </IconsSectionStyled>
    );
};

export default IconsSection;