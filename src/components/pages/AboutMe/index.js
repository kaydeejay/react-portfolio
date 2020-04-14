import React, { useState, useEffect } from 'react';
import ContentCard from '../../ContentCard';
import pseudoDB from '../../../utils/pseudoDB';

const AboutMe = () => {
  const [cardContent, setCardContent] = useState({});

  useEffect(() => {
    pseudoDB.getAbout()
      .then(res => setCardContent(res));
  }, []);

  return (
    <div>
      <ContentCard
        header={cardContent.header}
        text={cardContent.text}
        image={cardContent.image}
        imageAlt={cardContent.imageAlt}
      />
    </div>
  )
}

export default AboutMe;
