import React from 'react';

function DownloadButton(props) {
  return (
    <div id="container">
      <button onClick={props.downloadData}>Download Meme</button>
    </div>
  );
}

export default DownloadButton;
