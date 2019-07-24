import React from 'react';
import { Card, Col, } from 'react-bootstrap';
import styled from 'styled-components';
import ButtonModalShow from './shared-components/ButtonModalShow';

export default function ServiceCard(props) {
  return (
    <Col lg className="my-3">
      <HoveredCard className="text-center" style={{ height: "150px" }}>
        <Card.Img variant="top" src={props.item.img} style={{ overflow: "hidden", height: "100%", objectFit: "cover" }} />
        <Card.ImgOverlay className="d-flex align-items-start justify-content-center">
          <Card.Title className="text-white font-weight-bold text-uppercase">
            <RespTitle>{props.item.title}</RespTitle>
          </Card.Title>
        </Card.ImgOverlay>
        <Card.ImgOverlay className="d-flex align-items-end justify-content-center">
          <ButtonModalShow item={props.item} />
        </Card.ImgOverlay>
      </HoveredCard>
    </Col>
  )
}

const RespTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
  @media screen and (max-width: 992px) {
    font-size: 20px;
  }
`

const HoveredCard = styled(Card)`
  :hover {
    box-shadow: 0 0 6px 0 black;
  }
`

const ColImagenServicio = styled(Col)`
  background-image: url(${props => props.picture});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0 0 6px 0 black;
  font-size: 22px;
  font-weight: 700;
  height: 80px;
  :hover {
    box-shadow: 0 0 6px 0 black;
    background-image: url(${props => props.pictureColor});
  }
`