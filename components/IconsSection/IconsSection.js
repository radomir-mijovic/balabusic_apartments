import React from 'react';
import {IconsSectionStyled} from "./IconsSectionStyled";
import {icons} from "./icons_hellper";
import Image from "next/image";

const IconsSection = () => {
    return (
        <IconsSectionStyled>
            <div className="icons-box">
                {icons.map((icon, index) => {
                    return (
                        <div className='icon-box' key={index}>
                            <Image src={icon.src} alt={icon.alt} width='40' height='40'/>
                            <h4>{icon.text}</h4>
                        </div>
                    )
                })}
            </div>
        </IconsSectionStyled>
    );
};

export default IconsSection;