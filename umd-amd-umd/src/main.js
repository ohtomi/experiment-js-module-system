import amd from 'amd-consuming-umd';

console.log('>> umd-amd-umd');

export default function() {
  console.log('>> calling amd-consuming-umd...');
  console.log(amd('umd-amd-umd'));
  console.log('<< done amd-consuming-umd !')
};

console.log('<< umd-amd-umd');
