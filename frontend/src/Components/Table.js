import React from 'react';

const Table = ({ data }) => {
  return (
    <div className="Table">
      <div className="Row">
        <p style={{'fontWeight': 'bold'}}>{'Name'}</p>
        <p style={{'fontWeight': 'bold'}}>{'Price'}</p>
      </div>
      {data.map((element) => {
        return (
          <div className="Row">
            <p>{element.name}</p>
            <p>{element.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Table;
