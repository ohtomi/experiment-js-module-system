// @flow

import moment from 'moment';
import umd from 'umd-providing-to-umd';

console.log('\t\t>> umd-consuming-umd');

export default function(message: string): string {
  let label = moment().format("YYYY-MM-DD");
  return umd('<ucu label="' + label + '">' + message + '<ucu>');
};

console.log('\t\t<< umd-consuming-umd');
