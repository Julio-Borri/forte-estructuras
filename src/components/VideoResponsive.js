import React from 'react';
import { Container } from 'react-bootstrap';

export default function VideoBG() {
  return (
    <Container>
    <div class="embed-responsive embed-responsive-16by9" style={videoStyle}>
        <iframe class="embed-responsive-item" src="http://www.youtube.com/embed/Yxjvh9PB03U" allowfullscreen title="a"></iframe>
      </div>
    </Container>


  )
}

const videoStyle = {
  height: "150px",
  width: "300px"
}