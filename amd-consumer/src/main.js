console.log('\t>> amd-consumer');

define(['amd-provider'], function(amd) {
  return function(selector) {
    amd(selector);
  };
});

console.log('\t<< amd-consumer');
