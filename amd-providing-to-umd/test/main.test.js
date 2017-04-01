define('amd-providing-to-umd/main.test', ['chai', 'amd-providing-to-umd/main'], function(chai, amd) {

  suite('amd-providing-to-umd/main.test', function() {
    test('-', function() {
      var result = amd('foo');
      chai.assert.match(result, /foo/);
    });
  });

});
