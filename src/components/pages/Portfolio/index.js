import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';

import ContentCard from '../../ContentCard';
import ProjectCard from '../../ProjectCard';

import pseudoDB from '../../../utils/pseudoDB';

// import './style.css';

const Portfolio = () => {
  const [cardContent, setCardContent] = useState({
    header: "",
    projects: []
  });

  useEffect(() => {
    pseudoDB.getPortfolio()
      .then(res => setCardContent(res));
  }, []);

  const { header, projects } = cardContent;

  return (
    <ContentCard header={header}>
      <Row>
        {!projects.length > 0 ?
          "loading" :
          projects.map(project => (
            <ProjectCard
              key={project.name}
              title={project.title}
              desc={project.description}
              screenshot={project.screenshot}
              repoURL={project.repoURL}
              deployedURL={project.deployedURL}
            // some id to trigger the modal, maybe?
            // then again it will probably be easier for each project card to have its
            // own modal so that it won't be necessary to globalize props.
            />
          ))}
      </Row>
    </ContentCard>
  );
}

export default Portfolio;
