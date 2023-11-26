import React, { useState } from "react";
import {
  ArrowLeftWrapper,
  ArrowRightWrapper,
  CloseSvgWrapper,
  DotsWrapper,
  ImageModalStyled,
  InnerWrapperStyled,
} from "./ImageModalStyled";
import { useModalContext } from "../../context";
import Image from "next/image";
import closeSvg from "../../public/icons/x-close.svg";
import rightArrow from "../../public/icons/chevron-right.svg";
import leftArrow from "../../public/icons/chevron-left.svg";

const ImageModal = () => {
  const { modalPosition, modalImages, setIsModal } = useModalContext();
  const [imageIndex, setImageIndex] = useState(0);

  const modalWrapperStyle = {
    top: modalPosition,
    position: "absolute",
    width: "100%",
    height: "110vh",
    zIndex: 200,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    gap: 20,
    background: "rgba(0, 0, 0, 0.3)",
  };

  const SmallDot = {
    height: 10,
    width: 10,
    borderRadius: "50%",
    background: "#437097",
    cursor: "pointer",
    pointerEvents: "auto",
  };

  const BigDot = {
    height: 15,
    width: 20,
    borderRadius: 10,
    background: "#FFFFFF",
  };

  const closeSvgStyle = {
    cursor: "pointer",
  };

  const rightArrowHandler = () => {
    modalImages.length === imageIndex + 1
      ? setImageIndex(0)
      : setImageIndex((prevState) => prevState + 1);
  };

  const leftArrowHandler = () => {
    imageIndex === 0
      ? setImageIndex(modalImages.length - 1)
      : setImageIndex((prevState) => prevState - 1);
  };

  return (
    <div style={modalWrapperStyle}>
      <ArrowRightWrapper onClick={rightArrowHandler}>
        <Image layout={"fill"} src={rightArrow} alt={"right"} />
      </ArrowRightWrapper>
      <ArrowLeftWrapper onClick={leftArrowHandler}>
        <Image layout={"fill"} src={leftArrow} alt={"right"} />
      </ArrowLeftWrapper>
      <InnerWrapperStyled>
        <CloseSvgWrapper>
          <Image
            layout={"fill"}
            style={closeSvgStyle}
            onClick={() => setIsModal(false)}
            src={closeSvg}
            alt={"close icon"}
          />
        </CloseSvgWrapper>
        <ImageModalStyled>
          <Image
            style={{ borderRadius: 3, objectFit: "cover" }}
            src={modalImages[imageIndex].src}
            layout={"fill"}
            alt={"room image"}
          />
        </ImageModalStyled>
        <DotsWrapper>
          {modalImages.map((image, index) => {
            return (
              <div
                style={index === imageIndex ? BigDot : SmallDot}
                key={index}
                onClick={() => setImageIndex(index)}
              />
            );
          })}
        </DotsWrapper>
      </InnerWrapperStyled>
    </div>
  );
};

export default ImageModal;
