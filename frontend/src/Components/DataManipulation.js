import React, { useContext } from 'react';
import Table from './Table';
import Input from './Input';
import BasicButton from './BasicButton';
import axios from 'axios';
import { Context } from './Context';

const MockData = [
  { name: 'watch', price: 20 },
  { name: 'latop', price: 2000 }
];

const SecondStep = () => {
  const { data, updateData } = useContext(Context);

  return (
    <div className="SecondStep">
      <h2>Server data handlers</h2>
      <div className="SecondStepBody">
        <Table data={data} />
        <div>
          <Input labelText={'Date'} />
          <Input labelText={'Value'} />
          <BasicButton
            text={'Send to server 1'}
            onClick={() => {
              axios.post('/api/data', { date: '22 august 2001', value: 17 })
              .then(response => updateData(response.data))
              .catch(error => console.log(error))
            }}
          />
          <BasicButton
            text={'Send to server 2'}
            onClick={() => {
              axios
                .get('/api/data')
                .then((response) => {
                  console.log(response.data);
                })
                .catch((error) => {
                  console.error(error);
                });
            }}
          />
          <BasicButton text={'Delete from server 2'} />
        </div>
      </div>
    </div>
  );
};

export default SecondStep;
