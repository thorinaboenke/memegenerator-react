import React, { useState } from 'react';

export default function Dropdown() {
  const [meme, setMeme] = useState('kermit');
  return (
    <div>
      <form>
        <label>
          Pick your favorite flavor:
          <select
            value={meme}
            onChange={(e) => {
              setMeme(e.currentTarget.value);
            }}
          >
            <option value="kermit">Kermitt</option>
            <option value="cb">Confession Bear</option>
            <option value="afraid_to_ask">Afraid to ask</option>
            <option value="blb">Bad Luck Brian</option>
          </select>
        </label>
      </form>
      <p>You selected {meme}</p>
    </div>
  );
}

function Dropdown() {
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
      <DownloadButton memeChoice={memeChoice} text1={text1} text2={text2} />
    </div>
  );
}
