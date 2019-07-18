import React from 'react';
import Button from 'react-bootstrap/Button';


export default function ButtonGray(props) {
  return (
    <Button variant="secondary" className="text-uppercase bg-dark text-center" size="sm">
      {props.text}<i class="fas fa-angle-double-right ml-2" style={iconStyle}></i>
    </Button>
  )
}

const iconStyle = {
  color: "var(--mainYellow)",
}

//Doble flecha <i class="fas fa-angle-double-right ml-1"></i> 
//Flecha Cirsulo <i class="fas fa-arrow-alt-circle-right"></i>