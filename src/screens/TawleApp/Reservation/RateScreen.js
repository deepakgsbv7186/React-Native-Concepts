import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import MIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import navigationstrings from '../../../navigation/navigationstrings';

export default function RateScreen(props) {
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
            How was your time at Em Sherif?
          </Text>
          {/* date and time details */}
          <View style={[styles.flexRowContainer, {marginBottom: 26}]}>
            <Text
              style={[
                styles.textStyle,
                {color: '#757575', fontSize: 14, lineHeight: 16},
              ]}>
              August 7th, 2023
            </Text>
            <View style={styles.dotContainer} />
            <Text
              style={[
                styles.textStyle,
                {color: '#757575', fontSize: 14, lineHeight: 16},
              ]}>
              19:00 - 21:00
            </Text>
          </View>
          {/* rate stars icons  */}
          <View style={[styles.flexRowContainer, {columnGap: 16}]}>
            <MIcons name="star" size={40} color={'#007ACC'} />
            <MIcons name="star" size={40} color={'#007ACC'} />
            <MIcons name="star" size={40} color={'#007ACC'} />
            <MIcons name="star" size={40} color={'#007ACC'} />
            <MIcons name="star" size={40} color={'#E8E8E8'} />
          </View>
          {/* comment box */}
          <View style={{marginTop: 40}}>
            <Text style={[styles.textStyle, {fontSize: 16, fontWeight: '500'}]}>
              Comment
            </Text>
            <TextInput
              placeholder="Write your feedback here..."
              placeholderTextColor={'#757575'}
              multiline
              numberOfLines={6}
              style={styles.commentTextInput}
            />
            <TouchableOpacity
              onPressIn={() =>
                props.navigation.navigate(navigationstrings.THANKSFEEDBACK)
              }
              style={styles.commentInput}>
              <Text
                style={[
                  styles.textStyle,
                  {
                    fontSize: 14,
                    fontWeight: '600',
                    textAlign: 'center',
                    color: '#fff',
                  },
                ]}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  // comment input
  commentInput: {
    backgroundColor: '#00BED4',
    borderRadius: 70,
    padding: 10,
    marginTop: 28,
  },
  commentTextInput:{
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginTop: 6,
    textAlignVertical: 'top',
    padding: 16,
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
