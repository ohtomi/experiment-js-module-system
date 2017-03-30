console.log('>> amd-umd-amd');

define('amd-bootstrapping-umd-amd/main', ['umd-consuming-amd/bundle'], function(umd) {
  return function() {
    console.log('>> calling umd-consuming-amd...');
    console.log(umd.default('amd-umd-amd'));
    console.log('<< done umd-consuming-amd !')
  };
});

console.log('<< amd-umd-amd');
