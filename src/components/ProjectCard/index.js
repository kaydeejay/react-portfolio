import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import './style.css';

const ProjectCard = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.desc}
          <img className="modal-img" src={props.screenshot} alt={props.imgAlt} />
        </Modal.Body>
        <Modal.Footer>
          <Row>
            <Button onClick={handleRepoOpen}>Visit Repository</Button>
            {props.repoURL ?
              <Button onClick={handleDeplOpen}></Button> :
              ""}
          </Row>
        </Modal.Footer>
      </Modal>

      <Col md={4}>
        <div className="padding-wrapper">
          <div onClick={handleOpen} className="project-wrapper">
            <img
              className="img-fluid"
              alt=""
              src={props.screenshot}
            />
            <p>{props.title}</p>
          </div>
        </div>
      </Col>
    </>
  )
}

export default ProjectCard;
