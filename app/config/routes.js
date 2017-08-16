import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
import Options from '../screens/Options';
import Themes from '../screens/Themes';

const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null,
    },
  },
  Options: {
    screen: Options,
    navigationOptions: {
      headerTitle: 'Options',
    },
  },
  Themes: {
    screen: Themes,
    navigationOptions: {
      headerTitle: 'Themes',
    },
  },
}, {
  /*
  By default iOS and Android use different modes. Use the Android version,
  'screen', on iOS as well for smoother transitions. This makes it so the header
  bar comes and goes WITH the screen.
  */
  headerMode: 'screen',
});

const CurrencyListStack = StackNavigator({
  CurrencyList: {
    screen: CurrencyList,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title,
    }),
  },
});

export default StackNavigator(
  {
    Home: {
      screen: HomeStack,
    },
    CurrencyList: {
      screen: CurrencyListStack,
    },
  },
  {
    mode: 'modal',

    // Adds padding to avoid overlap by the status bar. (Android only)
    cardStyle: { paddingTop: StatusBar.currentHeight },

    // Tells StackNavigator not to render a header. This is to avoid rendering
    // of multiple headers on the same screen.
    headerMode: 'none',
  },
);
