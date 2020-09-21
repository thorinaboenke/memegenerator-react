import React, { useState } from 'react';
//import { escapeReservedUrlCharacters } from './Replacer';

function escapeReservedUrlCharacters(string) {
  const escapedString = string
    .replace(/#/g, '~h')
    .replace(/\?/g, '~q')
    .replace(/\//g, '~s')
    .replace(/Jose/g, 'Coding Superhero')
    .replace(/Trump/g, 'The Cheeto in Chief');
  return escapedString;
}

const allMemeNames = {
  tenguy: 'tenguy/',
  afraid: 'afraid/',
  apcr: 'apcr/',
  older: 'older/',
  aag: 'aag/',
  atis: 'atis/',
  tried: 'tried/',
  biw: 'biw/',
  stew: 'stew/',
  blb: 'blb/',
  bihw: 'bihw/',
  kermit: 'kermit/',
  bd: 'bd/',
  ch: 'ch/',
  cbg: 'cbg/',
  wonka: 'wonka/',
  cb: 'cb/',
  gandalf: 'gandalf/',
  keanu: 'keanu/',
  cryingfloor: 'cryingfloor/',
  dsm: 'dsm/',
  disastergirl: 'disastergirl/',
  live: 'live/',
  ants: 'ants/',
  doge: 'doge/',
  trump: 'trump/',
  drake: 'drake/',
  ermg: 'ermg/',
  facepalm: 'facepalm/',
  feelsgood: 'feelsgood/',
  firsttry: 'firsttry/',
  fwp: 'fwp/',
  fa: 'fa/',
  fbf: 'fbf/',
  fmr: 'fmr/',
  fry: 'fry/',
  ggg: 'ggg/',
  grumpycat: 'grumpycat/',
  harold: 'harold/',
  hipster: 'hipster/',
  icanhas: 'icanhas/',
  crazypills: 'crazypills/',
  mw: 'mw/',
  noidea: 'noidea/',
  regret: 'regret/',
  boat: 'boat/',
  hagrid: 'hagrid/',
  sohappy: 'sohappy/',
  captain: 'captain/',
  bender: 'bender/',
  inigo: 'inigo/',
  iw: 'iw/',
  ackbar: 'ackbar/',
  happening: 'happening/',
  joker: 'joker/',
  ive: 'ive/',
  jd: 'jd/',
  ll: 'll/',
  lrv: 'lrv/',
  leo: 'leo/',
  away: 'away/',
  morpheus: 'morpheus/',
  mb: 'mb/',
  badchoice: 'badchoice/',
  'mini-keanu': 'mini-keanu/',
  mmm: 'mmm/',
  spongebob: 'spongebob/',
  'soup-nazi': 'soup-nazi/',
  jetpack: 'jetpack/',
  imsorry: 'imsorry/',
  red: 'red/',
  mordor: 'mordor/',
  oprah: 'oprah/',
  oag: 'oag/',
  remembers: 'remembers/',
  persian: 'persian/',
  philosoraptor: 'philosoraptor/',
  jw: 'jw/',
  patrick: 'patrick/',
  rollsafe: 'rollsafe/',
  'sad-obama': 'sad-obama/',
  'sad-clinton': 'sad-clinton/',
  sadfrog: 'sadfrog/',
  'sad-bush': 'sad-bush/',
  'sad-biden': 'sad-biden/',
  'sad-boehner': 'sad-boehner/',
  saltbae: 'saltbae/',
  sarcasticbear: 'sarcasticbear/',
  dwight: 'dwight/',
  sb: 'sb/',
  ss: 'ss/',
  soa: 'soa/',
  sf: 'sf/',
  dodgson: 'dodgson/',
  money: 'money/',
  snek: 'snek/',
  sk: 'sk/',
  sohot: 'sohot/',
  nice: 'nice/',
  'awesome-awkward': 'awesome-awkward/',
  awesome: 'awesome/',
  'awkward-awesome': 'awkward-awesome/',
  awkward: 'awkward/',
  'stop-it': 'stop-it/',
  fetch: 'fetch/',
  success: 'success/',
  scc: 'scc/',
  ski: 'ski/',
  'aint-got-time': 'aint-got-time/',
  officespace: 'officespace/',
  interesting: 'interesting/',
  toohigh: 'toohigh/',
  bs: 'bs/',
  fine: 'fine/',
  sparta: 'sparta/',
  ugandanknuck: 'ugandanknuck/',
  puffin: 'puffin/',
  whatyear: 'whatyear/',
  center: 'center/',
  both: 'both/',
  winter: 'winter/',
  xy: 'xy/',
  buzz: 'buzz/',
  yodawg: 'yodawg/',
  yuno: 'yuno/',
  yallgot: 'yallgot/',
  gears: 'gears/',
  bad: 'bad/',
  elf: 'elf/',
  chosen: 'chosen/',
};

function Memegenerator() {
  function Input() {
    // set default values
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [memeChoice, setMemeChoice] = useState('kermit');
    const [showPreview, setShowPreview] = useState(false);
    const [urlArray] = useState([]);

    function appendUrl(newUrl) {
      urlArray.push(newUrl);
      return;
    }

    function handlePreview() {
      setShowPreview(!showPreview);
      return;
    }

    // build url from the inputs, this is passed as props to preview and downloader
    const exampleurl = 'https://api.memegen.link/images/kermit/What/API.jpg';
    const url =
      'https://api.memegen.link/images/' +
      memeChoice +
      '/' +
      escapeReservedUrlCharacters(text1) +
      '/' +
      escapeReservedUrlCharacters(text2) +
      '.jpg';

    return (
      // Input for the text fields, update via onChange
      <>
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
                <MemeOptions MemeObject={allMemeNames} />
              </select>
            </label>
          </form>
          <div />
          <DownloadButton
            memeChoice={memeChoice}
            text1={text1}
            text2={text2}
            url={url}
            imagename={memeChoice}
            appendUrl={appendUrl}
            urlArray={urlArray}
          />
          <Preview
            memeChoice={memeChoice}
            text1={text1}
            text2={text2}
            url={url}
            exampleurl={exampleurl}
            handlePreview={handlePreview}
            showPreview={showPreview}
          />
        </div>
        <div>
          <History urlArray={urlArray} />
        </div>
      </>
    );
  }

  return (
    <div>
      <Input />
    </div>
  );

  function Preview(props) {
    const showPreview = props.showPreview;
    return !showPreview ? (
      <>
        <button onClick={props.handlePreview}>Show Preview</button>
        <p>Preview:</p>
        <img src={props.exampleurl} alt={'example meme preview'} />
      </>
    ) : (
      <>
        <button onClick={props.handlePreview}>Hide Preview</button>
        <p>Preview:</p>
        <img src={props.url} alt={'custom meme preview'} />
      </>
    );
  }

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
}

function History(props) {
  const urlList = props.urlArray.map((url, index) => (
    <li key={index}>{url}</li>
  ));
  return <ul>{urlList}</ul>;
}

export default Memegenerator;
