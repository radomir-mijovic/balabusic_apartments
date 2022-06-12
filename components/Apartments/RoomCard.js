import React from 'react';
import {RoomCardStyled} from "./RoomCardStyled";
import Image from 'next/image'
import {ButtonBlueStyled} from "../UI/Button/ButtonBlueStyled";
import {useRouter} from "next/router";

const RoomCard = ({name, price, people, beds, alt}) => {
    const router = useRouter()
    const booking_link = 'https://www.booking.com/hotel/me/apartments-balabusic.sr.html'

    return (
        <RoomCardStyled
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1}}
            viewport={{ once: true }}
            initial={{opacity: 0, y: 100}}>
            <div className="room-image">
                <Image
                    src='/images/room4.jpg'
                    alt={alt}
                    width='100'
                    height='200'
                    layout='fill'
                    objectFit='cover'/>
                <div className="price">
                    €{price} / <span> 1 night</span>
                </div>
            </div>
            <div className="info">
                <div className="room-name">
                    {name}
                </div>
                <div className="room-info">
                    <div className="people-info-icon">
                        <Image src='/icons/people.svg' width='20' height='20' alt="people"/>
                        <h5 className="room-info__h5">{people} Sleeps</h5>
                    </div>
                    <div className="bed-info-icon">
                        <Image src='/icons/bed.svg' alt="people" width='20' height='20'/>
                        <h5 className="room-info__h5">{beds} Beds</h5>
                    </div>
                    <ButtonBlueStyled
                        whileTap={{scale: .9}}
                        onClick={() => router.push(booking_link)}>
                        Book now
                    </ButtonBlueStyled>
                </div>
            </div>
        </RoomCardStyled>
    );
};

export default RoomCard;