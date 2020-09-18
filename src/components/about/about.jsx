import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import './about.scss';
// Components
import TeamBox from './teamBox';
// import TeamInfo from './teamInfo';
import Title from '../ui-components/title/title';
// Assets
// import Person01 from '../../assets/about/person01.png';
// import Person02 from '../../assets/about/person02.png';
import sagar from '../../assets/about/sagar.jpg';

//contents
import aboutPara from '../contents';

const about = () => (
  <div id='about'>
    <div className='wrapper'>
      <Title title='ABOUT ME.' />
      <p className='font12'>{aboutPara.map((msg) => msg.msg)}</p>
      <Row>
        <Col md={12} lg={4}>
          <TeamBox avatar={sagar} name='Sagar Taygi' job='Software Developer' />
        </Col>
        {/* <Col md={12} lg={4}>
          <TeamBox avatar={Person02} name='Han Solo' job='Graphic Designer' />
        </Col> */}
        {/* <Col md={12} lg={4}>
          <TeamInfo />
        </Col> */}
      </Row>
    </div>
  </div>
);

export default about;
