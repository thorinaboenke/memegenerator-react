import React, { useState, Component } from 'react';
import AllMemeNames from './AllMemeNames.js';
import Select from 'react-select';
import Dropdown from './Dropdown';
import { DownloadFile } from './DownloadFile';
import DownloadFileExample from './DownloadFile';

export default function Memegenerator() {
  const [text1, setText1] = useState('text1');
  const [text2, setText2] = useState('text2');
  const [memeChoice, setMemeChoice] = useState('kermit');
  const url =
    'https://api.memegen.link/images/' +
    { memeChoice } +
    '/' +
    { text1 } +
    '/' +
    { text2 } +
    '.jpg';

  const exampleurl = 'https://api.memegen.link/images/kermit/What/API.jpg';

  function TextInputFields() {
    return (
      <div>
        <label htmlFor="tx1">Enter first line of text</label>
        <input
          id="tx1"
          type="text"
          onChange={(event) => setText1(event.currentTarget.value)}
          label="Enter first line of text"
        ></input>
        <label htmlFor="tx2">Enter second line of text</label>
        <input
          id="tx2"
          type="text"
          onChange={(event) => setText2(event.currentTarget.value)}
          label="Enter second line of text"
        ></input>
      </div>
    );
  }

  function MemeSelectionDropdown() {
    return (
      <div>
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
        <p>You selected {memeChoice}</p>
      </div>
    );
  }

  return (
    <div>
      <TextInputFields />
      <MemeSelectionDropdown />
      <p>
        Generating meme with the text:" {text1} {text2} "
      </p>
      <p>Preview:</p>
      <Preview memeChoice={memeChoice} text1={text1} text2={text2} />
      {/* <DownloadButton memeChoice={memeChoice} text1={text1} text2={text2} /> */}
      {/* <DownloadFileExample url={exampleurl} /> */}
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
  return <img alt={'Preview of selected meme'} src={url} />;
}

export default Memegenerator;
// function DownloadButton(props) {
//   /* do something on click that triggers download of the image*/
//   const url =
//     'https://api.memegen.link/images/' +
//     props.memeChoice +
//     '/' +
//     props.text1 +
//     '/' +
//     props.text2 +
//     '.jpg';
//   return <button onClick={DownloadFile(url)}>Download Image</button>;
// }
