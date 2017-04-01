console.log('\t\t\t>> amd-providing-to-umd/dep');

define('amd-providing-to-umd/dep', [], function() {
  return function(message) {
    return '[amd-providing-to-umd/dep message=' + message + ']';
  }
});

console.log('\t\t\t<< amd-providing-to-umd/dep');
