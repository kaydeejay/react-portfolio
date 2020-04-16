import React from 'react'
import Col from 'react-bootstrap/Col';

const ProjectCard = (props) => {

  const handleClickEvent = () => {
    console.log(props);
  }

  return (
    <Col onClick={handleClickEvent}>
      <img
        className="img-fluid"
        src={props.screenshot}
      />
      <p>{props.title}</p>
    </Col>
  )
}

export default ProjectCard;
