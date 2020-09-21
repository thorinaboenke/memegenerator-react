import React from 'react';

function DownloadButton(props) {
  // 1. fetch gets data from given url (passed as props)
  //2. The blob() methodtakes a Response stream and reads it to completion. It returns a promise that resolves with a Blob (binary large object). A Blob is a file-like object of immutable, raw data; they can be read as text or binary data, or converted into a ReadableStream so its methods can be used for processing the data.
  // 3. window.URL.createObjectURL(blob) : static method creates a DOMString containing a URL representing the object given in the parameter. The URL lifetime is tied to the document in the window on which it was created. The new object URL represents the specified File object or Blob object.
  //4. create element a on the object
  //5. set the href attribute to the url
  // 6. a.click() simulates click of the temporarily created link and triggers the download
  function downloadData() {
    props.appendUrl(props.url);
    fetch(props.url).then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = props.imagename + '.jpg';
        a.click();
      });
      //window.location.href = response.url;
    });
  }
  return (
    <div id="container">
      <button onClick={downloadData}>Download Meme</button>
    </div>
  );
}

export default DownloadButton;
