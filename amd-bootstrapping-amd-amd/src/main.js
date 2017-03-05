console.log('>> amd-amd-amd');

define('amd/bootstrapping-amd-amd/main', ['amd/consuming-amd/main'], function(amd) {
  return function() {
    console.log('>> calling amd-consuming-amd...');
    console.log(amd('amd-amd-amd'));
    console.log('<< done amd-consuming-amd !')
  };
});

console.log('<< amd-amd-amd');
