// @flow

var path = require('path');
var requirejs = require('requirejs');

requirejs.config({
  baseUrl: path.resolve(__dirname + '/../../public/js')
});
