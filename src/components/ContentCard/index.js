import React from 'react'
import Card from 'react-bootstrap/Card';

const ContentCard = (props) => {
  return (
    <div>
      <Card>
        <Card.Header>{props.header}</Card.Header>
        <Card.Body>
          <img src={props.image} alt={props.imageAlt} />
          <Card.Text>
            {!props.text ?
              "loading..." :
              props.text.map(textBlock => <p>{textBlock}</p>)
            }
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ContentCard
