import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomModal from './BottomModal';
import navigationstrings from '../../../navigation/navigationstrings';

export default function ReservationScreen(props) {
  const [isUpcomingModalOpen, setIsUpcomingModalOpen] = useState(false);
  const [isPastModalOpen, setIsPastModalOpen] = useState(false);
  const [isFiveStarModalOpen, setIsFiveStarModalOpen] = useState(false);
  return (
    <>
      <View style={styles.container}>
        {/* Head Text */}
        <View style={{marginTop: 48, marginBottom: 6}}>
          <Text style={[styles.textStyle, styles.headerText]}>Reservation</Text>
          <View style={styles.headerBottomContainer}>
            <Icon name="calendar-blank" size={16} />
            <Text>4 reservation</Text>
            <View style={styles.dotContainer} />
            <Icon name="star" size={16} color={'#212121'} />
            <Text>2 ratings</Text>
          </View>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{marginBottom: 20}}>
          {/* upcoming section */}
          <View style={{marginTop: 30}}>
            <Text
              style={[
                styles.textStyle,
                {fontSize: 20, lineHeight: 28, fontWeight: '600'},
              ]}>
              Upcoming
            </Text>
            {/* upcoming card */}
            <TouchableOpacity
              onPress={() => setIsUpcomingModalOpen(!isUpcomingModalOpen)}
              style={styles.cardContainer}>
              <Text
                style={[
                  styles.textStyle,
                  {fontSize: 16, lineHeight: 22, fontWeight: '500'},
                ]}>
                Em Sherif Cafe
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
              <View style={styles.cardBtnContainer}>
                <TouchableOpacity
                  onPress={() => console.log('cancel reservation btn clicked.')}
                  style={[styles.btnContainer, {backgroundColor: '#F7F7F7'}]}>
                  <Text style={[styles.textStyle, styles.btnText]}>
                    Cancel Reservation
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate(
                      navigationstrings.EIDTBOOKINGDETAILS,
                    )
                  }
                  style={[styles.btnContainer, {backgroundColor: '#00BED4'}]}>
                  <Text
                    style={[
                      styles.textStyle,
                      styles.btnText,
                      {color: '#ffffff'},
                    ]}>
                    Edit Details
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
          {/* past section */}
          <View style={{marginTop: 36}}>
            <Text
              style={[
                styles.textStyle,
                {fontSize: 20, lineHeight: 28, fontWeight: '600'},
              ]}>
              Past
            </Text>
            {/* past cards */}
            {/* card with rate btn and book again btn */}
            <TouchableOpacity
              onPress={() => setIsPastModalOpen(!isPastModalOpen)}
              style={styles.cardContainer}>
              <Text
                style={[
                  styles.textStyle,
                  {fontSize: 16, lineHeight: 22, fontWeight: '500'},
                ]}>
                Em Sherif Cafe
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
              <View style={styles.cardBtnContainer}>
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate(navigationstrings.RATESTAR)
                  }
                  style={[styles.btnContainer, {backgroundColor: '#F7F7F7'}]}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      columnGap: 4,
                    }}>
                    <Text style={[styles.textStyle, styles.btnText]}>
                      Rate Visit
                    </Text>
                    <Icon name="star" size={16} color={'#212121'} />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => console.log('book again clicked.')}
                  style={[styles.btnContainer, {backgroundColor: '#00BED4'}]}>
                  <Text
                    style={[
                      styles.textStyle,
                      styles.btnText,
                      {color: '#ffffff'},
                    ]}>
                    Book Again
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            {/* card with rate star */}
            <TouchableOpacity
              onPress={() => setIsFiveStarModalOpen(!isFiveStarModalOpen)}
              style={styles.cardContainer}>
              <Text
                style={[
                  styles.textStyle,
                  {fontSize: 16, lineHeight: 22, fontWeight: '500'},
                ]}>
                Gavi
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
              <View
                style={[
                  styles.cardBtnContainer,
                  {justifyContent: 'flex-start'},
                ]}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon name="star" size={16} color={'#007ACC'} />
                  <Icon name="star" size={16} color={'#007ACC'} />
                  <Icon name="star" size={16} color={'#007ACC'} />
                  <Icon name="star" size={16} color={'#007ACC'} />
                  <Icon name="star" size={16} color={'#E8E8E8'} />
                </View>
                <Text
                  style={[
                    styles.textStyle,
                    {
                      color: '#757575',
                      fontSize: 12,
                      lineHeight: 14,
                      paddingHorizontal: 10,
                    },
                  ]}>
                  (rated by you)
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <BottomModal
        modalTitle={'Upcoming Reservation'}
        isOpen={isUpcomingModalOpen}
        setIsOpen={setIsUpcomingModalOpen}
        twoButtons
      />
      <BottomModal
        modalTitle={'Past Reservation'}
        isOpen={isPastModalOpen}
        setIsOpen={setIsPastModalOpen}
        rateButton
      />
      <BottomModal
        modalTitle={'Past Reservation'}
        isOpen={isFiveStarModalOpen}
        setIsOpen={setIsFiveStarModalOpen}
        fiveStars
      />
    </>
  );
}

const styles = StyleSheet.create({
  // card style
  btnText: {fontSize: 14, fontWeight: '600', textAlign: 'center'},
  btnContainer: {
    backgroundColor: '#F7F7F7',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 50,
    flex: 0.47,
  },
  cardBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardContainer: {
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    rowGap: 10,
  },
  dotContainer: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#757575',
    marginHorizontal: 8,
  },
  // Header container
  headerBottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
    justifyContent: 'center',
    columnGap: 4,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 26,
    // fontWeight: '700',
    lineHeight: 32,
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
});
