import React from 'react';
import "./style.css"
import FacebookInCardIcon from '../../assets/image/logo/FacebookInCard';
import ShareIcon from '../../assets/image/ShareIcon';
import Placeholder from '../../assets/image/Placeholder';

function CardSlideDefault(props: any) {
    return (
        <div className='card__default'>
            <div className="card__default-img">
            <Placeholder/>
            </div>
            <div className="card__default-content">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </div>

           
        </div>
    );
}

export default CardSlideDefault;