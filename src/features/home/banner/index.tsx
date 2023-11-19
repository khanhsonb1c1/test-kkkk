import React from 'react';
import "./style.css"
import Placeholder from '../../../assets/image/Placeholder';
import RatingIcon from '../../../assets/image/RatingIcon';
import GroupButton from '../../../assets/image/GroupButton';


function Banner() {
    return (
        <div className='banner'>
            <div className="container">
                <div className="banner__content">
                    <div className="banner__content_placeholder">
                        <Placeholder />
                    </div>

                    <div className="banner__content-text">
                        <div className="banner__content-text-primary">
                            <h1>gamelof game</h1>
                            <div className="banner__content-text-rate">
                                <span>Racing/Action</span>
                                <span className='mx-3'>|</span>
                                <RatingIcon />
                            </div>
                        </div>

                        <div className="banner__content-text-description">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt ea iste aut quod maiores quae consectetur ipsa in repudiandae id cum non maxime impedit nemo culpa harum, libero eligendi eos!</p>
                        </div>

                    </div>
                    <div className="banner__group-btn">
                        <GroupButton/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Banner;