import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TeamCard from './shared-components/TeamCard';
import styled from 'styled-components';
import data from '../data';
import imgTeam1 from '../img/team1.png';
import imgTeam2 from '../img/team2.png';
import imgTeam3 from '../img/team3.png';
import imgTeam4 from '../img/team4.png';
import bgContainer from '../img/bgTeam.png';
import ResponsiveTitle from './shared-components/ResponsiveTitle';

export default function TeamCardGroup() {
  return (
    <React.Fragment>
      <MainContainer fluid className="py-5">
        <Row>
          <Col className="text-center mb-3">
            <ResponsiveTitle
              inputColor="white"
              fontSizeHigh="50px"
              fontSizeMedium="35px"
              fontSizeSmall="30px"
            >{data.titulos.title3}
            </ResponsiveTitle>
          </Col>
        </Row>
        <Container>
          <Row>
            <Col xs={12} md={3}>
              <TeamCard item={data.team[0]} teamImg={imgTeam1} />
            </Col>
            <Col xs={12} md={3}>
              <TeamCard item={data.team[1]} teamImg={imgTeam2} />
            </Col>
            <Col xs={12} md={3}>
              <TeamCard item={data.team[2]} teamImg={imgTeam3} />
            </Col>
            <Col xs={12} md={3}>
              <TeamCard item={data.team[3]} teamImg={imgTeam4} />
            </Col>
          </Row>
        </Container>
      </MainContainer>
    </React.Fragment>
  )
}

const MainContainer = styled(Container)`
  background: url(${bgContainer});
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  margin: 80px 0;
`