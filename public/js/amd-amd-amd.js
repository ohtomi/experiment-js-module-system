console.log('>> amd-amd-amd');

define(['amd/consuming-amd/main'], function(amd) {
  console.log('>> calling amd-consuming-amd...');
  console.log(amd('amd-amd-amd'));
  console.log('<< done amd-consuming-amd !')
});

console.log('<< amd-amd-amd');
