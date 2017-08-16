import React, { Component, PropTypes } from 'react';
import { ScrollView, StatusBar, Platform, Linking } from 'react-native';
import { ListItem, Separator } from '../components/List';

// Don't have expo included in this project
// import { Ionicons } from '@expo/vector-icons';

// Nice way of setting an icon based on the platform
const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

  handlePressThemes = () => {
    this.props.navigation.navigate('Themes');
  };

  handlePressSite = () => {
    /*
    Uses React Native's 'Linking' API to open up links with the browser from
    WITHIN the app. It returns a promise to catch for any errors.
    */
    Linking.openURL('http://fixer.io').catch(() => alert('An error occured'));
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Themes"
          onPress={this.handlePressThemes}
          // customIcon={
            // <Ionicons name={`${ICON_PREFIX}-arrow-forward`} size={ICON_SIZE} color={ICON_COLOR} />
          // }
        />
        <Separator />
        <ListItem
          text="Fixer.io"
          onPress={this.handlePressSite}
          // customIcon={<Ionicons name={`${ICON_PREFIX}-link`} size={ICON_SIZE} color={ICON_COLOR} />}
        />
        <Separator />
      </ScrollView>
    );
  }
}

export default Options;
