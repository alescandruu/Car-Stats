import React, { useContext } from 'react';
import Table from './Table';
import { Context } from './Context';
import PostForm from './PostForm';
import DeleteForm from './DeleteForm';
import BasicButton from './BasicButton';
import axios from 'axios';

const SecondStep = () => {
  const { data } = useContext(Context);

  return (
    <div className="SecondStep">
      <h2>Server data handlers</h2>
      <div className="SecondStepBody">
        <Table data={data} />
        <div className="dataManipulationBody">
          <PostForm />
          <DeleteForm />
          <br></br>
          <div className='deleteForm'>
            <h4>Send data to server 2</h4>
            <BasicButton text={'Send data'} onClick={() => {
              axios
              .get('http://localhost:8000/web-scraping/data')
              .then((response) => console.log(response.data))
              .catch((error) => console.log(error));
            }} />
          </div >
        </div>
      </div>
    </div>
  );
};

export default SecondStep;
