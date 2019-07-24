import React from 'react';
import { Row, Col, } from 'react-bootstrap';
import ResponsiveTitle from './ResponsiveTitle';
import styled from 'styled-components';
import ButtonModalShow from './ButtonModalShow';

export default function ServiciosCompletosCard(props) {
  return (
    <React.Fragment>
      <ResponsiveTitle className="mt-2 text-center"
        inputColor="dark"
        fontSizeHigh="35px"
        fontSizeMEdium="25px"
        fontSizeSmall="20px"
      >{props.item.title}
      </ResponsiveTitle>
      <Row className="mx-2 mb-4 justify-content-center " >
        <ColImagenServicio picture={props.item.img} pictureColor={props.item.imgColor} 
          xs={12} md={8} className="text-white d-flex align-items-end justify-content-end" >
          <ButtonModalShow item={props.item} />
        </ColImagenServicio>
      </Row>
    </React.Fragment>
  )
}

const ColImagenServicio = styled(Col)`
  background-image: url(${props => props.picture});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0 0 6px 0 black;
  font-size: 22px;
  font-weight: 700;
  height: 150px;
  :hover {
    background-image: url(${props => props.pictureColor});
    transform: scale(1.01);
    transition: transform 0.1s ease-in-out;
  }
`

