console.log('\t\t>> amd-consuming-umd dep');

define('amd-consuming-umd/dep', [], function() {
  return function(message) {
    return '[amd-consuming-umd/dep message=' + message + ']';
  }
});

console.log('\t\t<< amd-consuming-umd dep');
