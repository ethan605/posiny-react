/**
 * Posiny App
 * @providesModule Posiny.Index
 * @flow
 */

import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

class Posiny extends React.Component {
  render() {
    return <App />;
  }
}

ReactDOM.render(<Posiny />, document.getElementById('app'));