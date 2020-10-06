import React, { useState } from 'react';
import { escapeReservedUrlCharacters } from './escapeReservedUrlCharacters';
import Preview from './Preview';
import DownloadButton from './DownloadButton';
import MemeOptions from './MemeOptions';

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
  // set default values
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [memeChoice, setMemeChoice] = useState('kermit');
  const [showPreview, setShowPreview] = useState(false);

  const handlePreview = () => {
    setShowPreview(!showPreview);
  };

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
    <>
      <div>
        <label htmlFor="tx1">Enter first line of text</label>
        <input
          value={text1}
          id="tx1"
          type="text"
          onChange={(event) => setText1(event.currentTarget.value)}
        />
        <p></p>

        <label htmlFor="tx2">Enter second line of text</label>
        <input
          id="tx2"
          type="text"
          onChange={(event) => setText2(event.currentTarget.value)}
        ></input>
        <p></p>
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
        <div />
        <DownloadButton
          memeChoice={memeChoice}
          text1={text1}
          text2={text2}
          url={url}
          imagename={memeChoice}
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
    </>
  );
}

export default Memegenerator;
