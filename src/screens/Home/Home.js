import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WrapperContainer from '../../components/WrapperContainer';
import {
  COLORS,
  FONTFAMLY,
  VectorIcon,
  moderateScale,
  textScale,
} from '../../theme';

export default function Home() {
  return (
    <WrapperContainer>
      <View style={[styles.container]}>
        <Text style={[styles.testStyle]}>Use Hooks!</Text>
        <VectorIcon
          name={'hook'}
          type={'MaterialCommunityIcons'}
          size={moderateScale(100)}
          color={COLORS.secondary}
        />
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
    fontFamily: FONTFAMLY.bold,
    fontSize: textScale(40),
    color: COLORS.primary,
  },
});
