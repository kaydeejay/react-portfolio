import React from 'react'
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
  return (
    <div className="fixed-bottom">
      <Navbar bg="light" expand="lg">
        <p className="ml-auto mr-auto">&#169; 2020</p>
      </Navbar>
    </div>
  )
}

export default Footer;
