define('amd-consuming-umd/main.test', ['chai', 'amd-consuming-umd/main'], function(chai, amd) {

  suite('amd-consuming-umd/main.test', function() {
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
