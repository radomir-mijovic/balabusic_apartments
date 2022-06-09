import styled from "styled-components";

export const UrbanAreaStyled = styled.main`
  width: 100%;
  height: 30vh;
  margin-top: 8rem;
  padding: 0 25vw;
  
  > h2, h4 {
    text-align: center;
  }
  
  > h2 {
    font-size: clamp(2.2rem, 4vw, 3.2rem);
    font-family: 'Cormorant', serif;
    font-weight: 400;
    margin-bottom: 2rem;
  }
  
  > h4 {
    font-size: clamp(1.6rem, 2.5vw, 2.3rem);
    color: #5D5058;
  }
  
  @media (max-width: 1000px) {
    padding: 0 clamp(1rem, 3vw, 4rem);
  }
`