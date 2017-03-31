// @flow

import moment from 'moment';

console.log('\t\t>> umd-providing-to-amd');

export default function(message: string): string {
  let label = moment().format("YYYY-MM-DD");
  return '[umd-providing-to-amd=]' + label + ', message=' + message + ']';
};

console.log('\t\t<< umd-providing-to-amd');
