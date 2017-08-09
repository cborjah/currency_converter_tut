import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

// Extended stylesheets enables use of percentages
export default EStyleSheet.create({
  $buttonBackgroundColorBase: '$white',
  $buttonBackgroundColorModifier: 0.1,

  container: {
    backgroundColor: '$white',
    width: '90%',
    height: INPUT_HEIGHT,
    borderRadius: BORDER_RADIUS,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 11,
  },
  containerDisabled: {
    backgroundColor: '$lightGrey',
  },
  buttonContainer: {
    height: INPUT_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$white',
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,

  },
  buttonText: {
    fontWeight: '600',
    fontSize: 20,

    // paddingHorizontal is the same as setting padding left and right
    paddingHorizontal: 16,
    color: '$primaryBlue',
  },
  input: {
    height: INPUT_HEIGHT,
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 8,
    color: '$inputText',
  },
  border: {
    height: INPUT_HEIGHT,

    /*
    hairlineWidth
    This is defined as the width of a thin line on the platform.
    It can be used as the thickness of a border or division between two elements.
    https://facebook.github.io/react-native/docs/stylesheet.html
    */
    width: StyleSheet.hairlineWidth,

    // backgroundColor sets color for the border
    backgroundColor: '$border',
  },
});
