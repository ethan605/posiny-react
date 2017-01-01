/**
 * @providesModule Posiny.Components.AppTestings
 * @flow
 */

import React from 'react';
import _ from 'lodash';

// Constants
// import * as AppConstants from '/app/constants/AppConstants';
// import TestFlags from 'app/constants/TestFlags';

// Reusables
// import Extensions from '/app/reusables/Extensions';
// import Logger from '/app/reusables/Logger';

// Utils
// import StyleUtils from 'app/utils/StyleUtils';
// import FontUtils from 'app/utils/FontUtils';
// import SharedData from 'app/utils/SharedData';
// import FirebaseUtils from 'app/utils/FirebaseUtils';

// if (TestFlags.GLOBAL_MODULES) {
Object.assign(global, {
  _,
  // AppConstants,
  // Extensions,
  // SharedData,
  // FirebaseUtils
});
// }

export default class AppTestings extends React.Component {
  componentWillMount() {
    console.log('invoke componentWillMount');
  }

  render() {
    return (
      <div>AppTestings</div>
    );
  }
}