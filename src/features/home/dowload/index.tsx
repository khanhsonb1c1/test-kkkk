import React from 'react';
import PropTypes from 'prop-types';
import Microsoft from '../../../assets/image/brands/Microsoft';
import Nitendo from '../../../assets/image/brands/Nitendo';
import "./style.css";
import SteamBrand from '../../../assets/image/brands/SteamBrand';


Dowload.propTypes = {

};

function Dowload() {
    return (
        <section className='dowload'>
            <div className="container">
                <div className="dowload__wrap">
                    <div className="dowload__title">
                        <h5>Dowload latest version</h5>
                    </div>

                    <div className="dowload__brands">
                        <div className="brand">
                            <Nitendo />
                        </div>
                        <div className="brand">
                            <Microsoft />
                        </div>
                        <div className="brand">
                            <SteamBrand/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Dowload;