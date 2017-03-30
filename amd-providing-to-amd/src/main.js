console.log('\t\t>> amd-providing-to-amd');

define('amd-providing-to-amd/main', ['amd-providing-to-amd/dep'], function(dep) {
  return function(message) {
    return dep(message);
  }
});

console.log('\t\t<< amd-providing-to-amd');
