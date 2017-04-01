console.log('>> amd-amd-umd');

define('amd-bootstrapping-amd-umd/main', ['amd-consuming-umd/main'], function(amd) {
  return function(selector) {
    console.log('>> calling amd-consuming-umd...');
    var container = document.querySelector(selector);
    container.appendChild(amd('amd-amd-umd'));
    console.log('<< done amd-consuming-umd !')
  }
});

console.log('<< amd-amd-umd');
