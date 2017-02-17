console.log('>> amd-to-amd');

define(['amd-consumer'], function(amd) {
  console.log('>> calling amd-consumer...');
  amd('div');
  console.log('<< done amd-consumer !')
});

console.log('<< amd-to-amd');
