import styled from "styled-components";

export const IconsSectionStyled = styled.section`
  width: 100%;
  margin: 4rem 0;
  
  .icons-box {
    display: flex;
    justify-content: space-evenly;
    padding: 4rem 0;
    width: 100%;
  }
  
  .icon-box {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 6rem;
    
    > h4 {
      margin-top: 1rem;
      font-size: clamp(1.2rem, 3vw, 2rem);
    }
  }
`