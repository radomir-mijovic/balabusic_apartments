import React, {useEffect, useState} from 'react';
import {NavbarStyled} from "./NavbarStyled";
import axios from "axios";
import Image from "next/image";
import {motion} from "framer-motion";
import axiosInstance from "../../axios";

const Navbar = () => {
    const [temp, setTemp] = useState(0)

    axios.get('https://api.openweathermap.org/data/2.5/weather?q=budva&units=metric&appid=cb5ff894f1a8e61d7e596c67a671568f').then((response) => {
        setTemp(response.data.main.temp)
    })

    // axiosInstance.get().then((response) => {
    //     setTemp(response.data.main.temp)
    // })


    // fetch(process.env.OPEN_WEATHER_API_KEY).then(response => response.json()).then(result => {
    //     // setTemp(result.data.main.temp)
    //     console.log(result.main.temp)
    //     setTemp(result.main.temp)
    // }).catch(err => console.log(err))

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
            <a
            style={{ textDecoration: "none", color: "black" }}
            href="mailto: apartmanibalabusic@gmail.com"
          >
            <p className="section__p">Contact us Via E-Mail</p>
          </a>
        </NavbarStyled>
    );
};

export default Navbar;