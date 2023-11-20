import React from 'react';
import "./style.css"
import FacebookInCardIcon from '../../assets/image/logo/FacebookInCard';
import ShareIcon from '../../assets/image/ShareIcon';
import Placeholder from '../../assets/image/Placeholder';
import IconDownload from '../../assets/image/Icon/IconDowload';

function Cardlarge(props: any) {
    return (
        <div className='card__default card-content'>
           <div className="card-content-img">
           <Placeholder/>
           </div>

            <div className="card__default-logo-right">
                <IconDownload />
            </div>
        </div>
    );
}

export default Cardlarge;