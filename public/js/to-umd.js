console.log('>> to-umd');

define(['jquery', 'umd-provider'], function(_, umd) {
  console.log('>> calling umd-provider...');
  umd.default('div');
  console.log('<< done umd-provider !')
});

console.log('<< to-umd');
