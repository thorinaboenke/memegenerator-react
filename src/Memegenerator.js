import React, { useState } from 'react';
import { escapeReservedUrlCharacters } from './escapeReservedUrlCharacters';
import DownloadButton from './DownloadButton';
import MemeOptions from './MemeOptions';


const allMemeNames =[ 
"tenguy"
,"afraid"
,"apcr"
,"older"
,"aag"
,"atis"
,"tried"
,"biw"
,"stew"
,"blb"
, "bihw"
, "kermit"
, "bd"
, "ch"
, "cbg"
, "wonka"
, "cb"
, "gandalf"
, "keanu"
, "cryingfloor"
, "dsm"
, "disastergirl"
, "live"
, "ants"
, "doge"
, "trump"
, "drake"
, "ermg"
, "facepalm"
, "feelsgood"
, "firsttry"
, "fwp"
, "fa"
, "fbf"
, "fmr"
, "fry"
, "ggg"
, "grumpycat"
, "harold"
, "hipster"
, "icanhas"
, "crazypills"
, "mw"
, "noidea"
, "regret"
, "boat"
, "hagrid"
, "sohappy"
, "captain"
, "bender"
, "inigo"
, "iw"
, "ackbar"
, "happening"
, "joker"
, "ive"
, "jd"
, "ll"
, "lrv"
, "leo"
, "away"
, "morpheus"
, "mb"
, "badchoice"
, "mini-keanu"
, "mmm"
, "spongebob"
, "soup-nazi"
, "jetpack"
, "imsorry"
, "red"
, "mordor"
, "oprah"
, "oag"
, "remembers"
, "persian"
, "philosoraptor"
, "jw"
, "patrick"
, "rollsafe"
, "sad-obama"
, "sad-clinton"
, "sadfrog"
, "sad-bush"
, "sad-biden"
, "sad-boehner"
, "saltbae"
, "sarcasticbear"
, "dwight"
, "sb"
, "ss"
, "soa"
, "sf"
, "dodgson"
, "money"
, "snek"
, "sk"
, "sohot"
, "nice"
, "awesome-awkward"
,"awesome"
,"awkward-awesome"
,"awkward"
,"stop-it"
,"fetch"
,"success"
,"scc"
,"ski"
,"aint-got-time"
,"officespace"
,"interesting"
,"toohigh"
,"bs"
,"fine"
,"sparta"
,"ugandanknuck"
,"puffin"
,"whatyear"
,"center"
,"both"
,"winter"
,"xy"
,"buzz"
,"yodawg"
,"yuno"
,"yallgot"
,"gears"
,"bad"
,"elf"
,"chosen"]

function Memegenerator() {
  // set default values
  const [text1, setText1] = useState('Text1');
  const [text2, setText2] = useState('Text2');
  const [memeChoice, setMemeChoice] = useState('kermit');
 
  const url =
    'https://api.memegen.link/images/' +
    memeChoice +
    '/' +
    escapeReservedUrlCharacters(text1) +
    '/' +
    escapeReservedUrlCharacters(text2) +
    '.jpg';

  // 1. fetch gets data from given url (passed as props)
  // 2. The blob() methodtakes a Response stream and reads it to completion. It returns a promise that resolves with a Blob (binary large object). A Blob is a file-like object of immutable, raw data; they can be read as text or binary data, or converted into a ReadableStream so its methods can be used for processing the data.
  // 3. window.URL.createObjectURL(blob) : static method creates a DOMString containing a URL representing the object given in the parameter. The URL lifetime is tied to the document in the window on which it was created. The new object URL represents the specified File object or Blob object.
  // 4. create element a on the object
  // 5. set the href attribute to the url
  // 6. a.click() simulates click of the temporarily created link and triggers the download
  // 7. remove temporary a tag again
  function downloadData(url, imagename) {
    fetch(url).then((response) => {
      response.blob().then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = imagename + '.jpg';
        a.click();
        a.remove();
      });
    });
  }

  return (
      <div className='flex-container'>
        <label htmlFor="tx1">Enter first line of text</label>
        <input
          id="tx1"
          type="text"
          onChange={(event) => setText1(event.currentTarget.value)}
        />
      <br/>
        <label htmlFor="tx2">Enter second line of text</label>
        <input
          id="tx2"
          type="text"
          onChange={(event) => setText2(event.currentTarget.value)}
        />
        <br/>
        <label>
          Pick your favorite meme:
          <select
            value={memeChoice}
            onChange={(e) => {
              setMemeChoice(e.currentTarget.value);
            }}
          >
            <MemeOptions memeArray={allMemeNames} />
          </select>
        </label>
        <DownloadButton
          url={url}
          imagename={memeChoice}
          downloadData={downloadData}
        />
        <img src={url} alt='custom meme preview' />
      </div>
  );
}

export default Memegenerator;
