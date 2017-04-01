console.log('\t\t>> amd-providing-to-umd');

define('amd-providing-to-umd/main', ['amd-providing-to-umd/dep'], function(dep) {
  return function(message) {
    return '[amd-providing-to-umd/main message=' + dep(message) + ']';
  }
});

console.log('\t\t<< amd-providing-to-umd');
