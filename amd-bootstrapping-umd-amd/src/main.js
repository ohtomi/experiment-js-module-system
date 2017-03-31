console.log('>> amd-umd-amd');

define('amd-bootstrapping-umd-amd/main', ['react', 'react-dom', 'umd-consuming-amd/bundle'], function(React, ReactDOM, umd) {
  return function(selector) {
    console.log('>> calling umd-consuming-amd...');
    ReactDOM.render(
      React.createElement(umd.default, { message: 'amd-umd-amd'}),
      document.getElementById(selector)
    );
    console.log('<< done umd-consuming-amd !')
  };
});

console.log('<< amd-umd-amd');
