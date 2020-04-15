import React from 'react';
import { Redirect } from 'react-router-dom';
import Col from 'react-bootstrap/Col';

import './style.css';

const ContactLink = (props) => {
  // console.log(props.link);
  // put the click event function inside here so I have access to props instead
  // of attaching the link to everything.

  const handleClickEvent = () => {
    console.log(props.link);
    // vvv this might have to happen in the below return vvv
    return <Redirect to={props.link}/>
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
