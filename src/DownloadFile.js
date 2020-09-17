import React, { setState } from 'react';
function DownloadFile(props) {
  const url = props.url;
  function downloadData() {
    fetch(url).then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = 'meme.jpg';
        a.click();
      });
      //window.location.href = response.url;
    });
  }
  return (
    <div id="container">
      <h3>Download Data using Button</h3>
      <button onClick={downloadData}>Download</button>
    </div>
  );
}

export default DownloadFile;
