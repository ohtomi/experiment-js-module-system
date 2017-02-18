console.log('>> to-amd');

define(['amd-provider'], function(amd) {
  console.log('>> calling amd-provider...');
  amd('div');
  console.log('<< done amd-provider !')
});

console.log('<< to-amd');
