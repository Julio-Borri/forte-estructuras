import React from 'react';
import { Container, Col, Row, Carousel, Image } from 'react-bootstrap';
import data from '../data';
import brandLogo from '../img/forte logo.png';
import { ImgResponsive, ResponsiveTitle, StyledRow, StyledH3, } from './shared-components/StyledComponents';

export default function GallerySlide() {
  return (
    <React.Fragment>

      <Container className="text-center mt-5 mb-4">
        <Row className="mb-2">
          <Col className="mb-2">
            <ResponsiveTitle
              inputColor="dark"
              fontSizeHigh="50px"
              fontSizeMedium="35px"
              fontSizeSmall="30px"
            >{data.titulos.title4}
            </ResponsiveTitle>
          </Col>
        </Row>
      </Container>

      <Container fluid style={{ height: "400px" }} className="mb-5">
        <Row>
          <Carousel className="w-100">
            <Carousel.Item style={{ widht: "100%", height: "400px", }}>
              <Image src={data.servicios[0].img} style={imgStyle} />
              <Carousel.Caption>
                <StyledH3 className="text-weight-bold">{data.textosVarios.texto3} {data.textosVarios.texto4}</StyledH3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ widht: "100%", height: "400px", }}>
              <Image src={data.servicios[1].img} style={imgStyle} />
              <Carousel.Caption>
                <StyledH3 className="text-weight-bold">{data.textosVarios.texto5} </StyledH3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ widht: "100%", height: "400px", }}>
              <Image src={data.servicios[2].img} style={imgStyle} />
              <Carousel.Caption>
                <StyledH3 className="text-weight-bold"> {data.textosVarios.texto6}</StyledH3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
      
      <Container>
        <StyledRow className="p-3 text-center m-1">
          <Col md={2} xs={12} className="d-flex align-items-center justify-content-center">
            <ImgResponsive src={brandLogo} alt="Brand Logo" normalHeight="150px" mediumHeight="150px" smallHeight="200px" />
          </Col>
          <Col md={10} xs={12} className="d-flex align-items-center" >
            <p className="text-weight-bold">{data.textosVarios.texto7} {data.textosVarios.texto8}</p>
          </Col>
        </StyledRow>
      </Container>

    </React.Fragment>
  )
}

const imgStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  overflow: "hidden",
}


