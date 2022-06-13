import styled from "styled-components";

export const ApartmentsStyled = styled.section`
  width: 100%;
  padding: 0 25vw;
  display: flex;
  flex-direction: column;
  
  .header-section {
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;

    > h2 {
      font-size: clamp(2.2rem, 4vw, 3.2rem);
      font-weight: 400;
      text-transform: uppercase;
    }
  }
  
  .boxes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(60rem, 1fr));
    grid-gap: 4rem 2rem;
    
  }

  @media (max-width: 850px) {
    padding: 0 clamp(1rem, 3vw, 4rem);
    
    .boxes-grid {
      grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
    }
  }
`