console.log('\t\t>> amd-provider');

define(['jquery'], function($) {
  return function(selector) {
    console.log('\t\t>> text of "' + selector + '" is "' + $(selector).text() + '".');
  }
});

console.log('\t\t<< amd-provider');
