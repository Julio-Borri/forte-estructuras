import React from 'react';
import { Row, Col, } from 'react-bootstrap';
import ResponsiveTitle from './ResponsiveTitle';
import styled from 'styled-components';


export default function ServiciosCompletosCard(props) {
  return (
    <React.Fragment>
      <ResponsiveTitle className="mt-2 text-center"
        inputColor="dark"
        fontSizeHigh="30px"
        fontSizeMEdium="25px"
        fontSizeSmall="20px"
      >{props.item.title}
      </ResponsiveTitle>
      <Row className="mx-2 mb-4 justify-content-center " >
        <ColImagenServicio picture={props.item.img} pictureColor={props.item.imgColor} xs={12} md={8} className="border border-dark text-white" >
        </ColImagenServicio>
        <Col  xs={12} md={8} >
        <p>{props.item.text1}</p>
        <p>{props.item.text2}</p>
        </Col>
        {/* <Col className="bg-dark text-white" xs={12} md={6} >
        <ResponsiveTitle className="mt-2"
          inputColor="dark"
          fontSizeHigh="30px"
          fontSizeMEdium="25px"
          fontSizeSmall="20px"
        >{props.item.title}
        </ResponsiveTitle>
        <p>{props.item.text1}</p>
        <p>{props.item.text2}</p>
      </Col> */}
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
  height: 80px;
  :hover {
    background-image: url(${props => props.pictureColor});
  }
`

// box-shadow: 0 0 6px 0 black;