# React Native Currency Converter Tutorial

http://learn.handlebarlabs.com/courses/

## Libraries Used

React Native Extended Stylesheet

Drop-in replacement of React Native StyleSheet with media-queries, variables, dynamic themes, relative units, percents, math operations, scaling and other styling stuff.

https://github.com/vitalets/react-native-extended-stylesheet

## Notes

For require to work with static image resources (folder), restart the packager.

Use resizeMode: "contain", in order to preserve aspect ratio.
Ex: <Image resizeMode: "contain" />

Using outline: 1 in your EStyleSheet.build, is good way of checking how the components are laid out.

Use KeyboardAvoidingView from the react native library to prevent the keyboard
from blocking components.

barStyle set to default gives it a dark color, translucent is for Android
<StatusBar translucent={false} barStyle="default" />

Setting up ESLint

$ npm install --save-dev babel-eslint@7.2.3 eslint@3.19.0 eslint-config-airbnb@14.1.0 eslint-plugin-import@2.2.0 eslint-plugin-jsx-a11y@4.0.0 eslint-plugin-react@6.10.3

// .eslintrc.json
{
  "parser": "babel-eslint",
  "env": {
    "browser": true
  },
  "plugins": [
    "react"
  ],
  "extends": [
    "airbnb"
  ],
  "rules": {
    "react/jsx-filename-extension": [
      2,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "react/forbid-prop-types": [
      0
    ],
    "react/require-default-props": [
      0
    ],
    "global-require": [
      0
    ]
  }
}

OR

$ npm i --save-dev eslint babel-eslint

add to eslintrc.json the following

  "parser": "babel-eslint",
  "rules": {
    "react/jsx-filename-extension": [
      2,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "react/forbid-prop-types": [
      0
    ],
    "react/require-default-props": [
      0
    ],
    "global-require": [
      0
    ]
  }

$ eslint --init
Restart Text Editor

