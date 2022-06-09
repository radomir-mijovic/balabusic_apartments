import React from 'react';
import {ApartmentsStyled} from "./ApartmentsStyled";

const Apartments = () => {
    return (
        <ApartmentsStyled>
            <h2>Our Apartments</h2>
            <div className="boxes-grid">
                <div className="box box-1">
                    box 1
                </div>
                <div className="box box-2">
                    box 2
                </div>
                <div className="box box-3">
                    box 3
                </div>
                <div className="box box-4">
                    box 4
                </div>
                <div className="box box-1">
                    box 5
                </div>
                <div className="box box-2">
                    box 6
                </div>
                <div className="box box-3">
                    box 7
                </div>
                <div className="box box-4">
                    box 8
                </div>
                <div className="box box-4">
                    box 9
                </div>
            </div>
        </ApartmentsStyled>
    );
};

export default Apartments;