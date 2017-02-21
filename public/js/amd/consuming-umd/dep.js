console.log('\t\t\t>> amd-consuming-umd dep');

define([], function() {
  return function(message) {
    return '<acu-dep>' + message + '</acu-dep>'
  }
});

console.log('\t\t\t<< amd-consuming-umd dep');
