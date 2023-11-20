import React from 'react';

import "./style.css"
import SlideSpecial from '../../../components/slide/SlideSpecial';
import SlideFull from '../../../components/slide/SlideFullView';

function GameContent() {
    return (
        <section className='game-content'>
            <div className="container">
                <div className="special__title">
                    <h3>Special Events & Promotional</h3>
                </div>

                <div className="sub-title-2">
                    <span>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.

                    </span>
                </div>
            </div>

            <div className="special__slide">
                <SlideFull />
            </div>
        </section>
    );
}

export default GameContent;