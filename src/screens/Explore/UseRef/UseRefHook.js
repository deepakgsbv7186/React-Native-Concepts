import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import React, {useRef, useState} from 'react';
import WrapperContainer from '../../../components/WrapperContainer';
import {
  COLORS,
  FONTFAMLY,
  moderateScale,
  moderateScaleVertical,
  scale,
  textScale,
} from '../../../theme';

export default function UseRefHook() {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState('...');
  const handleChangeText = text => {
    setInputValue(text);
  };
  const handleReset = () => {
    if (inputRef.current) {
      inputRef.current.clear();
      setInputValue('');
    }
  };
  return (
    <WrapperContainer>
      <View style={[styles.viewContainer]}>
        <TextInput
          style={{flex: 7, paddingHorizontal: moderateScale(10)}}
          placeholder="type something"
          onChangeText={handleChangeText}
          ref={inputRef}
        />
        <TouchableOpacity onPress={handleReset} style={[styles.btn, {flex: 2}]}>
          <Text style={[styles.text, {color: COLORS.white}]}>Reset</Text>
        </TouchableOpacity>
      </View>
      <Text style={[styles.text, {fontSize: textScale(30)}]}>{inputValue}</Text>
    </WrapperContainer>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: moderateScaleVertical(10),
    backgroundColor: COLORS.blackOpacity12,
    borderRadius: moderateScale(5),
  },
  btn: {
    backgroundColor: COLORS.green,
    padding: moderateScale(15),
    borderRadius: scale(5),
  },
  text: {
    textAlign: 'center',
    fontFamily: FONTFAMLY.bold,
  },
});
