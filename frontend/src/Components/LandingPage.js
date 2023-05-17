import React, { useContext } from 'react';
import BasicButton from './BasicButton';
import { Context } from './Context';

const LandingPage = () => {
  const { updateData } = useContext(Context);

    const onClick = () => {
        updateData(1);
    }

  return (
    <div className="LandingPage">
      <h2>Web Scraping</h2>
      <BasicButton text={'Search for data'} onClick={onClick}/>
    </div>
  );
};

export default LandingPage;
