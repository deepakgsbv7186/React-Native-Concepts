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
import {List} from 'react-native-paper';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from './responsiveui';

export default function MyTawleLoyality({navigation}) {
  const [expanded, setExpanded] = React.useState(true);
  return (
    <>
      {/* head section */}
      <View style={[styles.contanier, {flex: 1}]}></View>
      {/* progress stats card*/}
      <View style={[styles.progressCardContainer, {flex: 1.4, paddingTop: 0}]}>
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
        <List.Section>
          <List.Accordion
            title="How to earn chairs?"
            titleStyle={[styles.textStyle, {fontSize: 16, fontWeight: '500'}]}
            style={{backgroundColor: '#F7F7F7', padding: 0, margin: 0}}
            expanded={expanded}
            onPress={() => setExpanded(!expanded)}>
            <List.Item title="Bullet point 1" />
            <List.Item title="Bullet point 2" />
            <List.Item title="Bullet point 3" />
          </List.Accordion>
        </List.Section>
        {/* my rewards section */}
        <View style={{marginVertical: moderateScaleVertical(5)}}>
          <Text
            style={[
              styles.textStyle,
              {fontSize: textScale(20), lineHeight: 28},
            ]}>
            Start using your benefits
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
    padding: moderateScaleVertical(20),
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
