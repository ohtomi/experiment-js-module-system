console.log('\t\t\t>> amd-providing-to-umd dep');

define([], function() {
  return function(message) {
    return '<apu-dep>' + message + '</apu-dep>'
  }
});

console.log('\t\t\t<< amd-providing-to-umd dep');
