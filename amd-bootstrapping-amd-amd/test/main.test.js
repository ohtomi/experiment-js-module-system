define('amd-bootstrapping-amd-amd/main.test', ['chai', 'amd-bootstrapping-amd-amd/main'], function(chai, amd) {

  suite('amd-bootstrapping-amd-amd/main.test', function() {
    test('-', function() {
      amd('#amd-bootstrapping-amd-amd-main');
      var ui = document.getElementById('amd-bootstrapping-amd-amd-main');
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
      chai.assert.match(text, /amd-amd-amd/);
    });
  });

});
