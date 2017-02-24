console.log('>> amd-amd-umd');

define('amd-amd-umd', ['amd/consuming-umd/main'], function(amd) {
  console.log('>> calling amd-consuming-umd...');
  console.log(amd('amd-amd-umd'));
  console.log('<< done amd-consuming-umd !')
});

console.log('<< amd-amd-umd');
