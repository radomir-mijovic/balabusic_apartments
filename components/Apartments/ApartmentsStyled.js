import styled from "styled-components";

export const ApartmentsStyled = styled.main`
  width: 100%;
  padding: 0 clamp(1rem, 3vw, 4rem);
  display: flex;
  flex-direction: column;
  
  > h2 {
    font-size: clamp(2.2rem, 4vw, 3.2rem);
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 2rem;
  }
  
  .boxes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
    grid-gap: 4rem 2rem;
  }
`