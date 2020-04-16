import React from 'react';
import Col from 'react-bootstrap/Col';

import './style.css';

const ContactLink = (props) => {

  const handleClickEvent = () => {
    window.open(props.link, '_blank');
  }

  return (
    <Col onClick={handleClickEvent}>
      <div className="mr-auto ml-auto contact-link">
        <i className={props.faIcon}></i>
        <p>{props.title}</p>
      </div>
    </Col>
  );
}

export default ContactLink;
