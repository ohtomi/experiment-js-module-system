import amd from 'amd-consuming-amd';

console.log('>> umd-amd-amd');

export default function(selector) {
  console.log('>> calling amd-consuming-amd...');
  var container = document.querySelector(selector);
  container.appendChild(amd('umd-amd-amd'));
  console.log('<< done amd-consuming-amd !')
};

console.log('<< umd-amd-amd');
