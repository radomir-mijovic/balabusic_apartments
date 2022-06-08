import styled from "styled-components";

export const NavbarStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 1rem clamp(1rem, 3vw, 8rem);
  
  > h3 {
    font-family: 'Josefin Sans', sans-serif;
  }
`