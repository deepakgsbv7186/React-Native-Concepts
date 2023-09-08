import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import MIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const {width, height} = Dimensions.get('window');
import navigationstrings from '../../../navigation/navigationstrings';

export default function ThanksFeedBack(props) {
  return (
    <>
      <View style={styles.container}>
        {/* close icon */}
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginTop: 20,
          }}>
          <MIcons name={'close'} color={'#212121'} size={30} />
        </TouchableOpacity>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={[styles.textStyle, styles.headTitleText]}>
            Thanks for your feedback ! Want to book again?
          </Text>
          <View style={[styles.revisitCardContiner]}>
            <Text style={[styles.textStyle, {fontSize: 16, lineHeight: 20}]}>
              Em Sherif Cafe
            </Text>
            <Text style={[styles.textStyle, {fontSize: 14, lineHeight: 16}]}>
              Lebanese
            </Text>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate(navigationstrings.RESERVATION)
              }
              style={[styles.revisitCardBtn, {width: width * 0.3}]}>
              <Text
                style={[
                  styles.textStyle,
                  {
                    fontSize: 14,
                    color: '#ffffff',
                    textAlign: 'center',
                    fontWeight: '600',
                  },
                ]}>
                Book Again
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  // re-visit section
  revisitCardContiner: {
    padding: 14,
    backgroundColor: '#ffffff',
    borderRadius: 8,
  },
  revisitCardBtn: {
    backgroundColor: '#00BED4',
    paddingHorizontal: 14,
    padding: 10,
    borderRadius: 50,
    marginTop: 40,
  },
  // comment input
  commentInput: {
    backgroundColor: '#00BED4',
    borderRadius: 70,
    padding: 10,
    marginTop: 28,
  },
  dotContainer: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#757575',
    marginHorizontal: 8,
  },
  // header title
  headTitleText: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 16,
    textAlign: 'center',
  },
  // global styles
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    paddingHorizontal: 16,
  },
  textStyle: {
    fontFamily: 'SF Pro Display',
    color: '#212121',
  },
  flexRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
