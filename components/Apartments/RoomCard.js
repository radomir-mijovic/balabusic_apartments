import React from 'react';
import {RoomCardStyled} from "./RoomCardStyled";
import Image from 'next/image'

const RoomCard = ({name, price, people, beds}) => {
    return (
            <RoomCardStyled>
                <div className="room-image">
                    <Image src='/images/room4.jpg' width='100' height='200' layout='fill' objectFit='cover'/>
                    <div className="price">
                        €{price} / <span> 1 night</span>
                    </div>
                </div>
                <div className="info">
                    <div className="room-name">
                        {name}
                    </div>
                    <div className="room-info">
                       <div className="icon">
                        <Image src='/icons/people.svg' alt="people" layout='fill'/>
                       </div>
                        {people}
                        {beds}
                    </div>
                </div>
            </RoomCardStyled>
    );
};

export default RoomCard;