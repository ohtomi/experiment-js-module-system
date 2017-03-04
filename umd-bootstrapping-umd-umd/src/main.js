import umd from 'umd-consuming-umd';

console.log('>> umd-umd-umd');

export default function() {
  console.log('>> calling umd-consuming-umd...');
  console.log(umd('umd-umd-umd'));
  console.log('<< done umd-consuming-umd !')
};

console.log('<< umd-umd-umd');
