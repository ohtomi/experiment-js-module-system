console.log('\t\t>> amd-consuming-amd dep');

define('amd-consuming-amd/dep', [], function() {
  return function(message) {
    return '[amd-consuming-amd/dep message=' + message + ']';
  }
});

console.log('\t\t<< amd-consuming-amd dep');
