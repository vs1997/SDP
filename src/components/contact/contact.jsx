import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import './contact.scss';
import * as emailjs from 'emailjs-com';
import Title from '../ui-components/title/title';
import ContactInfo from './contactInfo/contactInfo';
import ContactSocial from './contactInfo/contactSocial';
import Modal from '../contact-modal/Modal';

import contactme from '../../assets/contact/contactme.jpg';
// import ContactBackground from '../../assets/contact/bg.png';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      sending: false,
      successModal: false,
      errorModal: false,
    };
  }

  inputHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (e) => {
    var self = this;
    this.setState({ sending: true });
    e.preventDefault();

    var template_params = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };

    // YOUR EMAIL.JS API KEY IN FORMAT user_xxxxxxxxxxxxxxxxxx
    let API_KEY = '';

    // YOUR EMAIL.JS TEMPLATE ID
    let TEMPLATE_ID = '';

    emailjs.send('default_service', TEMPLATE_ID, template_params, API_KEY).then(
      function (response) {
        if (response.status === 200) {
          self.showSuccessModal();
        } else {
          self.showErrorModal();
        }
      },
      function (error) {
        self.showErrorModal();
      }
    );
  };

  // SUCCESS MODAL
  showSuccessModal = () => {
    this.setState({ successModal: true, sending: false });
    this.resetForm();
  };
  // ERROR MODAL
  showErrorModal = () => {
    this.setState({ errorModal: true, sending: false });
    this.resetForm();
  };
  // RESET CONTACT FORM
  resetForm() {
    this.setState({ name: '', email: '', message: '' });
  }
  // CLOSE ALL MODALS
  closeModal = () => {
    this.setState({ successModal: false, errorModal: false });
  };

  resetForm = () => {
    this.setState({ name: '', email: '', message: '' });
  };

  render() {
    let submitButtonRender = (
      <div className='small__button'>
        <button aria-label='send message' type='submit' value='Send Message'>
          Send Message
        </button>
      </div>
    );
    if (this.state.sending) {
      submitButtonRender = (
        <div className='small__button sending-btn'>
          <div className='flex-center'>
            <div className='sbl-circ'></div>
          </div>
        </div>
      );
    }
    let modalRender = null;
    if (this.state.successModal) {
      modalRender = <Modal closeModal={this.closeModal} status='success' />;
    } else if (this.state.errorModal) {
      modalRender = <Modal closeModal={this.closeModal} status='error' />;
    }
    return (
      <div id='contact'>
        {modalRender}
        <div className='wrapper'>
          <Title title='CONTACT ME.' />
          <p className='font12'>Let's start your project with me.</p>

          <Row className='padding40'>
            <Col md={12} lg={6}>
              <a className='btn' href='mailto:rempire230@gmail.com'>
                CONTACT ME
              </a>
            </Col>
            <Col md={12} lg={6}>
              <div className='flex-center'>
                <img src={contactme} alt='contact background' />
              </div>
            </Col>
          </Row>
          <ContactInfo />
          <ContactSocial />
        </div>
      </div>
    );
  }
}

export default Contact;
