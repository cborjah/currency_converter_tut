import React from 'react';
import { Text, FlatList, View, StatusBar } from 'react-native';

import currencies from '../data/currencies';

const CurrencyList = () => (
  <View style={{ flex: 1 }}>
    <StatusBar barStyle="default" translucent={false} />
    <FlatList
      data={currencies}
      // Using array destructuring, item represents the current item
      renderItem={({ item }) => <Text>{item}</Text>}
      // Gives each item a key of its own name
      keyExtractor={item => item}
    />
  </View>
);

export default CurrencyList;
