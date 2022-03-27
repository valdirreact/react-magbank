import React, {useState} from "react";
import  {Container, Row, Col, Accordion, Card} from "react-bootstrap";
import IconText from "./IconText";
import "./Faq.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCreditCard,
    faWallet,
    faShieldAlt,
    faUserTie,
} from "@fortawesome/free-solid-svg-icons";

const Faq = () => {
  const options = [
    { icon: faCreditCard, text:'Cartão de credito'},
    { icon: faWallet, text:'Conta e abertura'},
    { icon: faShieldAlt, text:"Token digital"},
    { icon: faUserTie, text:"Produtos e serviços"},
  ];

  const [index, setIndex] = useState(0);

  const handleClick = key => {
    console.log(key);
    setIndex(key);
  }

  return (
  <section className="faq text-light">
    <Container className="py-5">
    <h2 className="faq-title py-5 text-center">Dúvidas frequentes</h2>
        <Row className="d-flex align-items-center justify-items-center">
            <Col className="d-lg-none mb-5" xs={12}>
                <Row>
                    {options.map(({icon},key) => (
                      <Col className="d-flex justyfi-content-center"  key={key}>
                      <FontAwesomeIcon icon={icon} 
                      size = "2x"
                      color = {key === index ? "#fff" : "#fff" }
                      onClick = {() => handleClick(key)}
                     />
                      </Col>
                    ))}
            
                </Row>
                <Row className='mt-5'>
                  <p className='lead px-5 mx-5'> {options[index].text} </p>
                </Row>
            </Col>
            <Col className="d-none d-lg-block py-5">
            {options.map(({ icon, text}, key) => (
                      
            <IconText icon={icon} 
            size = {3} 
            className = " faq-clickable mb-5" 
            textClassName = "lead"
            color= {key === index ? "#fff" : "#fff" }
            onClick = {() => handleClick(key)}
            key={key}>
               
               { text }
                 </IconText>
            ))}

            </Col>
            <Col>
            <Accordion defaultActiveKey="0" activeKey={`${index}`}>
      <Card>
      
          <Accordion.Toggle as={Card.Header} eventKey="0">SEM FILA</Accordion.Toggle>
    
        <Accordion.Collapse eventKey="0">
          <Card.Body> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
      </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
    
          <Accordion.Toggle as={Card.Header}  eventKey="1">SIMPLES E PRÁTICO</Accordion.Toggle>
      
        <Accordion.Collapse eventKey="1">
          <Card.Body> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
      </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
       
          <Accordion.Toggle as={Card.Header}  eventKey="2">100% ONLINE</Accordion.Toggle>
  
        <Accordion.Collapse eventKey="2">
          <Card.Body> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
      </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
       
          <Accordion.Toggle as={Card.Header}  eventKey="3">SEVIÇOS DIGITAL</Accordion.Toggle>
      
        <Accordion.Collapse eventKey="3">
          <Card.Body> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
      </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
            </Col>
        </Row>
    </Container>
    </section>
)
};

export default Faq;