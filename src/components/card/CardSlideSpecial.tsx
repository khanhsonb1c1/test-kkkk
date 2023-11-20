import React from 'react';
import "./style.css"

import Placeholder from '../../assets/image/Placeholder';

function CardSlideSpecial(props: any) {
    return (
        <div className='card__default card__special'>
            <div className="card__default-img">
            <Placeholder/>
            </div>
            <div className="card__default-content">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </div>

           
        </div>
    );
}

export default CardSlideSpecial;