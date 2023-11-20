import React, { useEffect, useRef, useState } from 'react';


import "./style.css"

import CardSlideSpecial from '../card/CardSlideSpecial';
import Pagination from '../../assets/image/Pagination';


function SlideSpecial(props: any) {
    const slidesWrapRef = useRef(null) as any;
    const [centeredItemIndex, setCenteredItemIndex] = useState(0);

    // useEffect(() => {
    //     // Đặt giá trị scroll ban đầu tại đây
    //     if (slidesWrapRef.current) {
    //         slidesWrapRef.current.scrollLeft = 30; // Giá trị tùy chọn cho scrollLeft
    //     }
    //   }, []);

    useEffect(() => {
        if (slidesWrapRef.current) {
            const widthItem = (document.querySelector('.item-special') as HTMLElement)?.offsetWidth + 17;
            const totalWidth = widthItem * 8; // Adjust this based on the number of items
            const centerPosition = (totalWidth - window.innerWidth) / 2;
            slidesWrapRef.current.scrollLeft = centerPosition;
        }
    }, []);

    const handleScroll = () => {
        if (slidesWrapRef.current) {
            const containerRect = slidesWrapRef.current.getBoundingClientRect();
            const items = slidesWrapRef.current.querySelectorAll('.item-special');

            items.forEach((item: any, index: any) => {
                const itemRect = item.getBoundingClientRect();
                const midPoint = containerRect.width / 2;

                // Kiểm tra xem toạ độ x của item có chứa toạ độ chính giữa màn hình không
                if (
                    itemRect.left <= midPoint &&
                    itemRect.right >= midPoint
                ) {
                    setCenteredItemIndex(index);
                }
            });
        }
    };

    useEffect(() => {
        const slidesWrapElement = slidesWrapRef.current;

        if (slidesWrapElement) {
            slidesWrapElement.addEventListener('scroll', handleScroll);

            // Xóa sự kiện cuộn khi component bị hủy
            return () => {
                slidesWrapElement.removeEventListener('scroll', handleScroll);
            };
        }
    }, [slidesWrapRef]);
    return (
        <div className='slide__special'>



            <div className="slide__special-wrap" id='slides-wrap' ref={slidesWrapRef}>
                <div className="slides" id='slides'>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
                    <div
                        key={index}
                        className={`item-special ${centeredItemIndex === index ? 'active' : ''}`}
                    >
                        <CardSlideSpecial />
                    </div>
                ))}
                 
                </div>
            </div>

            <div className="slide__special-btns">
               <Pagination/>
            </div>


        </div>
    );
}

export default SlideSpecial;