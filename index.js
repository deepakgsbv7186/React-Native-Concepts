import * as React from 'react';
import {AppRegistry, Text} from 'react-native';
import {MD3LightTheme as DefaultTheme, PaperProvider} from 'react-native-paper';
import {name as appName} from './app.json';
import App from './src/App';
import {COLORS} from './src/theme';

const theme = {
  ...DefaultTheme,

  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.primary,
    outline: 'transparent',
  },
};

const TextRendrer = Text.render;
Text.render = function render(props) {
  props = {
    ...props,
    style: [{color: COLORS.black, fontFamily: 'Roboto-Regular'}, props.style],
  };
  return TextRendrer.apply(this, [props]);
};
export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
