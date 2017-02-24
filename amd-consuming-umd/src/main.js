console.log('\t\t>> amd-consuming-umd');

define('amd/consuming-umd/main', ['amd/consuming-umd/dep', 'umd/providing-to-amd/bundle'], function(dep, umd) {
  return function(message) {
    return umd.default(dep(message));
  }
});

console.log('\t\t<< amd-consuming-umd');
