import React from 'react';

// take the object with meme names, turn into arry with object keys map to option jsx and capitalize
function MemeOptions(props) {
  const nameArray = Object.keys(props.MemeObject);
  const Choices = nameArray.map((name) => (
    <option key={name.toString()} value={name}>
      {name.toString().charAt(0).toUpperCase() + name.toString().slice(1)}
    </option>
  ));
  return <>{Choices}</>;
}

export default MemeOptions;
