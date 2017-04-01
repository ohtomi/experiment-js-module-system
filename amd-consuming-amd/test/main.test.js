define('amd-consuming-amd/main.test', ['chai', 'amd-consuming-amd/main'], function(chai, amd) {

  suite('amd-consuming-amd/main.test', function() {
    test('-', function() {
      var pre = amd('foo');
      if (!pre) {
        chai.assert.fail();
        return;
      }
      var text = pre.textContent;
      chai.assert.match(text, /foo/);
    });
  });

});
