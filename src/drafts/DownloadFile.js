import React, { setState } from 'react';
import fs from 'fs';

// export function DownloadFile(props) {
//   fetch(props.url)
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));
// }

// export function DownloadFile(props) {
//   fetch(props.url)
//     .then((response) => {
//       const dest = fs.createWriteStream('./meme.jpg');
//       response.body.pipe(dest);
//     })
//     .catch((error) => console.error(error));
// }

// async function DownloadFileAsync(props) {
//   const url = props.url;
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);
// }

class DownloadFileExample extends React.Component {
  constructor(props) {
    super(props);
  }

  downloadEmployeeData = () => {
    fetch('https://api.memegen.link/images/kermit/What/API.jpg').then(
      (response) => {
        response.blob().then((blob) => {
          let url = window.URL.createObjectURL(blob);
          let a = document.createElement('a');
          a.href = url;
          a.download = 'meme.jpg';
          a.click();
        });
        //window.location.href = response.url;
      },
    );
  };

  render() {
    return (
      <div id="container">
        <h1>Download File using React App</h1>
        <h3>Download Employee Data using Button</h3>
        <button onClick={this.downloadEmployeeData}>Download</button>
        <p />
        <h3>Download Employee Data using Link</h3>
        <a href="#" onClick={this.downloadEmployeeData}>
          Download
        </a>
      </div>
    );
  }
}

export default DownloadFileExample;
