import React from 'react';
import { Row, } from 'react-bootstrap';
import { ResponsiveTitle } from './StyledComponents';
import ButtonModalShow from './ButtonModalShow';
import { ColImagenServicio, } from './StyledComponents';

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


