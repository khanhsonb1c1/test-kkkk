import React from 'react';
import PropTypes from 'prop-types';

import "./style.css"
import SlideSpecial from '../../../components/slide/SlideSpecial';

function SpecialComponent() {
    return (
        <section className='special'>
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
                <SlideSpecial />
            </div>
        </section>
    );
}

export default SpecialComponent;