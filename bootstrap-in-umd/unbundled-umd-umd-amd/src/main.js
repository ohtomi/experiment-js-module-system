import umd from 'umd-consuming-amd';

console.log('>> umd-umd-amd');

export default function() {
  console.log('>> calling umd-consuming-amd...');
  console.log(umd('umd-umd-amd'));
  console.log('<< done umd-consuming-amd !')
};

console.log('<< umd-umd-amd');
