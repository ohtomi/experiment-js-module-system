// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import UmdConsumingUmd from 'umd-consuming-umd';

console.log('>> umd-umd-umd');

export default function(selector: string) {
  console.log('>> calling umd-consuming-umd...');
  ReactDOM.render(
    <UmdConsumingUmd message={'umd-umd-umd'}></UmdConsumingUmd>,
    document.getElementById(selector)
  );
  console.log('<< done umd-consuming-umd !')
};

console.log('<< umd-umd-umd');
