import React, { useContext, useState } from 'react';
import BasicButton from './BasicButton';
import { Context } from './Context';
import axios from 'axios';

const PostForm = () => {
  const [car, setCar] = useState('');
  const [speed, setSpeed] = useState('');
  const { data , updateData } = useContext(Context);
  const [firstSubmit, setFirstSubmit] = useState(true);

  const firstOnClick = () => {
    setFirstSubmit(false);
    const newData = data;
    newData.push({'marcaModel': car, 'vitezaMaxima': speed});
    axios
      .post('http://localhost:8000/server1/initialData', newData)
      .then(() => {
        setCar('');
        setSpeed('');
        axios
          .get('http://localhost:8000/server1/data')
          .then((response) => updateData(response.data))
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  }

  const secondOnClick = () => {
    axios
      .post('http://localhost:8000/server1/data', ({'marcaModel': car, 'vitezaMaxima': speed}))
      .then(() => {
        setCar('');
        setSpeed('');
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
            <input value={car} onChange={(event) => setCar(event.target.value)} />
          </div>
          <div className="InputContainer">
            <p>{'Value'}</p>
            <input value={speed} onChange={(event) => setSpeed(event.target.value)} />
          </div>
        </div>
        <BasicButton text={'Submit'} onClick={firstSubmit ? firstOnClick : secondOnClick} />
      </div>
    </div>
  );
};

export default PostForm;
