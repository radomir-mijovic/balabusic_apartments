import styled from "styled-components";

export const FooterStyled = styled.footer`
  width: 100%;
  padding: 7rem 20vw;
  position: relative;
  
  .section-info {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    
    width: 100%;
  }
  
  .section__h3 {
    font-size: clamp(2rem, 3.3vw, 3.3rem);
    text-align: center;
    margin-bottom: 1.5rem;
  }
  
  .section__p {
    font-size: clamp(1.5rem, 2vw, 2rem);
    text-align: center;
  }
  
  .show-on-map {
    text-align: center;
    margin-top: 3rem;
    cursor: pointer;
    font-size: 1.6rem;
  }
  
  .rights {
    position: absolute;
    bottom: .5rem;
    width: 100%;
    text-align: center;
    font-size: 1.2rem;
  }
  
  @media (max-width: 1200px) {
    padding: 7rem clamp(1rem, 3vw, 4rem);
  }
  
  @media (max-width: 768px) {
    padding-top: 2rem;
    
    .section-info {
      grid-template-columns: 1fr;
      row-gap: 3rem;
    }
    
    .show-on-map {
      margin-top: 1.5rem;
    }
  }
  
  .section__h3 {
    margin-bottom: .7rem;
  }
  
  .section__p {
    line-height: 2.2rem;
  }
`