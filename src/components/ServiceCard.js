import React from 'react';
import { Card, ButtonToolbar } from 'react-bootstrap';
import styled from 'styled-components';
import ServiceModal from './shared-components/ServiceModal';

export default function ServiceCard(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <HoveredCard className="text-center" style={{height:"150px"}}>
      <Card.Img variant="top" src={props.img} style={{overflow: "hidden", height:"100%", objectFit: "cover"}}/>
      <Card.ImgOverlay className="d-flex align-items-start justify-content-center">
        <Card.Title className="text-white font-weight-bold text-uppercase">
          <RespTitle>{props.item.title}</RespTitle>
        </Card.Title>
      </Card.ImgOverlay>
      <Card.ImgOverlay className="d-flex align-items-end justify-content-center">
        <ButtonToolbar>
          <button
            type="button"
            class="btn btn-sm btn-outline-light font-weight-bold"
            href={props.item.href}
            onClick={() => setModalShow(true)}
          >LEER MÁS
          <i class="fas fa-angle-double-right ml-2" style={iconStyle2}></i>
          </button>
          <ServiceModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            imgColor={props.imgColor}
            title={props.item.title}
            text1={props.item.text1}
            text2={props.item.text2}
          />
        </ButtonToolbar>
      </Card.ImgOverlay>
    </HoveredCard>
  )
}

const iconStyle2 = {
  color: "var(--mainYellow)",
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