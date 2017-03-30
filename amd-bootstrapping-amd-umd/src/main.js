console.log('>> amd-amd-umd');

define('amd-bootstrapping-amd-umd/main', ['amd-consuming-umd/main'], function(amd) {
  return function() {
    console.log('>> calling amd-consuming-umd...');
    console.log(amd('amd-amd-umd'));
    console.log('<< done amd-consuming-umd !')
  };
});

console.log('<< amd-amd-umd');
