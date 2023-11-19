import React, { useEffect, useRef, useState } from 'react';


import "./style.css"

import CardSlideDefault from '../card/CardSlideDefault';


function SlideSpecial(props: any) {
    const slidesWrapRef = useRef(null) as any;
    const [centeredItemIndex, setCenteredItemIndex] = useState(0);

    useEffect(() => {
        // Đặt giá trị scroll ban đầu tại đây
        if (slidesWrapRef.current) {
            slidesWrapRef.current.scrollLeft = 30; // Giá trị tùy chọn cho scrollLeft
        }
      }, []);

    const handleScroll = () => {
        if (slidesWrapRef.current) {
            const containerRect = slidesWrapRef.current.getBoundingClientRect();
            const items = slidesWrapRef.current.querySelectorAll('.item-full');

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
                <div className="slides" id='slides'>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
                    <div
                        key={index}
                        className={`item-special ${centeredItemIndex === index ? 'active' : ''}`}
                    >
                        <CardSlideDefault />
                    </div>
                ))}
            </div>
                 
                </div>
            </div>

            <div className="slide__special-btns">
               
            </div>


        </div>
    );
}

export default SlideSpecial;