import amd from 'amd-consuming-umd';

console.log('>> umd-amd-umd');

export default function(selector) {
  console.log('>> calling amd-consuming-umd...');
  var container = document.querySelector(selector);
  container.appendChild(amd('umd-amd-umd'));
  console.log('<< done amd-consuming-umd !')
};

console.log('<< umd-amd-umd');
