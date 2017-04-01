// @flow

var path = require('path');
var jsdom = require('jsdom').jsdom;
var requirejs = require('requirejs');

global.document = jsdom('<body><div id="root"></div></body>');
global.window = document.defaultView;
global.navigator = window.navigator;

requirejs.config({
  baseUrl: path.resolve(__dirname + '/../../public/js')
});
