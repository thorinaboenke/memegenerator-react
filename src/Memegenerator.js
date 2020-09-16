import React, { useState, Component } from 'react';
import AllMemeNames from './AllMemeNames.js';
import Select from 'react-select';

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

  const options = [
    { value: 'kermit', label: 'Kermit' },
    { value: 'cb', label: 'Confession Bear' },
    { value: 'afraid_to_ask', label: 'Afraid to ask' },
  ];

  const MyComponent = () => (
    <Select
      options={options}
      onChange= {(e) => { console.log(getValue(e))}
    />
  );

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
      <MyComponent />
      <p>
        Generating meme with the text:" {text1} {text2} "
      </p>
      <p>Preview</p>
      <Preview memeChoice={memeChoice} text1={text1} text2={text2} />
      <DownloadButton memeChoice={memeChoice} text1={text1} text2={text2} />
    </div>
  );
}

function MemeDropdown() {
  return <div></div>;
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
  /* do something on click that triggers download of the image*/
  return <button>Download Image</button>;
}
