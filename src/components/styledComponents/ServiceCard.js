import React from 'react';
import ButtonGray from './ButtonGray';
import Card from 'react-bootstrap/Card';
import imgService1 from '../../img/ServiceCard1.png';
import styled from 'styled-components';

export default function ServiceCard(props) {
  return (
      <Card style={cardStyle} className="text-center">
        <Card.Img variant="top" src={imgService1} />
        <Card.ImgOverlay className="mt-1">  
        <RespTitle><i className="fas fa-level-down-alt" style={iconStyle}></i> </RespTitle>
              
        <Card.Title className="text-white font-weight-bold text-uppercase">
          <RespTitle>{props.title}</RespTitle>
        </Card.Title>
          
        </Card.ImgOverlay>
        <Card.Body style={bodyStyle}>
          <ButtonGray text="leer más" />
        </Card.Body>
        
      </Card>
  )
}

const cardStyle = {
}

const bodyStyle = {
  position: "relative",
  zIndex: "10",
}

const iconStyle = {
  color: "var(--mainYellow)",
  transform: "rotate(270deg)",
}

const RespTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
  @media screen and (max-width: 992px) {
    font-size: 40px;
  }

`

