import React from "react";
import { Container, Row, Col, Image }from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookSquare,
    faTwitter,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import logo_footer from "../assets/logo_footer.png";
import applestory from "../assets/applestory.png";
import play from "../assets/play.png";
import "./Footer.scss";



const Footer = () => (
    <footer className="footer">
        <Container>
            <Row className=' text-center p-2'>
            <Col xs={12} lg={6} className="d-lg-flex text-letf p-3">
                <Image src = {logo_footer} width="250px" />
            </Col>
            <Col xs={12} lg={4}className="d-flex justify-content-center p-3" >
            <Image src = {applestory} className="text-left" width="170px"/>
                <Image src = {play} width="170px"/>
            </Col>
            <Col xs={12} lg={2} className=" d-flex align-items-center justify-content-center  ">
                <a href="http://facebook.com/"target="_blank" rel="noobener noreferrer">
                <FontAwesomeIcon icon = {faFacebookSquare} color='#7c7c7c' size='2x'/>
                </a>
                <a href="http://twitter.com/"target="_blank" rel="noobener noreferrer">
                <FontAwesomeIcon icon = {faTwitter} color='#7c7c7c' size='2x'/>
                </a>
                <a href="http://youtube.com/"target="_blank" rel="noobener noreferrer">
                <FontAwesomeIcon icon = {faYoutube} color='#7c7c7c' size='2x'/>
                </a>
            </Col>
            </Row>
        </Container>
        </footer>
)

export default Footer;