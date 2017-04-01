console.log('\t\t\t>> amd-providing-to-amd/dep');

define('amd-providing-to-amd/dep', [], function() {
  return function(message) {
    return '[amd-providing-to-amd/dep message=' + message + ']';
  }
});

console.log('\t\t\t<< amd-providing-to-amd/dep');
