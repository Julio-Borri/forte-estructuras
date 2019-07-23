import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TeamCard from './shared-components/TeamCard';
import data from '../data';
import imgTeam1 from '../img/team1.png'
import imgTeam2 from '../img/team2.png'
import imgTeam3 from '../img/team3.png'
import imgTeam4 from '../img/team4.png'

export default function TeamCardGroup() {
  return (
    <React.Fragment>
      <Container fluid className="bg-dark p-3">
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
      </Container>
    </React.Fragment>
  )
}
