import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import './contactSocial.scss';

import linkedin1 from '../../../assets/contact/linkedin1.png';
import youtube1 from '../../../assets/contact/youtube1.png';
import github from '../../../assets/contact/github.png';
// import FacebookIcon from "../../../assets/contact/facebook.svg";
// import TwitterIcons from "../../../assets/contact/twitter.svg";
// import DribbleIcon from '../../../assets/contact/dribble.svg';

const contactSocial = () => (
  <Row>
    <Col xs={12}>
      <Row center='xs'>
        <Col xs={12} lg={1} className='contact__social'>
          <a href='https://www.linkedin.com/in/sagar-tyagi-309583154/'>
            <img src={linkedin1} alt='Linkedin' />
          </a>
        </Col>
        <Col xs={12} lg={1} className='contact__social'>
          <a href='https://www.youtube.com/channel/UCuBIeb1gr815Yap1O1sNUyw'>
            <img src={youtube1} alt='Youtube' />
          </a>
        </Col>
        <Col xs={12} lg={1} className='contact__social'>
          <a href='https://github.com/Saturday-Developer'>
            <img src={github} alt='github' />
          </a>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default contactSocial;
