import React from 'react';
import ContentCard from '../../ContentCard';

const NotFound = () => {
  return (
    <ContentCard header="404 - This Page Isn't Real!">
      <img src={require('../../../assets/images/404.png')} alt="This Page Isn't Real!" />
    </ContentCard>
  )
}

export default NotFound;
