import $ from 'jquery';

console.log('\t\t>> umd-provider');

export default function(selector) {
  console.log('\t\t>> text of "' + selector + '" is "' + $(selector).text() + '".');
};

console.log('\t\t<< umd-provider');
