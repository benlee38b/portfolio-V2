import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import '../styles/contact.css';

import Alert from 'react-bootstrap/Alert';
import Button from '@material-ui/core/Button';
import { Form, FormGroup, Label, Input } from 'reactstrap';

class ContactForm extends Component {
  state = {
    show: false,
    name: '',
    email: '',
    subject: '',
    message: '',
    status: 'success',
  };
  handleSubmit(e) {
    e.preventDefault();
    const { email, subject, message } = this.state;
    let templateParams = {
      from_name: email,
      to_name: 'benjamintlee600@gmail.com',
      subject: subject,
      message_html: message,
    };
    emailjs
      .send(
        'gmail',
        'template_lysZGhor',
        templateParams,
        'user_M8mEnBJvPw5VMXIj40D5L'
      )
      .then(() => {
        this.setState({ show: true });
      })
      .catch(() => {
        this.setState({ show: true, status: 'danger' });
      });
    this.resetForm();
  }
  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };

  render() {
    const { show, status } = this.state;
    return (
      <>
        <Alert
          show={show}
          variant={status === 'success' ? 'success' : 'danger'}
          style={{ zIndex: '4' }}
        >
          <Alert.Heading>
            {status === 'success' ? 'Email Sent' : 'Email failed to send'}
          </Alert.Heading>
          <p>
            {status === 'danger'
              ? 'Your email failed to send please try again'
              : 'Thank you for your email I will get back to you as soon as I can'}
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button
              onClick={() => this.setState({ show: false })}
              variant="outline-success"
            >
              Close
            </Button>
          </div>
        </Alert>

        <main className="contact-form-container">
          <h1 className="p-heading1">Get in Touch</h1>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup controlId="formBasicEmail">
              <Label className="text-muted">Email address</Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Enter email"
                required
              />
            </FormGroup>
            <FormGroup controlId="formBasicName">
              <Label className="text-muted">Name</Label>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Name"
                required
              />
            </FormGroup>
            <FormGroup controlId="formBasicSubject">
              <Label className="text-muted">Subject</Label>
              <Input
                type="text"
                name="subject"
                className="text-primary"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, 'subject')}
                placeholder="Subject"
                required
              />
            </FormGroup>
            <FormGroup controlId="formBasicMessage">
              <Label className="text-muted">Message</Label>
              <Input
                type="textarea"
                name="message"
                className="text-primary"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
                required
              />
            </FormGroup>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Form>
        </main>
      </>
    );
  }
}
export default ContactForm;
