// @flow

import moment from 'moment';
import amd from 'amd-providing-to-umd';

console.log('\t>> umd-consuming-amd');

export default function(message: string): string {
  let label = moment().format("YYYY-MM-DD");
  return amd('<uca label="' + label + '">' + message + '<uca>');
};

console.log('\t<< umd-consuming-amd');
