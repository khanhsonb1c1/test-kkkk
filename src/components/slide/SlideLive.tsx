import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import PrevCheviron from '../../assets/image/button/PreviousCheviron';
import NextCheviron from '../../assets/image/button/NextChevron';
import AvataOnl from '../../assets/image/AvataOnline';

import "./style.css"

// import "./slide"

function SlideLive(props: any) {
    const slidesWrapRef = useRef(null) as any;

    const handleNext = () => {
        const widthItem = (document.querySelector('.item') as HTMLElement)?.offsetWidth + 60;

        if (slidesWrapRef.current) {
          slidesWrapRef.current.scrollLeft += widthItem;
        }
      };
    
      const handlePrev = () => {
        const widthItem = (document.querySelector('.item') as HTMLElement)?.offsetWidth + 60;

        if (slidesWrapRef.current) {
          slidesWrapRef.current.scrollLeft -= widthItem;
        }
      };



    return (
        <div className='slide-live'>

            <div className='prev' id="btn-prev" onClick={handlePrev}>
                <PrevCheviron />
            </div>

            <div className="slide-live-wrap" id='slides-wrap' ref={slidesWrapRef}>
                <div className="slides" id='slides'>

                    <div className="item">
                        <AvataOnl />
                        <div className="item__title">
                            <span>Sort Title</span>
                        </div>
                    </div>
                    <div className="item">
                        <AvataOnl />
                        <div className="item__title">
                            <span>Sort Title</span>
                        </div>
                    </div>
                    <div className="item">
                        <AvataOnl />
                        <div className="item__title">
                            <span>Sort Title</span>
                        </div>
                    </div>
                    <div className="item">
                        <AvataOnl />
                        <div className="item__title">
                            <span>Sort Title</span>
                        </div>
                    </div>
                    <div className="item">
                        <AvataOnl />
                        <div className="item__title">
                            <span>Sort Title</span>
                        </div>
                    </div>
                    <div className="item">
                        <AvataOnl />
                        <div className="item__title">
                            <span>Sort Title</span>
                        </div>
                    </div>
                    <div className="item">
                        <AvataOnl />
                        <div className="item__title">
                            <span>Sort Title</span>
                        </div>
                    </div>
                    <div className="item">
                        <AvataOnl />
                        <div className="item__title">
                            <span>Sort Title</span>
                        </div>
                    </div>
                    <div className="item">
                        <AvataOnl />
                        <div className="item__title">
                            <span>Sort Title</span>
                        </div>
                    </div>
                    <div className="item">
                        <AvataOnl />
                        <div className="item__title">
                            <span>Sort Title</span>
                        </div>
                    </div>

                </div>
            </div>
            <div className="next" id="btn-next" onClick={handleNext}>
                <NextCheviron />
            </div>


        </div>
    );
}

export default SlideLive;