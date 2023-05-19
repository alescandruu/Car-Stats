import React, { useContext, useState } from 'react';
import BasicButton from './BasicButton';
import { Context } from './Context';
import axios from 'axios';

const DeleteForm = () => {
  const [date, setDate] = useState('');
  const { updateData } = useContext(Context);

  const onClick = () => {
  };

  return (
    <div className="Post Form">
      <h4>Delete data from server 1</h4>
      <div className="PostFormBody">
        <div>
          <div className="InputContainer">
            <p>{'Date'}</p>
            <input value={date} onChange={(event) => setDate(event.target.value)} />
          </div>
        </div>
        <BasicButton text={'Submit'} onClick={onClick} />
      </div>
    </div>
  );
};

export default DeleteForm;
