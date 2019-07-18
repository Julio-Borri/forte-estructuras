import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import imgService1 from '../../img/ServiceCard1.png';
import styled from 'styled-components';

export default function ServiceCard2(props) {
  return (
    <Card style={cardStyle} className="text-center">
      <Card.Img variant="top" src={imgService1} />
      <Card.ImgOverlay className="d-flex align-items-start justify-content-center">
        <Card.Title className="text-white font-weight-bold text-uppercase">
          <RespTitle>{props.title}</RespTitle>
        </Card.Title>
      </Card.ImgOverlay>
      <Card.ImgOverlay className="d-flex align-items-end justify-content-center">
        
        <button type="button" class="btn btn-sm btn-outline-light font-weight-bold">
          LEER MÁS
          <i class="fas fa-angle-double-right ml-2" style={iconStyle2}></i>
        </button>        
      </Card.ImgOverlay>
    </Card>
  )
}

const iconStyle2 = {
  color: "var(--mainYellow)",
}

const btnStyle = {
  background: "transparent !important",
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

