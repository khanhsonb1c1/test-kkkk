import React from 'react';
import PropTypes from 'prop-types';
//images
import NoImage from '../../assets/image/NoImage';
import RatingIcon from '../../assets/image/RatingIcon';
import Banner from './banner';
import Dowload from './dowload';
import SignUp from './signup';
import Contact from './contact';
import SpecialComponent from './special-event';
import GameContent from './game-content';
//style
// import { Wrap } from './index.styles';

function HomePage() {
    return (
        <div>
              <Banner/>
              <Dowload/>
              <SignUp/>
              <Contact/>
             <SpecialComponent/>
             <GameContent/>
        </div>
    );
}

export default HomePage;