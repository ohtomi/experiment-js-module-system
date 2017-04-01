define('amd-bootstrapping-amd-umd/main.test', ['chai', 'amd-bootstrapping-amd-umd/main'], function(chai, amd) {

  suite('amd-bootstrapping-amd-umd/main.test', function() {
    test('-', function() {
      amd('#amd-bootstrapping-amd-umd-main');
      var ui = document.getElementById('amd-bootstrapping-amd-umd-main');
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
      chai.assert.match(text, /amd-amd-umd/);
    });
  });

});
