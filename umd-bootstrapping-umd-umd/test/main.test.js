// @flow

import test from 'ava';

import requirejs from 'requirejs';
const mymodule = requirejs('umd-bootstrapping-umd-umd/bundle');

test('main', t => {
  mymodule.default('root');
  const ui = document.getElementById('root');
  if (!ui) {
    t.fail();
    return;
  }
  const pre = ui.querySelector('pre');
  if (!pre) {
    t.fail();
    return;
  }
  const text = pre.textContent;
  t.regex(text, /umd-umd-umd/);

  // MEMO the following assertion doesn't return if fail.
  // t.regex(ui.querySelector('pre').textContent, /umd-umd-umd/);
});
