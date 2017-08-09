import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';

// use build when creating variables
EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $white: '#FFFFFF',
});

export default () => <Home />;
