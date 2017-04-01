console.log('\t>> amd-consuming-amd');

define('amd-consuming-amd/main', ['amd-consuming-amd/dep', 'amd-providing-to-amd/main'], function(dep, amd) {
  return function(message) {
    var pre = document.createElement('pre');
    pre.textContent = 'amd-providing-to-amd returns ' + amd(message) + ' and amd-consuming-amd/dep returns ' + dep(message);
    return pre;
  }
});

console.log('\t<< amd-consuming-amd');
