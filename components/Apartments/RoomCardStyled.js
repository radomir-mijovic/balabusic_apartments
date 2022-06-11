import styled from "styled-components";

export const RoomCardStyled = styled.div`
  width: 100%;
  height: 33rem;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  
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
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-size: 1.6rem;
    height: 2.5rem;
  }
  
  .people-info-icon, 
  .bed-info-icon {
    display: flex;
    align-items: center;
    position: relative;
    height: 100%;
    padding: 0 0.5rem;
  }
  
  .people-info-icon {

  }
  
  .bed-info-icon {

  }
  
  .room-info__h5 {
    font-size: 1.5rem;
    margin-top: .3rem;
    margin-left: .8rem;
  }
`