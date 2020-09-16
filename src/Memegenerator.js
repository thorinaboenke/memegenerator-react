import React, { useState } from 'react';

export default function Memegenerator() {
  const [text1, setText1] = useState('text1');
  const [text2, setText2] = useState('text2');
  const [memeChoice, setMemeChoice] = useState('kermit');

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
      <p>
        Generating meme with the text: {text1} {text2}
      </p>
    </div>
  );
}

function MemeDropdown() {
  return <div></div>;
}
