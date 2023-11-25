import React, { useContext, createContext, useState, useEffect } from "react";

const ModalContext = createContext(null);

export const ModalProvider = ({ children }) => {
  const [isModal, setIsModal] = useState(false);
  const [modalPosition, setModalPosition] = useState(0);
  const [modalImages, setModalImages] = useState([]);

  useEffect(() => {
    if (isModal) {
      document.body.style.overflowY = "hidden";
    } else if (!isModal) {
      document.body.style.overflowY = "auto";
    }
  }, [isModal]);
  return (
    <ModalContext.Provider
      value={{
        isModal,
        setIsModal,
        modalPosition,
        setModalPosition,
        modalImages,
        setModalImages,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);
