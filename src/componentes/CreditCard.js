import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCreditCard,
    faMobile,
    faShoppingCart,
    faWallet,
} from "@fortawesome/free-solid-svg-icons";
import IconText from "./IconText.js";
import creditCard from "../assets/credit-card.jpg";
import "./CreditCard.scss";


const CreditCard = () => (
    <Container className="my-5">
        <Row>
            <Col xs={12} lg={7} className="mb-5 mb-lg-0 px-5 px-lg-0">
                <Row>
                    <h2 className=" my-5 credit-car-title">Cartão de crédito</h2>
                </Row>
                <Row>
                    <Col xs={12} lg={6} className="mb-4">
                        <IconText
                        icon={faCreditCard}
                        size={3}
                        color="#f05656"
                        textClassName="h5 text-muted">
                            Crédito Pessoal
                            </IconText>

                    </Col>
                    <Col xs={12} lg={6} className="mb-4">
                    <IconText
                        icon={faMobile}
                        size={3}
                        color="#f05656"
                        textClassName="h5 text-muted">
                            App
                            </IconText>

                    </Col>
                    <Col xs={12} lg={6} className="mb-4">
                    <IconText
                        icon={faShoppingCart}
                        size={3}
                        color="#f05656"
                        textClassName="h5 text-muted">
                           Pagamentos Online
                            </IconText>
                       

            </Col>
            <Col xs={12} lg={6} className="mb-4">
            <IconText
                        icon={faWallet}
                        size={3}
                        color="#f05656"
                        textClassName="h5 text-muted">
                           Pagamneto Digital
                            </IconText>
                        
                </Col>
                </Row>
                </Col>
                <Col xs={12} lg={5}>
                    <Image src={creditCard} alt="Magbank Credit Card Example" fluid/>
                </Col>
                <FontAwesomeIcon></FontAwesomeIcon>
                </Row>
    </Container>
);

export default CreditCard;