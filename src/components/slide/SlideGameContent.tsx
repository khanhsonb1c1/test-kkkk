import React, { useEffect, useRef, useState } from 'react';


import "./style.css"

import NextArrow from '../../assets/image/button/NextArrow';
import PrevArrow from '../../assets/image/button/PreviousArrow';
import Cardlarge from '../card/CardLarge';

function SlideGameContent(props: any) {
    const slidesWrapRef = useRef(null) as any;

    // useEffect(() => {
    //     // Đặt giá trị scroll ban đầu tại đây
    //     if (slidesWrapRef.current) {
    //         slidesWrapRef.current.scrollLeft = 30; // Giá trị tùy chọn cho scrollLeft
    //     }
    //   }, []);

    useEffect(() => {
        if (slidesWrapRef.current) {
            const widthItem = (document.querySelector('.item-content') as HTMLElement)?.offsetWidth + 17;
            const totalWidth = widthItem * 8; // Adjust this based on the number of items
            const centerPosition = (totalWidth - window.innerWidth) / 2;
            slidesWrapRef.current.scrollLeft = centerPosition;
        }
    }, []);

 

    const handleNext = () => {
        const widthItem = (document.querySelector('.item-full') as HTMLElement)?.offsetWidth + 17;
        console.log(widthItem)
        if (slidesWrapRef.current) {
            slidesWrapRef.current.scrollLeft += widthItem;
        }
    };

    const handlePrev = () => {
        const widthItem = (document.querySelector('.item-full') as HTMLElement)?.offsetWidth + 17;

        if (slidesWrapRef.current) {
            slidesWrapRef.current.scrollLeft -= widthItem;
        }
    };



    return (
        <div className='slide-game-content'>
        <div className="slide-game-content-wrap"  ref={slidesWrapRef}>
            <div className="slides">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
                    <div
                        key={index}
                        className="item-content"
                    >
                        <Cardlarge />
                    </div>
                ))}
            </div>
        </div>

        <div className="slide-game-content-btns">
            <div className="next" id="btn-next" onClick={handlePrev}>
                <PrevArrow />
            </div>
            <div className='page'>
                <strong>01</strong>/ <span>10</span>
            </div>
            <div className='prev' id="btn-prev" onClick={handleNext}>
                <NextArrow />
            </div>
        </div>
    </div>
    );
}

export default SlideGameContent;