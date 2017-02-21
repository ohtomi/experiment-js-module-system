console.log('\t\t\t>> amd-providing-to-amd dep');

define([], function() {
  return function(message) {
    return '<apa-dep>' + message + '</apa-dep>'
  }
});

console.log('\t\t\t<< amd-providing-to-amd dep');
