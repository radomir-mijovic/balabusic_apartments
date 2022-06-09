import styled from "styled-components";

export const HeaderStyled = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-around;
  width: 100%;
  height: 50rem;
  padding: 0 0 0 clamp(3rem, 6vw, 20rem);
  
  .header-text-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #F7FAFD;
    padding: 0 3rem;
    margin: 8rem 0 8rem;
    
    > h1, h2 {
      text-align: center;
    }
    
    > h1 {
      font-size: clamp(3rem, 4vw, 5rem);
      margin-bottom: 1.7rem;
    }
    
    > h2 {
      text-transform: uppercase;
      font-size: clamp(1.6rem, 2.2vw, 2rem);
      line-height: 2.2rem;
    }
  }
  
  .header-image-box {
    position: relative;
    height: 100%;
    width: 100%;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0;
    
    .header-text-box {
      margin: 0;
    }
  }
`