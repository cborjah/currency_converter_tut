import React, { Component, PropTypes } from 'react';
import { FlatList, View, StatusBar } from 'react-native';

import currencies from '../data/currencies';
import { ListItem, Separator } from '../components/List';

const TEMP_CURRENT_CURRENCY = 'CAD';

class CurrencyList extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

  handlePress = () => {
    /*
    Passing in null tells the navigator to go back one action regardless of
    what it is
    */
    this.props.navigation.goBack(null);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          data={currencies}
          // Using array destructuring, item represents the current item
          renderItem={({ item }) =>
            <ListItem
              text={item}
              selected={item === TEMP_CURRENT_CURRENCY}
              onPress={this.handlePress}
            />
          }
          // Gives each item a key of its own name
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

export default CurrencyList;
