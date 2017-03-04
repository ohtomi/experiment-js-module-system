import amd from 'amd-consuming-amd';

console.log('>> umd-amd-amd');

export default function() {
  console.log('>> calling amd-consuming-amd...');
  console.log(amd('umd-amd-amd'));
  console.log('<< done amd-consuming-amd !')
};

console.log('<< umd-amd-amd');
