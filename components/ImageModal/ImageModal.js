import React, { useState } from "react";
import { DotsWrapper, ImageModalStyled } from "./ImageModalStyled";
import { useModalContext } from "../../context";
import Image from "next/image";

const ImageModal = () => {
  const { modalPosition, modalImages, setIsModal } = useModalContext();
  const [imageIndex, setImageIndex] = useState(0);

  const modalWrapperStyle = {
    top: modalPosition,
    right: 0,
    position: "absolute",
    width: "100%",
    height: "110vh",
    zIndex: 200,
    // display: "grid",
    // placeItems: "center",
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
    background: "white",
  };

  const BigDot = {
    height: 15,
    width: 15,
    borderRadius: "50%",
    background: "white",
  };

  return (
    <div onClick={() => setIsModal(false)} style={modalWrapperStyle}>
      <ImageModalStyled>
        <Image
          style={{ borderRadius: 3 }}
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
