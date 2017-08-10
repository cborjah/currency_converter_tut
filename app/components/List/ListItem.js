import React, { PropTypes } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from './styles';
import Icon from './Icon';

const ListItem = ({
    text,
    selected = false,
    onPress,
    checkmark = true,
    visible = true,
    customIcon = null,
    iconBackground,
}) => (
  <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
    <View style={styles.row}>
      <Text style={styles.text}>{text}</Text>
      {/*
        In order to maintain the spacing when an item is not selected, the
        Icon component is returned regardless. It is just not visible when
        the item is not selected
      */}
      {selected
        ? <Icon checkmark={checkmark} visible={visible} iconBackground={iconBackground} />
        : <Icon />}

      {/* For using a different icon other than the checkmark  */}
      {customIcon}
    </View>
  </TouchableHighlight>
);

ListItem.propTypes = {
  text: PropTypes.string,
  selected: PropTypes.bool,
  onPress: PropTypes.func,
  checkmark: PropTypes.bool,
  visible: PropTypes.bool,
  customIcon: PropTypes.element,
  iconBackground: PropTypes.string,
};

export default ListItem;
