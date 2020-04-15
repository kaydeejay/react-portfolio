import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import ContentCard from '../../ContentCard';
import ContactLink from '../../ContactLink';

import pseudoDB from '../../../utils/pseudoDB';

// import './style.css';

const Contact = () => {
  const [cardContent, setCardContent] = useState({
    header: "",
    cards: []
  });

  useEffect(() => {
    pseudoDB.getContact()
    .then(res => setCardContent(res));
  }, []);

  const { header, cards } = cardContent;

  return (
    <ContentCard header={header}>
      <Row>
        {!cards.length > 0 ?
        "loading" :
        cards.map(card => (
          <ContactLink 
            key={card.key}
            title={card.title} 
            faIcon={card.faIcon} 
            link={card.href} 
          />
        ))}
      </Row>
    </ContentCard>
  )
}

export default Contact;
