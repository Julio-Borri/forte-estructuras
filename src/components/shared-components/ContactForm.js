import React from 'react';
import { Form, Button, } from 'react-bootstrap';
import data from '../../data';

export default function ContactForm() {
  return (
    <Form style={formStyle} className="m-auto border p-4">
      <Form.Group>
        <Form.Label>{data.formulario.form1.label}</Form.Label>
        <Form.Control type="text" placeholder={data.formulario.form1.placeHolder} />
      </Form.Group>
      <Form.Group>
        <Form.Label>{data.formulario.form2.label}</Form.Label>
        <Form.Control type="email" placeholder={data.formulario.form2.placeHolder} />
        <Form.Text className="text-muted">{data.formulario.form2.helpText}</Form.Text>
      </Form.Group>
      <Form.Group>
        <Form.Label>{data.formulario.form3.label}</Form.Label>
        <Form.Control as="textarea" rows="5" placeholder={data.formulario.form3.placeHolder} />
      </Form.Group>
      <Button variant="dark" type="submit">Enviar</Button>
    </Form>
  )
}

const formStyle = {
  maxWidth: "700px",
  marginBottom: "1110px",
}
