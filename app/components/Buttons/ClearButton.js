import React, { PropTypes } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';

import styles from './styles';

const ClearButton = ({ text, onPress }) => (
  <TouchableHighlight style={styles.container} onPress={onPress}>
    <View style={styles.wrapper}>
      <Image
        resizeMode="contain"
        style={styles.icon}
        source={require('./images/icon.png')}
      />
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableHighlight>
);

ClearButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};

export default ClearButton;
