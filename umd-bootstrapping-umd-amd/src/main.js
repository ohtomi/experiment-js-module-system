// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import UmdConsumingAmd from 'umd-consuming-amd';

console.log('>> umd-umd-amd');

export default function(selector: string) {
  console.log('>> calling umd-consuming-amd...');
  ReactDOM.render(
    <UmdConsumingAmd message={'umd-umd-amd'}></UmdConsumingAmd>,
    document.getElementById(selector)
  );
  console.log('<< done umd-consuming-amd !')
};

console.log('<< umd-umd-amd');
