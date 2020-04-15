import React from 'react'
import Card from 'react-bootstrap/Card';

const ContentCard = (props) => {
  return (
    <div className="container">
      <div className="page-content">
        <Card>
          <Card.Header>{props.header}</Card.Header>
          <Card.Body>
            <img src={props.image} alt={props.imageAlt} />
            <div className="card-text">
              {(!props.text || !props.text.length > 0) ?
                "loading..." :
                props.text.map(textBlock => <p key={textBlock.length}>{textBlock}</p>)}
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default ContentCard;
