// @flow

import test from 'ava';

import requirejs from 'requirejs';
const mymodule = requirejs('umd/consuming-amd/bundle');

test('main', t => {
  const result = mymodule.default('foo');
  t.regex(result, /foo/);
});
