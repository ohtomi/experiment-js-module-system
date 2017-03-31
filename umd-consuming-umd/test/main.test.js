// @flow

import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import requirejs from 'requirejs';
const mymodule = requirejs('umd-consuming-umd/bundle');

test('main', t => {
  const wrapper = shallow(<mymodule.default message={'foo'} />);
  t.regex(wrapper.find('pre').text(), /foo/);
});
