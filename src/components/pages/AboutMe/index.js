import React, { useState, useEffect } from 'react';
import ContentCard from '../../ContentCard';
import pseudoDB from '../../../utils/pseudoDB';

import headshot from '../../../assets/images/kevin-image.png';

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

  const { header, imageAlt, text } = cardContent;

  return (
    <ContentCard header={header}>
      <img src={headshot} alt={imageAlt} />
      <div className="card-text">
        {!text.length > 0 ?
          "loading..." :
          text.map(textBlock => <p key={textBlock.length}>{textBlock}</p>)}
      </div>
    </ContentCard>
  );
}

export default AboutMe;
