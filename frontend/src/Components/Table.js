import React from 'react';

const Table = ({ data }) => {
  return (
    <div className='TableContainer'>
      <h2>Top fastest series cars</h2>
      <div className="Table">
        <div className="Row">
          <p style={{ fontWeight: 'bold' }}>{'Car'}</p>
          <p style={{ fontWeight: 'bold' }}>{'Top Speed'}</p>
        </div>
        {data.map((element, index) => {
          return (
            <div className="Row" key={index}>
              <p>{element.marcaModel}</p>
              <p>{element.vitezaMaxima}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Table;
