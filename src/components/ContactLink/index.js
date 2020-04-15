import React from 'react';
import Col from 'react-bootstrap/Col';

import './style.css';

const ContactLink = (props) => {
  return (
    <Col>
      <div className="mr-auto ml-auto contact-link">
        <i className={props.faIcon}></i>
        <p>{props.title}</p>
      </div>
    </Col>
  );
}

export default ContactLink;
