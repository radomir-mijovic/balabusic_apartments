import styled from "styled-components";

export const ImageModalStyled = styled.div`
  width: 750px;
  height: 500px;
  position: relative;
  border-radius: 0.3rem;
  pointer-events: auto;

  @media (max-width: 765px) {
    width: 90%;
    height: 55vw;
  }
`;

export const DotsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 1rem;
  width: 30rem;
  z-index: 220;
  pointer-events: auto;
`;

export const InnerWrapperStyled = styled.div`
  width: 100%;
  height: 100%;
  //background: red;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  gap: 2.4rem;
`;

export const ArrowRightWrapper = styled.div`
  position: absolute;
  right: 5rem;
  z-index: 205;
  cursor: pointer;
  height: 5rem;
  width: 5rem;

  @media (max-width: 765px) {
    right: 0;
  }
`;

export const ArrowLeftWrapper = styled.div`
  position: absolute;
  left: 5rem;
  z-index: 205;
  cursor: pointer;
  height: 5rem;
  width: 5rem;

  @media (max-width: 765px) {
    left: 0;
  }
`;

export const CloseSvgWrapper = styled.div`
  width: 5rem;
  height: 5rem;
  position: relative;
`;
