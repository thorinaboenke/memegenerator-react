import React from 'react';

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

export default Preview;
