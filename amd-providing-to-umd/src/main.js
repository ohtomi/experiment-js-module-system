console.log('\t\t>> amd-providing-to-umd');

define(['amd/providing-to-umd/dep'], function(dep) {
  return function(message) {
    return dep(message);
  }
});

console.log('\t\t<< amd-providing-to-umd');
