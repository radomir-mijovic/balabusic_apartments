import styled from "styled-components";

export const FooterStyled = styled.footer`
  width: 100%;
  height: 50rem;
  padding: 5rem clamp(1rem, 3vw, 4rem);
  background: red;
  
  .section-info {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    //align-items: center;
    justify-items: center;
  }
  
  .section__h3 {
    font-size: clamp(2rem, 3.3vw, 3.3rem);
    text-align: center;
  }
  
  .section__p {
    font-size: clamp(1.4rem, 2.3vw, 2rem);
    text-align: center;
  }
  
  @media (max-width: 768px) {
    
    .section-info {
      display: flex;
      flex-direction: column;
    }
  }
`