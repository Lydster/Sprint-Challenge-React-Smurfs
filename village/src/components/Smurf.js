import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3 className="smurfName">{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p className="sAge" >{props.age} smurf years old</p>
      <button className="delete-btn" onClick={e => props.deleteSmurf(e, props.id)}>Delete</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: '',
  id: ''
};

export default Smurf;

