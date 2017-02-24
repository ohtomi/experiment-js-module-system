console.log('>> amd-umd-amd');

define('amd-umd-amd', ['umd/consuming-amd/bundle'], function(umd) {
  console.log('>> calling umd-consuming-amd...');
  console.log(umd.default('amd-umd-amd'));
  console.log('<< done umd-consuming-amd !')
});

console.log('<< amd-umd-amd');
