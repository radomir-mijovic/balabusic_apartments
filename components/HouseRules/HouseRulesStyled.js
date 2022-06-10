import styled from "styled-components";

export const HouseRulesStyled = styled.section`
  width: 100%;
  height: clamp(30rem, 55vw, 70rem);
  display: flex;
  align-items: center;
  justify-content: center;
  
  .main-box {
    position: relative;
    width: 60%;
    height: 80%;
  }
  
  .house-rules-box {
    position: absolute;
    z-index: 3;
    background: #F7FAFD;
    height: 15rem;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    top: 0;
    bottom: 0;
    margin: auto;
    
    > h3 {
      font-size: 2.5rem;
      margin-bottom: 1.2rem;
    }
    
    > h4 {
      font-size: 1.4rem;
      line-height: 1.9rem;
    }
  }
  
  @media (max-width: 1100px) {
    
    .main-box {
      width: 93%;
    }
  }
  
  @media (max-width: 756px) {
    
    .main-box {
      padding: 1rem;
    }
    
    .house-rules-box {
      left: 0;
      bottom: -28rem;
      width: 100%;
      height: 12rem;
    }
  }
`