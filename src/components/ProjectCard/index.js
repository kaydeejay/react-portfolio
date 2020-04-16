import React from 'react'
import Col from 'react-bootstrap/Col';

import './style.css';

const ProjectCard = (props) => {

  const handleClickEvent = () => {
    console.log(props);
  }

  return (
    <Col>
      <div onClick={handleClickEvent} className="project-wrapper">
        <img
          className="img-fluid"
          src={props.screenshot}
        />
        <p>{props.title}</p>
      </div>
    </Col>
  )
}

export default ProjectCard;
