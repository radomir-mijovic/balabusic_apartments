import React from 'react';
import {StayLongerStyled} from "./StayLongerStyled";

const StayLonger = () => {
    const simple = 'It\'s simple: the longer you stay, the more you save!'

    return (
        <StayLongerStyled
            whileInView={{scale: 1}}
            transition={{duration: .7, type: 'spring', delay: 1}}
            viewport={{ once: true }}
            initial={{scale: 0}}>
            <div className="inner-box">
                <h2>
                    Stay Longer,<br/> Save More
                </h2>
                <h3>
                    {simple}
                </h3>
                <h4>
                    Save up to 30% on daily rate for stays longer than 14 nights.
                </h4>
                <h4>
                    Save up to 20% off the nightly rate on stays between 7-14 nights.
                </h4>
            </div>
        </StayLongerStyled>
    );
};

export default StayLonger;