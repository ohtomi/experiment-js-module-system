define('amd-providing-to-amd/main.test', ['chai', 'amd-providing-to-amd/main'], function(chai, amd) {

  suite('amd-providing-to-amd/main.test', function() {
    test('-', function() {
      var result = amd('foo');
      chai.assert.match(result, /foo/);
    });
  });

});
