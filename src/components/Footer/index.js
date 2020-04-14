import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

import './style.css';

const Footer = () => {
  return (
    <div>
      <div className="phantom"></div>
      <div className="fixed-bottom">
        <Navbar bg="light" expand="lg">
          <p className="ml-auto mr-auto">&#169; 2020</p>
        </Navbar>
      </div>
    </div>
  )
}

export default Footer;
