console.log('>> amd-umd-umd');

define('amd-bootstrapping-umd-umd/main', ['react', 'react-dom', 'umd-consuming-umd/bundle'], function(React, ReactDOM, umd) {
  return function(selector) {
    console.log('>> calling umd-consuming-umd...');
    ReactDOM.render(
      React.createElement(umd.default, { message: 'amd-umd-umd'}),
      document.getElementById(selector)
    );
    console.log('<< done umd-consuming-umd !')
  }
});

console.log('<< amd-umd-umd');
