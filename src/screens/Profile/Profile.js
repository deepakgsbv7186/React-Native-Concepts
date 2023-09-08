import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WrapperContainer from '../../components/WrapperContainer';
import {COLORS, FONTFAMLY, textScale} from '../../theme';

export default function Profile() {
  return (
    <WrapperContainer>
      <View style={[styles.container]}>
        <Text style={[styles.testStyle]}>Profile</Text>
      </View>
    </WrapperContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  testStyle: {
    fontFamily: FONTFAMLY.regular,
    fontSize: textScale(40),
    color: COLORS.yellow,
  },
});
