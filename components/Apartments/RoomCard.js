import React from "react";
import { RoomCardStyled } from "./RoomCardStyled";
import Image from "next/image";
import { ButtonBlueStyled } from "../UI/Button/ButtonBlueStyled";
import { motion } from "framer-motion";
import { useModalContext } from "../../context";

const RoomCard = ({ name, people, beds, alt, imageSrc, type, images }) => {
  const { setIsModal, setModalPosition, setModalImages } = useModalContext();

  const modalHandler = () => {
    setIsModal((prevState) => !prevState);
    setModalPosition(window.scrollY);
    setModalImages(images);
  };

  return (
    <RoomCardStyled
      whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 100 }}
    >
      <motion.div
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
        className="room-image"
      >
        <Image
          onClick={modalHandler}
          src={imageSrc}
          alt={alt}
          layout="fill"
          objectFit="cover"
        />
        <div className="price">{type}</div>
      </motion.div>
      <div className="info">
        <div className="room-name">{name}</div>
        <div className="room-info">
          <div className="people-info-icon">
            <Image
              src="/icons/people.svg"
              width="20"
              height="20"
              alt="people"
            />
            <h5 className="room-info__h5">{people} Sleeps</h5>
          </div>
          <div className="bed-info-icon">
            <Image src="/icons/bed.svg" alt="people" width="20" height="20" />
            <h5 className="room-info__h5">{beds} Beds</h5>
          </div>
          <ButtonBlueStyled
            whileHover={{ y: -5, scale: 1.03 }}
            transition={{ duration: 0.4 }}
            whileTap={{ scale: 0.9 }}
          >
            <a
              style={{ textDecoration: "none", color: "black" }}
              href="tel:+382 69 620 216"
            >
              Book Now
            </a>
          </ButtonBlueStyled>
        </div>
      </div>
    </RoomCardStyled>
  );
};

export default RoomCard;
