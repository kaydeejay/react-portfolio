import React, { useState, useEffect } from 'react';
import ContentCard from '../../ContentCard';
import pseudoDB from '../../../utils/pseudoDB';

import './style.css';

const AboutMe = () => {
  const [cardContent, setCardContent] = useState({
    header: "",
    image: "",
    imageAlt: "",
    text: []
  });

  useEffect(() => {
    pseudoDB.getAbout()
      .then(res => setCardContent(res));
  }, []);

  const { header, image, imageAlt, text } = cardContent;

  return (
    <ContentCard header={header}>
      <img src={image} alt={imageAlt} />
      <div className="card-text">
        {!text.length > 0 ?
          "loading..." :
          text.map(textBlock => <p key={textBlock.length}>{textBlock}</p>)}
      </div>
    </ContentCard>
  );
}

export default AboutMe;
