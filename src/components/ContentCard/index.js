import React from 'react'
import Card from 'react-bootstrap/Card';

const ContentCard = (props) => {
  console.log(props.text);
  // props.text.map(textBlock => console.log(textBlock));
  return (
    <div>
      <Card>
        <Card.Header>{props.header}</Card.Header>
        <Card.Body>
          <img src={props.image} alt={props.imageAlt} />
          <Card.Text>
            {/* {props.text.map(textBlock => (
              <p>{textBlock}</p>
            ))} */}
            {props.text}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ContentCard
