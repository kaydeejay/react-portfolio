import React from 'react'
import Col from 'react-bootstrap/Col';

import './style.css';

const ProjectCard = (props) => {
  const handleClickEvent = () => {
    console.log(props);
  }

  return (
    <Col md={4}>
      <div className="padding-wrapper">
        <div onClick={handleClickEvent} className="project-wrapper">
          <img
            className="img-fluid"
            alt=""
            src={props.screenshot}
          />
          <p>{props.title}</p>
        </div>
      </div>
    </Col>
  )
}

export default ProjectCard;
