import React, { useContext } from 'react';
import BasicButton from './BasicButton';
import { Context } from './Context';
import axios from 'axios';

const LandingPage = () => {
  const { updateData } = useContext(Context);

    const onClick = () => {
      axios.get('http://localhost:8000/server1/data')
      .then(response => updateData(response.data))
      .catch(error => console.error(error));
    }

  return (
    <div className="LandingPage">
      <h2>Web Scraping</h2>
      <BasicButton text={'Search for data'} onClick={onClick}/>
    </div>
  );
};

export default LandingPage;
