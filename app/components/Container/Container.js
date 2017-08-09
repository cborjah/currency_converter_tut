import React, { PropTypes } from 'react';
import { View } from 'react-native';

import styles from './styles';

const Container = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
);

Container.propTypes = {
  // since children isn't a single element but an array of elements, use any
  children: PropTypes.any,
};

export default Container;
