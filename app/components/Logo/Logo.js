import React, { Component } from 'react';
import { View, Text, Keyboard, Animated, Platform } from 'react-native';

import styles from './styles';

// Sets duration to 250 ms
const ANIMATION_DURATION = 250;

class Logo extends Component {
  constructor(props) {
    super(props);

    this.containerImageWidth = new Animated.Value(styles.$largeContainerSize);
    this.imageWidth = new Animated.Value(styles.$largeImageSize);
  }

  componentDidMount() {
    // events keyboardWillShow and keyboardWillHide work only for iOS
    let showListener = 'keyboardWillShow';
    let hideListener = 'keyboardWillHide';
    if (Platform.OS === 'android') {
      showListener = 'keyboardDidShow';
      hideListener = 'keyboardDidHide';
    }
    this.keyboardShowListener = Keyboard.addListener(showListener, this.keyboardShow);
    this.keyboardHideListener = Keyboard.addListener(hideListener, this.keyboardHide);
  }

  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
  }

  keyboardShow = () => {
    // Animated.timing(this.containerImageWidth, {
    //   toValue: styles.$smallContainerSize,
    //   duration: ANIMATION_DURATION,
    // }).start();
    //
    // Animated.timing(this.imageWidth, {
    //   toValue: styles.$smallImageSize,
    //   duration: ANIMATION_DURATION,
    // }).start();

    // Use Animated.parallel to run multiple animations at the same time
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$smallContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$smallImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  }

  keyboardHide = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$largeContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$largeImageSize,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  }

  render() {
    const containerImageStyle = [
      styles.containerImage,
      { width: this.containerImageWidth, height: this.containerImageWidth },
    ];

    const imageStyle = [styles.image,{ width: this.imageWidth }];

    return (
      <View style={styles.container}>
        <Animated.Image
          resizeMode="contain"
          style={containerImageStyle}
          source={require('./images/background.png')}
        >
          <Animated.Image
            resizeMode="contain"
            style={imageStyle}
            source={require('./images/logo.png')}
          />
        </Animated.Image>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    );
  }
}

export default Logo;
