define('amd-bootstrapping-umd-umd/main.test', ['chai', 'amd-bootstrapping-umd-umd/main'], function(chai, amd) {

  suite('amd-bootstrapping-umd-umd/main.test', function() {
    test('-', function() {
      amd('amd-bootstrapping-umd-umd-main');
      var ui = document.getElementById('amd-bootstrapping-umd-umd-main');
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
      chai.assert.match(text, /amd-umd-umd/);
    });
  });

});
