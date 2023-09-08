import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import navigationstrings from '../../../navigation/navigationstrings';

export default function EditBookingDetails(props) {
  return (
    <>
      <View style={styles.container}>
        {/* header goes here */}
        {/* booking details */}
        <Text
          style={[
            styles.textStyle,
            {fontSize: 16, fontWeight: '500', marginBottom: 6},
          ]}>
          Booking Details
        </Text>
        <View style={[styles.bookingDetailsContainer]}>
          {/* location */}
          <View style={styles.iconInfoContainer}>
            <MaterialIcons name={'location-on'} color={'#212121'} size={16} />
            <Text
              style={[
                styles.textStyle,
                {
                  fontSize: 16,
                  color: '#757575',
                  letterSpacing: 0.2,
                },
              ]}>
              Em Sherif
            </Text>
          </View>
          {/* number of guests */}
          <View style={styles.iconInfoContainer}>
            <MaterialIcons name={'person'} color={'#212121'} size={16} />
            <Text
              style={[
                styles.textStyle,
                {
                  fontSize: 16,
                  color: '#757575',
                  letterSpacing: 0.2,
                },
              ]}>
              2 Guests
            </Text>
          </View>
          {/* date */}
          <View style={styles.iconInfoContainer}>
            <MaterialIcons
              name={'calendar-today'}
              color={'#212121'}
              size={16}
            />
            <Text
              style={[
                styles.textStyle,
                {
                  fontSize: 16,
                  color: '#757575',
                  letterSpacing: 0.2,
                },
              ]}>
              August 10th, 2023
            </Text>
          </View>
          {/* timing */}
          <View style={styles.iconInfoContainer}>
            <MCommunityIcons name={'clock'} color={'#212121'} size={16} />
            <Text
              style={[
                styles.textStyle,
                {
                  fontSize: 16,
                  color: '#757575',
                  letterSpacing: 0.2,
                },
              ]}>
              19:00 - 21:00
            </Text>
          </View>
        </View>
        {/* instructions box */}
        <View style={{marginTop: 30}}>
          <Text style={[styles.textStyle, {fontSize: 16, fontWeight: '500'}]}>
            Instructions
          </Text>
          <TextInput
            placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            placeholderTextColor={'#757575'}
            multiline
            numberOfLines={6}
            style={styles.commentTextInput}
          />
          <TouchableOpacity
            onPressIn={() =>
              props.navigation.navigate(navigationstrings.RESERVATION)
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
              Save Changes
            </Text>
          </TouchableOpacity>
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
  commentTextInput: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginTop: 6,
    textAlignVertical: 'top',
    padding: 16,
  },
  // icon and info
  iconInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
  },
  // booking details
  bookingDetailsContainer: {
    borderRadius: 8,
    padding: 16,
    borderColor: '#EAEAEA',
    borderWidth: 1,
    rowGap: 12,
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
