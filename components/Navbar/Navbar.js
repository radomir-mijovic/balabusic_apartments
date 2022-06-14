import React, {useState} from 'react';
import {NavbarStyled} from "./NavbarStyled";
import axios from "axios";
import Image from "next/image";
import {motion} from "framer-motion";

const Navbar = () => {
    const [temp, setTemp] = useState(0)

    const url = `https://api.openweathermap.org/data/2.5/weather?q=budva&units=metric&appid=${process.env.OPEN_WEATHER_API_KEY}`

    axios.get(url).then((response) => {
        setTemp(response.data.main.temp)
    })

    return (
        <NavbarStyled>
            <h3>Budva {temp.toFixed(0)}°C</h3>
            <motion.div
                animate={{opacity: 1}}
                transition={{duration: .4}}
                initial={{opacity: 0}}
                className="image-box">
                <Image src='/logo.png' alt='logo' layout='fill'/>
            </motion.div>
            <h3>info@balabusic.com</h3>
        </NavbarStyled>
    );
};

export default Navbar;