import styled from "styled-components";

export const NavbarStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 2rem clamp(1rem, 3vw, 8rem);
  
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
`