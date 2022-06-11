import React from 'react';
import {ApartmentsStyled} from "./ApartmentsStyled";
import RoomCard from "./RoomCard";
import {rooms_info_hellper} from "./rooms_info_hellper";

const Apartments = () => {
    return (
        <ApartmentsStyled>
            <div className="header-section">
                <h2>Our Apartments</h2>
            </div>
            <div className="boxes-grid">
                {rooms_info_hellper.map((room, index) => {
                    return (
                        <RoomCard key={index} {...room}/>
                    )
                })}
            </div>
        </ApartmentsStyled>
    );
};

export default Apartments;