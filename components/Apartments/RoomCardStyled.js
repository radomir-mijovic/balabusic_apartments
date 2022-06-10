import styled from "styled-components";

export const RoomCardStyled = styled.div`
  width: 100%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  
  .room-image {
    height: 70%;
    position: relative;
  }
  
  .price {
    z-index: 3;
    position: absolute;
    background: white;
    width: 15rem;
    height: 3.5rem;
    right: 0;
    bottom: 2rem;
    border-radius: 5px 0 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.3rem;
    font-weight: 600;
    font-family: 'Cormorant', serif;
    
    > span {
      font-weight: 300;
    }
  }
  
  .info {
    height: 10rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-around;
    padding: 0 3rem;
  }
  
  .room-name {
    font-size: clamp(2rem, 2.7vw, 2.3rem);
  }
  
  .room-info {
    display: flex;
    width: 100%;
    font-size: 1.6rem;
  }
  
  .icon {
    position: relative;
    height: 1rem;
    width: 1rem;
  }
  
`