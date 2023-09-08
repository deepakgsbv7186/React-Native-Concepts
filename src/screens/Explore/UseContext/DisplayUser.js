import {StyleSheet, Text} from 'react-native';
import React, {useContext} from 'react';
import {FONTFAMLY, textScale} from '../../../theme';
import {SimpleContext} from './UseContextHook';

export default function DisplayUser() {
  const {inputValue} = useContext(SimpleContext);
  return (
    <Text style={[styles.text, {fontSize: textScale(30)}]}>{inputValue}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontFamily: FONTFAMLY.bold,
  },
});
