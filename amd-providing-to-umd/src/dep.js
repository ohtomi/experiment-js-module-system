console.log('\t\t\t>> amd-providing-to-umd dep');

define('amd/providing-to-umd/dep', [], function() {
  return function(message) {
    return '<apu-dep>' + message + '</apu-dep>'
  }
});

console.log('\t\t\t<< amd-providing-to-umd dep');
