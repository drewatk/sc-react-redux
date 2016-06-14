import React from 'react';
import ReactDOM from 'react-dom';
import stream from './components/Stream';

const tracks = [
  {
    title: 'Some track'
  },
  {
    title: 'Who let the dogs out?'
  }
];

ReactDOM.render(
  <Stream tracks={tracks} />,
  document.getElementById('app')
);
