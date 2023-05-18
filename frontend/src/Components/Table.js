import React from 'react';

const Table = ({ data }) => {
  return (
    <div className='TableContainer'>
      <h2>Pound Value - Lei</h2>
      <div className="Table">
        <div className="Row">
          <p style={{ fontWeight: 'bold' }}>{'Date'}</p>
          <p style={{ fontWeight: 'bold' }}>{'Value'}</p>
        </div>
        {data.map((element) => {
          return (
            <div className="Row">
              <p>{element.date}</p>
              <p>{element.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Table;
