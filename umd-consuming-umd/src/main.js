// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import umd from 'umd-providing-to-umd';

console.log('\t>> umd-consuming-umd');

type UmdConsumingUmdProps = {
  message: string
};

export default class UmdConsumingUmd extends React.Component {

  props: UmdConsumingUmdProps;

  render() {
    let label = moment().format("YYYY-MM-DD");
    return (
      <pre>
        {'umd-providing-to-umd returns ' + umd(this.props.message) + ' at ' + label}
      </pre>
    )
  }
}

console.log('\t<< umd-consuming-umd');
