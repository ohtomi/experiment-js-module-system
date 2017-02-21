console.log('>> amd-umd-umd');

define(['umd/consuming-umd/bundle'], function(umd) {
  console.log('>> calling umd-consuming-umd...');
  console.log(umd.default('amd-umd-umd'));
  console.log('<< done umd-consuming-umd !')
});

console.log('<< amd-umd-umd');
