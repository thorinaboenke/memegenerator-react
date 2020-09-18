import React from 'react';
import Memegenerator from './Memegenerator';
import './App.css';

function App() {
  return (
    <div>
      <h1>Custom meme generator</h1>
      <p>
        Everything there is to know about memes on
        <a href="https://knowyourmeme.com/"> Knowyourmeme</a>.
      </p>
      <Memegenerator />
    </div>
  );
}

export default App;
