import React from 'react';

// take the object with meme names, turn into arry with object keys map to option jsx and capitalize
function MemeOptions({memeArray}) {
  return <>{memeArray.map((name) => (
    <option key={name} value={name}>
      {name.charAt(0).toUpperCase() + name.slice(1)}
    </option>
  ))}</>;
}

export default MemeOptions;


