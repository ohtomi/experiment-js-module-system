console.log('\t>> amd-consuming-amd');

define('amd-consuming-amd/main', ['amd-consuming-amd/dep', 'amd-providing-to-amd/main'], function(dep, amd) {
  return function(message) {
    return amd(dep(message));
  };
});

console.log('\t<< amd-consuming-amd');
