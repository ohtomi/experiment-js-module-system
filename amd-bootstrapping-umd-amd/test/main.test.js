define('amd-bootstrapping-umd-amd/main.test', ['chai', 'amd-bootstrapping-umd-amd/main'], function(chai, amd) {

  suite('amd-bootstrapping-umd-amd/main.test', function() {
    test('-', function() {
      amd('amd-bootstrapping-umd-amd-main');
      var ui = document.getElementById('amd-bootstrapping-umd-amd-main');
      if (!ui) {
        chai.assert.fail();
        return;
      }
      var pre = ui.querySelector('pre');
      if (!pre) {
        chai.assert.fail();
        return;
      }
      var text = pre.textContent;
      chai.assert.match(text, /amd-umd-amd/);
    });
  });

});
