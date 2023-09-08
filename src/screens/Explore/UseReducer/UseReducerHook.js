import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useReducer, useState} from 'react';
import WrapperContainer from '../../../components/WrapperContainer';
import {
  COLORS,
  FONTFAMLY,
  VectorIcon,
  moderateScale,
  moderateScaleVertical,
  scale,
  textScale,
  width,
} from '../../../theme';
import {TextInput} from 'react-native-paper';

const MAX_COUNT = 5;
const ActionTypes = {
  INCREMENT: 'INCREMENT',
  TOGGLE_VISIBILITY: 'TOGGLE_VISIBILITY',
};
const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return {...state, count: state.count + 1};
    case ActionTypes.TOGGLE_VISIBILITY:
      return {...state, isVisible: !state.isVisible};
    default:
      return state;
  }
};
export default function UseReducerHook() {
  const [inputValue, setInputValue] = useState('...');
  const handleChangeText = text => {
    setInputValue(text);
  };

  const [state, dispatch] = useReducer(reducer, {count: 0, isVisible: false});

  const handleIncrement = () => {
    if (state.count < MAX_COUNT) {
      // increase value by one
      dispatch({type: ActionTypes.INCREMENT});
      // toggle visibility of diamond
      dispatch({type: ActionTypes.TOGGLE_VISIBILITY});
    } else {
      alert('Maximum count reached! Click "Ok" to reset.');
      state.count = 0;
    }
  };
  return (
    <WrapperContainer>
      {/* Increment Counter */}
      <View>
        <Text style={[styles.text, styles.headText]}>{state.count}</Text>
        <TouchableOpacity onPress={handleIncrement} style={styles.btn}>
          <Text style={[styles.text, {color: COLORS.white}]}>
            Increment By One
          </Text>
        </TouchableOpacity>
      </View>
      {/* Change Text */}
      <View>
        <TextInput
          mode="outlined"
          style={{marginVertical: moderateScaleVertical(10)}}
          placeholder="type something"
          onChangeText={handleChangeText}
        />
        <Text style={[styles.text, {fontSize: textScale(30)}]}>
          {inputValue}
        </Text>
      </View>
      {state.isVisible && (
        <VectorIcon
          name={'diamond'}
          type={'Ionicons'}
          size={moderateScale(100)}
          color={COLORS.yellow}
          style={[styles.icon]}
        />
      )}
    </WrapperContainer>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: COLORS.green,
    padding: moderateScale(10),
    borderRadius: scale(5),
    width: width * 0.4,
    alignSelf: 'center',
  },
  text: {
    textAlign: 'center',
    fontFamily: FONTFAMLY.bold,
  },
  headText: {
    fontSize: textScale(30),
    backgroundColor: COLORS.primary,
    color: COLORS.white,
    width: width * 0.4,
    alignSelf: 'center',
    padding: scale(20),
    margin: moderateScaleVertical(10),
    borderRadius: moderateScale(5),
  },
  icon: {
    alignSelf: 'center',
    marginVertical: moderateScaleVertical(40),
  },
});
