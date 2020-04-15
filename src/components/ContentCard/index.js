import React from 'react'
import Card from 'react-bootstrap/Card';

const ContentCard = (props) => {
  return (
    <div className="container">
      <div className="page-content">
        <Card>
          <Card.Header>{props.header}</Card.Header>
          <Card.Body>
            {props.children}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default ContentCard;
