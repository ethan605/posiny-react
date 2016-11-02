/**
 * @providesModule Posiny.App
 * @flow
 */

import React from 'react';
import _ from 'lodash';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <span>{_.range(10).join(' - ')}</span>
      </div>
    );
  }
}