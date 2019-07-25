import React from 'react';
import { Col, } from 'react-bootstrap';
import styled from 'styled-components';
import ButtonModalShow from './shared-components/ButtonModalShow';
import { ResponsiveTitle, } from './shared-components/StyledComponents';

export default function ServiceCard(props) {
  return (
    <Col className="mb-4 " xs={12} md={6}>
      <ColImagenServicio picture={props.item.img}
        className="text-white d-flex flex-column justify-content-around" >
        <div className="text-center">
          <ResponsiveTitle
          inputColor="dark"
          fontSizeHigh="35px"
          fontSizeMEdium="35px"
          fontSizeSmall="30px"
        >{props.item.title}
          </ResponsiveTitle>
        </div>
        <div className="d-flex justify-content-center">
          <ButtonModalShow item={props.item} />
        </div>
      </ColImagenServicio>
    </Col>
  )
}

const ColImagenServicio = styled(Col)`
  background-image: url(${props => props.picture});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  font-size: 22px;
  font-weight: 700;
  height: 200px;
  :hover {
    box-shadow: 0 0 6px 0 black;
    transform: scale(1.01);
    transition: transform 0.1s ease-in-out;
  }
`