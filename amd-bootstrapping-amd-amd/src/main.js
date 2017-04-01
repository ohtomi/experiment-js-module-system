console.log('>> amd-amd-amd');

define('amd-bootstrapping-amd-amd/main', ['amd-consuming-amd/main'], function(amd) {
  return function(selector) {
    console.log('>> calling amd-consuming-amd...');
    var container = document.querySelector(selector);
    container.appendChild(amd('amd-amd-amd'));
    console.log('<< done amd-consuming-amd !')
  }
});

console.log('<< amd-amd-amd');
