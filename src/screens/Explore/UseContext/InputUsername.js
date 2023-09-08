import {StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {moderateScale} from '../../../theme';
import {TextInput} from 'react-native-paper';
import {SimpleContext} from './UseContextHook';

export default function InputUsername() {
  const {setInputValue} = useContext(SimpleContext);
  const handleChangeText = text => {
    setInputValue(text);
  };
  return (
    <TextInput
      mode="outlined"
      style={[styles.textInput]}
      placeholder="type username"
      onChangeText={handleChangeText}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    paddingHorizontal: moderateScale(10),
  },
});
