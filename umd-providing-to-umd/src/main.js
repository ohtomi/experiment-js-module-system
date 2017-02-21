import moment from 'moment';

console.log('\t\t\t>> umd-providing-to-umd');

export default function(message) {
  let label = moment().format("YYYY-MM-DD");
  return '<upu label="' + label + '">' + message + '<upu>';
};

console.log('\t\t\t<< umd-providing-to-umd');
