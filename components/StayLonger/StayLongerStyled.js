import styled from "styled-components";
import {motion} from "framer-motion";

export const StayLongerStyled = styled(motion.section)`
  width: 100%;
  padding: 0 20vw;
  
  .inner-box {
    width: 100%;
    height: 100%;
    background: #235784;
    padding: 2rem;
    
    > h2 {
      font-size: clamp(2.2rem, 4vw, 3.2rem);
      color: #FFFF;
      margin-bottom: 1rem;
    }
    
    > h3 {
      font-size: clamp(1.6rem, 3vw, 2rem);
      color: #FFFF;
      margin-bottom: 1rem;
    }
    
    > h4 {
      font-size: clamp(1.6rem, 3vw, 2rem);
      color: #FFFF;
      margin-bottom: 1rem;
      position: relative;
      left: 1rem;
      
      ::before {        
        content: "";
        height: 100%;
        width: 2px;
        background: #FFFF;
        position: absolute;
        border-radius: 3px;
        left: -.8rem;
      }
    }
  }
  
  @media(max-width: 1000px) {
    padding: 0 15vw;
  }
  
  @media(max-width: 756px) {
    padding: 0 1rem;
  }
  
`