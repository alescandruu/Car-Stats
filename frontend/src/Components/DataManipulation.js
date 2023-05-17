import React from 'react';
import Table from './Table';
import Input from './Input';
import BasicButton from './BasicButton';

const MockData = [
  { name: 'watch', price: 20 },
  { name: 'latop', price: 2000 }
];

const SecondStep = () => {
  return (
    <div className="SecondStep">
      <h2>Server data handlers</h2>
      <div className="SecondStepBody">
        <Table data={MockData} />
        <div>
          <Input labelText={'Name'} />
          <Input labelText={'Price'} />
          <BasicButton text={'Send to server 1'} />
          <BasicButton text={'Send to server 2'} />
          <BasicButton text={'Delete from server 2'} />
        </div>
      </div>
    </div>
  );
};

export default SecondStep;
