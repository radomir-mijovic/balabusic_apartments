import styled from "styled-components";

export const UrbanAreaStyled = styled.main`
  width: 100%;
  margin: 12rem 0 10rem 0;
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
    font-weight: 300;
    //color: #5D5058;
  }
  
  @media (max-width: 1000px) {
    padding: 0 clamp(1rem, 3vw, 4rem);
    margin: 8rem 0 7rem 0;
  }
`