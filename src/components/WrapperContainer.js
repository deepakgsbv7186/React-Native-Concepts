import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, moderateScale} from '../theme';

export default function WrapperContainer({
  children,
  statusBarColor = COLORS.white,
  barStyle = 'dark-content',
}) {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar backgroundColor={statusBarColor} barStyle={barStyle} />
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginHorizontal: moderateScale(16),
  },
});
