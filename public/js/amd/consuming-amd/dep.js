console.log('\t\t>> amd-consuming-amd dep');

define([], function() {
  return function(message) {
    return '<aca-dep>' + message + '</aca-dep>'
  }
});

console.log('\t\t<< amd-consuming-amd dep');
