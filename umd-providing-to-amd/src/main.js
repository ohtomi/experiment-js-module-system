import moment from 'moment';

console.log('\t\t\t>> umd-providing-to-amd');

export default function(message) {
  let label = moment().format("YYYY-MM-DD");
  return '<upa label="' + label + '">' + message + '<upa>';
};

console.log('\t\t\t<< umd-providing-to-amd');
