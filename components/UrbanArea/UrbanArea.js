import React from 'react';
import {UrbanAreaStyled} from "./UrbanAreaStyled";
import {motion} from "framer-motion";

const UrbanArea = () => {
    return (
        <UrbanAreaStyled>
            <motion.h2
                animate={{opacity: 1, y: 0}}
                transition={{duration: .7}}
                initial={{opacity: 0, y: 60}}>
                Urban Spirit of Budva
            </motion.h2>
            <motion.h4
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 1}}
                initial={{opacity: 0, scale: 0}}>
                Apartments Balabusic are not designed as
                simple accommodation for travelers but is
                designed to mix with space of modern and sensible design,
                culture, art and entertainment.
                One of our main goals is to make sure that your trip and experience is enjoyable.
                Our 10 apartments were recently renovated at the beginning of the year.
                Our staff is highly trained and professional with goals to make sure everyone feels
                like it’s a place to return.
            </motion.h4>
        </UrbanAreaStyled>
    );
};

export default UrbanArea;