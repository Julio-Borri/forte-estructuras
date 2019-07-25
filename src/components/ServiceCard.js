import React from 'react';
import { Col, } from 'react-bootstrap';
import ButtonModalShow from './shared-components/ButtonModalShow';
import { ResponsiveTitle, ColImagenServicio2, } from './shared-components/StyledComponents';

export default function ServiceCard(props) {
  return (
    <Col className="mb-4 " xs={12} md={6}>
      <ColImagenServicio2 picture={props.item.img}
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
      </ColImagenServicio2>
    </Col>
  )
}

