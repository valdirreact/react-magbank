import React from 'react';
import { Row, Col, Jumbotron, Button, Image } from 'react-bootstrap';
import logo from "../assets/magic-pay-small.png";
import logoDesktop from "../assets/logo__magic-pay.png";
import "./Hero.scss";

const Hero = () => (
    <Jumbotron className="text-center text-light hero py-5 ">
        <Row className="p-lg-5">
            <Col lg className="py-lg-5">
              <Image className="d-lg-none" src={logo}/>
              <Image className="py-2 d-none d-lg-inline-block " src={logoDesktop}/>
            </Col>
            <Col lg className="py-lg-5">
              <p className="text-right">Pague suas contas pelo nosso APP</p>
              <Button variant="outline-light"> Abra sua conta</Button>
            </Col>
        </Row>
    </Jumbotron>
);
export default Hero;