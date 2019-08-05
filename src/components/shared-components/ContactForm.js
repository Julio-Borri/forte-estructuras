import React from 'react';
import { Form, Button, } from 'react-bootstrap';
import data from '../../data';
import PropTypes from 'prop-types';

export default class ContactForm extends React.Component {
  state = {
    feedback: '',
    formSubmitted: false,
  };

  handleCancel = this.handleCancel.bind(this);
  handleChange = this.handleChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);

  static sender = 'juliodborri@gmail.com';

  handleCancel() {
    this.setState({
      feedback: ''
    });
  }

  handleChange(event) {
    this.setState({
      feedback: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const {
      REACT_APP_EMAILJS_TEMPLATEID: template,
      REACT_APP_EMAILJS_RECEIVER: receiverEmail,
    } = this.props.env;

    this.sendFeedback(
      template,
      this.sender,
      receiverEmail,
      this.state.feedback
    );

    this.setState({
      formSubmitted: true
    });
  }

  sendFeedback(templateId, senderEmail, receiverEmail, feedback) {
    window.emailjs
    //EmailJS's send() function, 
      .send('mailgun', templateId, {
        senderEmail,
        receiverEmail,
        feedback
      })
      .then(res => {
        this.setState({
          formEmailSent: true
        });
      })
      // Handle errors here however you like
      .catch(err => console.error('Failed to send feedback. Error: ', err));
  }


  render() {
    return (
      <Form style={{ maxWidth: "700px", marginBottom: "1110px", }} className="m-auto border p-4" onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label>{data.formulario.form1.label}</Form.Label>
          <Form.Control type="text" placeholder={data.formulario.form1.placeHolder} id="name-entry" />
        </Form.Group>
        <Form.Group>
          <Form.Label>{data.formulario.form2.label}</Form.Label>
          <Form.Control type="email" placeholder={data.formulario.form2.placeHolder} id="email-entry" />
          <Form.Text className="text-muted">{data.formulario.form2.helpText}</Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>{data.formulario.form3.label}</Form.Label>
          <Form.Control as="textarea" rows="5" placeholder={data.formulario.form3.placeHolder} id="feedback-entry" />
        </Form.Group>
        <Button variant="outline-dark" type="submit" value="Submit" block >Enviar</Button>
      </Form>
    )
  }


}

ContactForm.propTypes = {
  env: PropTypes.object.isRequired
};