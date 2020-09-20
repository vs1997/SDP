import React from "react";
import { Row, Col } from "react-flexbox-grid";
// SCSS
import "./hero.scss";
//Assets
import mern from "../../assets/hero/mern.png";
// import HeroImage from '../../assets/hero/hero-image.png';
//Components
import Button from "../ui-components/button/button";

const hero = () => (
  <div className="hero" id="hero">
    <div className="wrapper">
      <Row>
        <Col md={12} lg={6}>
          <div className="hero-info">
            <h1 className="weight800 font60">Hello!!!</h1>
            <h1 className="weight800 font50">
              Let's move your steps towards digital world.
            </h1>
            <p className="font16">
              I builds simple, powerful product for people and business.
            </p>
            <Button label="SEND MESSAGE" target={"contact"} />
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="hero-image">
            <img src={mern} alt="hero" />
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default hero;
