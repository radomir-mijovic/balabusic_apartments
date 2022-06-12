import React from 'react';
import {HouseRulesStyled} from "./HouseRulesStyled";
import Image from 'next/image'
import {motion} from "framer-motion";

const HouseRules = () => {
    const spring = {
        type: "spring",
        damping: 10,
        stiffness: 100
    }

    return (
        <HouseRulesStyled>
            <div className="main-box">
                <Image
                    src='/images/house-rules.jpg'
                    quality='100'
                    alt='house rules image'
                    layout='fill'/>
                <motion.div
                    initial={{x: '-100%'}}
                    whileInView={{x: 0}}
                    transition={spring}
                    viewport={{once: true}}
                    className="house-rules-box">
                    <h3>House Rules</h3>
                    <h4>Check-in is anytime after 2PM and check out by 11AM.
                        We can store your luggage for a few days </h4>
                </motion.div>
            </div>
        </HouseRulesStyled>
    );
};

export default HouseRules;