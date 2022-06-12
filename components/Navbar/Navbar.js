import React, {useState} from 'react';
import {NavbarStyled} from "./NavbarStyled";
import axios from "axios";

const Navbar = () => {
    const [temp, setTemp] = useState(0)

    axios.get(
        'https://api.openweathermap.org/data/2.5/weather?q=budva&units=metric&appid=cb5ff894f1a8e61d7e596c67a671568f'
    ).then((response) => {
        setTemp(response.data.main.temp)
    })

    return (
        <NavbarStyled>
            <h3>Budva {temp.toFixed(0)}°C</h3>
            <h1>Balabusic</h1>
            <h3>info@balabusic.com</h3>
        </NavbarStyled>
    );
};

export default Navbar;