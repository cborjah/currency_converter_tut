import React from 'react';
import { View, StatusBar } from 'react-native';

import Container from '../components/Container';

export default () => (
  <Container>
    {/* translucent is for Android, barStyle is for iOS */}
    <StatusBar translucent={false} barStyle="light-content" />
    <View />
  </Container>
);
