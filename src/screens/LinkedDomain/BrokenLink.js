import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale, moderateScaleVertical, textScale} from './responsiveui';

export default function BrokenLink() {
  return (
    <>
      <View
        style={{
          paddingHorizontal: moderateScale(16),
          flex: 6,
          justifyContent: 'flex-end',
        }}>
        <Image
          source={require('./icons/broken-link.png')}
          resizeMode="contain"
          style={{
            width: moderateScale(92),
            height: moderateScaleVertical(92),
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            fontFamily: 'Gilroy-Medium',
            fontSize: textScale(16),
            color: '#000000',
            lineHeight: 20,
            textAlign: 'center',
            marginTop: moderateScaleVertical(28),
            marginBottom: moderateScaleVertical(10),
          }}>
          No Domain linked yet !
        </Text>
        <Text
          style={{
            color: 'rgba(0, 0, 0, 0.60)',
            fontFamily: 'Gilroy-Light',
            fontSize: textScale(14),
            lineHeight: 20,
            textAlign: 'center',
          }}>
          Once you have signed up on websites by linking your real-time
          application, you will find the linked websites listed here. For
          further details, please consult our instructional video.
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: moderateScale(16),
          flex: 4,
          justifyContent: 'flex-end',
          marginBottom: moderateScaleVertical(30),
        }}>
        <Text
          style={{
            color: '#0276BD',
            fontFamily: 'Gilroy-Light',
            fontSize: textScale(14),
            lineHeight: 25,
            textAlign: 'center',
            textDecorationLine: 'underline',
          }}>
          https://www.youtube.com/watch?v=wX6Tl32IgWY&feature=youtu.be
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
