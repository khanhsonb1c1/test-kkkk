import React from 'react';
import "./style.css"

import Placeholder from '../../assets/image/Placeholder';

function CardSlideSpecial(props: any) {
    return (
        <div className='card__default card__special'>
            <div className="card__default-img">
            <Placeholder/>
            </div>
            <div className="card__special-content">
                <div className="card__special-title">
                    <h3>Short title here</h3>
                </div>
            </div>

           
        </div>
    );
}

export default CardSlideSpecial;