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
