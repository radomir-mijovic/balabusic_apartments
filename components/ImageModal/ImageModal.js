import React, { useState } from "react";
import { DotsWrapper, ImageModalStyled } from "./ImageModalStyled";
import { useModalContext } from "../../context";
import Image from "next/image";
import closeSvg from "../../public/icons/x-close.svg";

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

  return (
    <div style={modalWrapperStyle}>
      <Image
        style={closeSvgStyle}
        onClick={() => setIsModal(false)}
        src={closeSvg}
        alt={"close icon"}
      />
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
    </div>
  );
};

export default ImageModal;
