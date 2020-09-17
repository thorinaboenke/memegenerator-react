import React, { useState, Component } from 'react';
import AllMemeNames from './AllMemeNames.js';
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
      // Input for the text fields
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
        {/* // Dropdownmenu */}
        <form>
          <label>
            Pick your favorite meme:
            <select
              value={memeChoice}
              onChange={(e) => {
                setMemeChoice(e.currentTarget.value);
              }}
            >
              <option value="kermit">Kermit</option>
              <option value="cb">Confession Bear</option>
              <option value="blb">Bad Luck Brian</option>
            </select>
          </label>
        </form>
        <div />
        <p>Preview:</p>
        <Preview memeChoice={memeChoice} text1={text1} text2={text2} />
        <DownloadButton />
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
