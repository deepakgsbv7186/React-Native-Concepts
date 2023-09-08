import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from './responsiveui';
import navigationstrings from '../../../navigation/navigationstrings';

export default function MyTawle({navigation}) {
  return (
    <>
      {/* head section */}
      <View style={[styles.contanier, {flex: 1.7}]}>
        {/* Main head */}
        <View style={styles.mainHeadContainer}>
          <Text style={[styles.textStyle, styles.mainHeadTextOne]}>
            Kamel’s Tawle
          </Text>
          <Text style={[styles.textStyle, styles.mainHeadTextTwo]}>
            Since 2023
          </Text>
          <View
            style={{flexDirection: 'row', alignItems: 'center', columnGap: 16}}>
            <View style={styles.dotContainer} />
            <Text style={[styles.textStyle, styles.mainHeadTextThree]}>
              12 favorites
            </Text>
            <View style={styles.dotContainer} />
          </View>
        </View>
      </View>
      {/* progress stats card*/}
      <View style={[styles.progressCardContainer, {flex: 2}]}>
        {/* text details */}
        <View style={{flex: 0.45}}>
          <Text
            style={[
              styles.textStyle,
              {fontSize: textScale(20), color: '#BE5C00', lineHeight: 28},
            ]}>
            Bronze
          </Text>
          <Text
            style={[
              styles.textStyle,
              {fontSize: textScale(20), lineHeight: 28, fontWeight: '600'},
            ]}>
            125
            <Text style={[styles.textStyle, {fontSize: textScale(16)}]}>
              {' '}
              / 250
            </Text>
          </Text>
          <Text
            style={[
              styles.textStyle,
              {fontSize: textScale(12), color: '#757575'},
            ]}>
            Earn 250 chairs by 24/11/25 to achieve Silver
          </Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(navigationstrings.MYTAWLEROYALITY)
            }
            style={[styles.progressCardBtn, , {width: width * 0.3}]}>
            <Text
              style={[
                styles.textStyle,
                {fontSize: textScale(14), textAlign: 'center'},
              ]}>
              Tawle Treats
            </Text>
          </TouchableOpacity>
        </View>
        {/* visual details */}
        <View style={{flex: 0.45}}>
          <Image
            source={require('./images/visual.png')}
            resizeMode="contain"
            style={{
              width: moderateScale(210),
              height: moderateScaleVertical(120),
            }}
          />
        </View>
      </View>
      {/* rest sections */}
      <View style={[styles.contanier, {flex: 6}]}>
        {/* redeemed voucher points */}
        <View style={styles.redeemedContainer}>
          <Text
            style={[
              styles.textStyle,
              {fontSize: textScale(16), lineHeight: 20},
            ]}>
            Redeemed Vouchers
          </Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(navigationstrings.REDEEMVOUCHER)
            }>
            <Image
              source={require('./icons/right-arrow.png')}
              resizeMode="contain"
              style={{
                width: moderateScale(6),
                height: moderateScaleVertical(12),
              }}
            />
          </TouchableOpacity>
        </View>
        {/* re-visit section */}
        <View style={{marginVertical: moderateScaleVertical(10)}}>
          <Text
            style={[
              styles.textStyle,
              {fontSize: textScale(20), lineHeight: 28},
            ]}>
            Re-visit
          </Text>
          {/* Booking Options card */}
          <View style={styles.revisitContainer}>
            <View style={[styles.revisitCardContiner, {flex: 0.5}]}>
              <Text
                style={[
                  styles.textStyle,
                  {fontSize: textScale(16), lineHeight: 20},
                ]}>
                Em Sherif Cafe
              </Text>
              <Text
                style={[
                  styles.textStyle,
                  {fontSize: textScale(14), lineHeight: 16},
                ]}>
                Lebanese
              </Text>
              <TouchableOpacity
                onPress={() => console.log('Em Sherif Cafe clicked')}
                style={[styles.revisitCardBtn, {width: width * 0.2}]}>
                <Text
                  style={[
                    styles.textStyle,
                    {
                      fontSize: textScale(14),
                      color: '#ffffff',
                      textAlign: 'center',
                    },
                  ]}>
                  Book
                </Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.revisitCardContiner, {flex: 0.5}]}>
              <Text
                style={[
                  styles.textStyle,
                  {fontSize: textScale(16), lineHeight: 20},
                ]}>
                Kampai
              </Text>
              <Text
                style={[
                  styles.textStyle,
                  {fontSize: textScale(14), lineHeight: 16},
                ]}>
                Japanese
              </Text>
              <TouchableOpacity
                onPress={() => console.log('Kampai clicked')}
                style={[styles.revisitCardBtn, {width: width * 0.2}]}>
                <Text
                  style={[
                    styles.textStyle,
                    {
                      fontSize: textScale(14),
                      color: '#ffffff',
                      textAlign: 'center',
                    },
                  ]}>
                  Book
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* my rewards section */}
        <View style={{marginVertical: moderateScaleVertical(5)}}>
          <Text
            style={[
              styles.textStyle,
              {fontSize: textScale(20), lineHeight: 28},
            ]}>
            My Rewards
          </Text>
          {/* Booking Options card */}
          <View style={styles.revisitContainer}>
            <View style={styles.cardContainer}>
              {/* image section */}
              <Image
                source={require('./images/redeemed-1.png')}
                resizeMode="contain"
                style={styles.cardImage}
              />
              {/* text section */}
              <TouchableOpacity
                onPress={() => console.log('my reward card clicked')}
                style={styles.cardInnerContainer}>
                {/* row one */}
                <Text style={[styles.cardHeadText]}>1 month membership</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  // card section

  heartBtn: {
    width: moderateScale(12),
    height: moderateScaleVertical(12),
  },
  cardHeadText: {
    fontFamily: 'SF Pro Display',
    fontWeight: '500',
    fontSize: textScale(16),
    color: '#212121',
    lineHeight: 20,
  },

  cardInnerContainer: {
    flex: 1,
    paddingLeft: moderateScale(16),
    rowGap: 4,
  },
  cardImage: {
    width: moderateScale(64),
    height: moderateScaleVertical(64),
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: moderateScaleVertical(12),
    backgroundColor: '#ffffff',
    borderRadius: moderateScale(6),
  },
  // re-visit section
  revisitCardContiner: {
    padding: moderateScale(14),
    backgroundColor: '#ffffff',
    borderRadius: moderateScale(8),
  },
  revisitCardBtn: {
    backgroundColor: '#00BED4',
    paddingHorizontal: moderateScale(14),
    paddingVertical: moderateScaleVertical(10),
    borderRadius: moderateScale(50),
    marginTop: moderateScaleVertical(12),
  },
  revisitContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: 16,
    marginVertical: moderateScaleVertical(12),
  },
  // redeemed voucher
  redeemedContainer: {
    flexDirection: 'row',
    paddingVertical: moderateScaleVertical(14),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  // progress card
  progressCardBtn: {
    backgroundColor: '#F7F7F7',
    borderRadius: moderateScale(50),
    paddingVertical: moderateScaleVertical(10),
    paddingHorizontal: moderateScale(14),
    marginTop: moderateScaleVertical(12),
  },
  progressCardContainer: {
    backgroundColor: '#ffffff',
    paddingVertical: moderateScaleVertical(20),
    paddingHorizontal: moderateScale(16),
    flexDirection: 'row',
    alignItems: 'center',
  },
  // main head
  dotContainer: {
    width: moderateScale(4),
    height: moderateScaleVertical(4),
    borderRadius: moderateScale(2),
    backgroundColor: '#757575',
  },
  mainHeadTextOne: {fontSize: textScale(26), lineHeight: 30},
  mainHeadTextTwo: {
    fontSize: textScale(16),
    lineHeight: 20,
    color: '#757575',
    fontWeight: '500',
  },
  mainHeadTextThree: {
    fontSize: textScale(14),
    fontWeight: '600',
  },
  mainHeadContainer: {
    // marginTop: moderateScaleVertical(48),
    marginVertical: moderateScale(32),
    alignItems: 'center',
  },
  // global styles
  contanier: {
    backgroundColor: '#F7F7F7',
    paddingHorizontal: moderateScale(16),
  },
  textStyle: {
    fontFamily: 'SF Pro Display',
    color: '#212121',
  },
});
