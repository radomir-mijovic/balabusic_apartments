import styled from "styled-components";

export const NavbarStyled = styled.nav`
  align-items: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  width: 100%;
  padding: 2rem clamp(1rem, 3vw, 8rem);
  margin-bottom: clamp(.5rem, 4vw, 7rem);
  
  > h3, h1 {
    font-family: 'Josefin Sans', sans-serif;
  }
  
  h1 {
    text-transform: uppercase;
    font-size: clamp(1.6rem, 3vw, 2rem);
  }
  
  h3 {
    font-size: clamp(1.2rem, 2vw, 1.4rem);
  }
  
  @media(max-width: 768px) {
    
  }
`