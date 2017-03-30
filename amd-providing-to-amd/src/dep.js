console.log('\t\t\t>> amd-providing-to-amd dep');

define('amd-providing-to-amd/dep', [], function() {
  return function(message) {
    return '<apa-dep>' + message + '</apa-dep>'
  }
});

console.log('\t\t\t<< amd-providing-to-amd dep');
