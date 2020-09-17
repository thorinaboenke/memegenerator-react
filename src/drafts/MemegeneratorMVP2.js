import React, { useState, Component } from 'react';
import { AllMemeNames } from './AllMemeNames.js';
import Select from 'react-select';

// import Dropdown from './Dropdown';
//import { DownloadFile } from '../DownloadFile.js';
// import DownloadFile from './DownloadFile';

export default function Memegenerator() {
  const exampleurl = 'https://api.memegen.link/images/kermit/What/API.jpg';

  function Input() {
    // set default values
    const [text1, setText1] = useState('text1');
    const [text2, setText2] = useState('text2');
    const [memeChoice, setMemeChoice] = useState('kermit');

    return (
      // Input for the text fields, update via onChange
      <div>
        <form>
          <label htmlFor="tx1">Enter first line of text</label>
          <input
            value={text1}
            id="tx1"
            type="text"
            onChange={(event) => setText1(event.currentTarget.value)}
          />
          <label htmlFor="tx2">Enter second line of text</label>
          <input
            id="tx2"
            type="text"
            onChange={(event) => setText2(event.currentTarget.value)}
          ></input>
        </form>
        {/* Dropdownmenu select > options, iterate over Object with all the names */}
        <form>
          <label>
            Pick your favorite meme:
            <select
              value={memeChoice}
              onChange={(e) => {
                setMemeChoice(e.currentTarget.value);
              }}
            >
              <MemeOptions MemeObject={AllMemeNames} />
            </select>
          </label>
        </form>
        <div />
        <p>Preview:</p>
        <Preview memeChoice={memeChoice} text1={text1} text2={text2} />
        <DownloadButton memeChoice={memeChoice} text1={text1} text2={text2} />
      </div>
    );
  }

  return (
    <div>
      <Input />
    </div>
  );
}

function Preview(props) {
  const url =
    'https://api.memegen.link/images/' +
    props.memeChoice +
    '/' +
    props.text1 +
    '/' +
    props.text2 +
    '.jpg';
  return <img src={url} />;
}

function DownloadButton(props) {
  const url =
    'https://api.memegen.link/images/' +
    props.memeChoice +
    '/' +
    props.text1 +
    '/' +
    props.text2 +
    '.jpg';
  // 1. fetch gets data from given url
  //2. The blob() methodtakes a Response stream and reads it to completion. It returns a promise that resolves with a Blob (binary large object). A Blob is a file-like object of immutable, raw data; they can be read as text or binary data, or converted into a ReadableStream so its methods can be used for processing the data.
  // 3. window.URL.createObjectURL(blob) : static method creates a DOMString containing a URL representing the object given in the parameter. The URL lifetime is tied to the document in the window on which it was created. The new object URL represents the specified File object or Blob object.
  //4. create element a on the object
  //5. set the href attribute to the url
  // 6. a.click simulates click of the temporarily created link
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
      <button onClick={downloadData}>Download Meme</button>
    </div>
  );
}
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
