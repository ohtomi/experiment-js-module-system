// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import amd from 'amd-providing-to-umd';

console.log('\t>> umd-consuming-amd');

type UmdConsumingAmdProps = {
  message: string
};

export default class UmdConsumingAmd extends React.Component {

  props: UmdConsumingAmdProps;

  render() {
    let label = moment().format("YYYY-MM-DD");
    return (
      <pre>
        {'amd-providing-to-umd returns ' + amd(this.props.message) + ' at ' + label}
      </pre>
    )
  }
}

console.log('\t<< umd-consuming-amd');
