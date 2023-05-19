import React, { useContext, useState } from 'react';
import BasicButton from './BasicButton';
import { Context } from './Context';
import axios from 'axios';

const PostForm = () => {
  const [date, setDate] = useState('');
  const [value, setValue] = useState('');
  const { updateData } = useContext(Context);

  const onClick = () => {
    axios
      .post('http://localhost:8000/server1/data', { date, value })
      .then(() => {
        setDate('');
        setValue('');
        axios
          .get('http://localhost:8000/server1/data')
          .then((response) => updateData(response.data))
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="Post Form">
      <h4>Send data to server 1</h4>
      <div className="PostFormBody">
        <div>
          <div className="InputContainer">
            <p>{'Date'}</p>
            <input value={date} onChange={(event) => setDate(event.target.value)} />
          </div>
          <div className="InputContainer">
            <p>{'Value'}</p>
            <input value={value} onChange={(event) => setValue(event.target.value)} />
          </div>
        </div>
        <BasicButton text={'Submit'} onClick={onClick} />
      </div>
    </div>
  );
};

export default PostForm;
