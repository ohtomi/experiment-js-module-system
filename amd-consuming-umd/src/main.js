console.log('\t>> amd-consuming-umd');

define('amd-consuming-umd/main', ['amd-consuming-umd/dep', 'umd-providing-to-amd/bundle'], function(dep, umd) {
  return function(message) {
    var pre = document.createElement('pre');
    pre.textContent = 'umd-providing-to-amd returns ' + umd.default(message) + ' and amd-consuming-umd/dep returns ' + dep(message);
    return pre;
  }
});

console.log('\t<< amd-consuming-umd');
