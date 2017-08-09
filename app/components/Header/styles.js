import EStyleSheet from 'react-native-extended-stylesheet';
import StatusBar from 'react-native';

export default EStyleSheet.create({
  container: {
    position: 'absolute',

    // Making both left and right equal to 0 makes the container full width
    left: 0,
    right: 0,
    top: 0,
    '@media ios': {
      paddingTop: 20,
    }
    '@media android': {
      // currentHeight is only available on Android
      paddingTop: StatusBar.currentHeight,
    }
  },
  button: {
    // Aligns button to the right of its flex container
    alignSelf: 'flex-end',
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  icon: {
    width: 18,
  },
});
