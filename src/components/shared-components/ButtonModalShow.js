import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import ServiceModal from './ServiceModal';

export default function ButtonModalShow(props) {
  
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <ButtonToolbar className="mb-2">
          <button
            type="button"
            class="btn btn-sm btn-outline-light font-weight-bold"
            href={props.item.href}
            onClick={() => setModalShow(true)}
          >LEER MÁS
          <i class="fas fa-angle-double-right ml-2" style={iconStyle2}></i>
          </button>
          <ServiceModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            imgColor={props.item.imgColor}
            title={props.item.title}
            text1={props.item.text1}
            text2={props.item.text2}
          />
        </ButtonToolbar>
  )
}

const iconStyle2 = {
  color: "var(--mainYellow)",
}