import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
// SCSS
import './hero.scss';
//Assets
import mern from '../../assets/hero/mern.png';
// import HeroImage from '../../assets/hero/hero-image.png';
//Components
import Button from '../ui-components/button/button';

const hero = () => (
  <div className='hero' id='hero'>
    <div className='wrapper'>
      <Row>
        <Col md={12} lg={6}>
          <div className='hero-info'>
            <h1 className='weight800 font60'>Hello!!!</h1>
            <h1 className='weight800 font60'>
              We Are Creative Digital Agency.
            </h1>
            <p className='font12'>
              A digital workplace is the next evolution in the way we work. It
              isn’t a physical place, but rather an approach to carrying out and
              delivering work.
            </p>
            <Button label='SEND MESSAGE' target={'contact'} />
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className='hero-image'>
            <img src={mern} alt='hero' />
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default hero;
