import React from "react";
import {Row, Col}from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconText = ({ 
  icon, 
  size = 1, 
  color = "#000", 
  className = "", 
  children, 
  onClick}) => (

    <Row className={className} onClick={onClick}>

            <Col xs={size} className="d-flex justyfi-content-center py-2 ">
              <FontAwesomeIcon
                icon={icon}
                size={`${size}x`}
                color={color}/>
                </Col>
             <Col xs={11-size} className={"d-flex align-items-center textClassName"}>
                       {children}
            </Col>
      </Row>
);

export default IconText;