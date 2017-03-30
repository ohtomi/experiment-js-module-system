console.log('>> amd-umd-umd');

define('amd-bootstrapping-umd-umd/main', ['umd-consuming-umd/bundle'], function(umd) {
  return function() {
    console.log('>> calling umd-consuming-umd...');
    console.log(umd.default('amd-umd-umd'));
    console.log('<< done umd-consuming-umd !')
  };
});

console.log('<< amd-umd-umd');
