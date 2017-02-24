console.log('\t\t\t>> amd-consuming-umd dep');

define('amd/consuming-umd/dep', [], function() {
  return function(message) {
    return '<acu-dep>' + message + '</acu-dep>'
  }
});

console.log('\t\t\t<< amd-consuming-umd dep');
