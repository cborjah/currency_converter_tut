import React, { Component, PropTypes } from 'react';
import { View, StatusBar, KeyboardAvoidingView } from 'react-native';

import Container from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QOUTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_CONVERSION_DATE = new Date();

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

  handlePressBaseCurrency = () => {
    this.props.navigation.navigate('CurrencyList', { title: 'Base Currency' });
  }

  handlePressQuoteCurrency = () => {
    this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency' });
  }

  handleTextChange = (text) => {
    console.log('change text', text);
  }

  handleSwapCurrency = () => {
    console.log('swap currency');
  }

  handleOptionsPress = () => {
    this.props.navigation.navigate('Options');
  }

  render() {
    return (
      <Container>
        {/* translucent is for Android, barStyle is for iOS */}
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <InputWithButton
            buttonText={TEMP_BASE_CURRENCY}
            onPress={this.handlePressBaseCurrency}
            defaultValue={TEMP_BASE_PRICE}
            keyboardType="numeric"
            onChangeText={this.handleTextChange}
          />
          <InputWithButton
            buttonText={TEMP_QOUTE_CURRENCY}
            onPress={this.handlePressQuoteCurrency}
            value={TEMP_QUOTE_PRICE}
          />
          <LastConverted
            base={TEMP_BASE_CURRENCY}
            quote={TEMP_QOUTE_CURRENCY}
            date={TEMP_CONVERSION_DATE}
            conversionRate={TEMP_CONVERSION_RATE}
          />
          <ClearButton
            text="Reverse Currencies"
            onPress={this.handleSwapCurrency}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Home;
