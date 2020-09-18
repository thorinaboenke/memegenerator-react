import React, { useState, Component } from 'react';
import AllMemeNames from './AllMemeNames.js';
import Select from 'react-select';
import Dropdown from './Dropdown';

const options = [
  { value: 'kermit', label: 'Kermit' },
  { value: 'cb', label: 'Confession Bear' },
  { value: 'afraid_to_ask', label: 'Afraid to ask' },
];

const MyComponent = (props) => (
  <Select
    options={options}
    // onChange={ enter here what happens on change to memeChoice}
  />
);

<MyComponent />;
