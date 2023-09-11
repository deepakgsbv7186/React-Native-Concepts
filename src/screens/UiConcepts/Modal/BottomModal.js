import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import navigationstrings from '../../../navigation/navigationstrings';
const {width, height} = Dimensions.get('window');

export default function BottomModal({
  isOpen,
  setIsOpen,
  modalTitle,
  rateButton,
  fiveStars,
  twoButtons,
}) {
  const pointsTo = useNavigation();
  return (
    <>
      <Modal
        isVisible={isOpen}
        onSwipeComplete={() => setIsOpen(false)}
        statusBarTranslucent={false}
        swipeDirection="down"
        backdropColor="rgba(0,0,0,0.4)"
        onBackdropPress={() => setIsOpen(false)}
        onBackButtonPress={() => setIsOpen(false)}
        style={[styles.container]}>
        <View style={styles.innercontainer}>
          {/* line Bar */}
          <View style={styles.linebar} />
          {/* Modal head title */}
          <Text style={styles.headText}>{modalTitle}</Text>
          {/* reseration details */}
          <View style={{marginVertical: 28, rowGap: 12}}>
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
          {/* Instructions */}
          <View style={{marginBottom: 28}}>
            <Text style={[styles.textStyle, {fontSize: 16, fontWeight: '500'}]}>
              Instructions
            </Text>
            <Text
              style={[
                styles.textStyle,
                {
                  fontSize: 16,
                  color: '#757575',
                  letterSpacing: 0.2,
                  lineHeight: 22,
                },
              ]}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </View>
          {/* buttons */}
          {/* rate button */}
          {rateButton && (
            <View style={styles.cardBtnContainer}>
              <TouchableOpacity
                onPress={() => console.log('cancel reservation btn clicked.')}
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
                  <MCommunityIcons name="star" size={16} color={'#212121'} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => console.log('Edit Details btn clicked.')}
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
          )}
          {/* rate with stars */}
          {fiveStars && (
            <>
              {/* Dietary Preferences */}
              <View style={{marginBottom: 28}}>
                <Text
                  style={[
                    styles.textStyle,
                    {fontSize: 16, fontWeight: '500', marginBottom: 8},
                  ]}>
                  Dietary Preferences
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    columnGap: 8,
                  }}>
                  <TouchableOpacity
                    onPress={() => console.log('Vegetarian clicked')}
                    style={styles.dietBtnContainer}>
                    <Text
                      style={[
                        styles.textStyle,
                        {
                          fontSize: 14,
                          color: '#757575',
                        },
                      ]}>
                      Vegetarian
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.cardBtnContainer}>
                <TouchableOpacity
                  onPress={() => console.log('cancel reservation btn clicked.')}
                  style={[styles.btnContainer, {backgroundColor: '#ffffff'}]}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      columnGap: 4,
                    }}>
                    <MCommunityIcons name="star" size={16} color={'#007ACC'} />
                    <MCommunityIcons name="star" size={16} color={'#007ACC'} />
                    <MCommunityIcons name="star" size={16} color={'#007ACC'} />
                    <MCommunityIcons name="star" size={16} color={'#007ACC'} />
                    <MCommunityIcons name="star" size={16} color={'#E8E8E8'} />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => console.log('Edit Details btn clicked.')}
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
            </>
          )}
          {/* two button */}
          {twoButtons && (
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
                  pointsTo.navigate(navigationstrings.EIDTBOOKINGDETAILS)
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
          )}
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  // diet buttons
  dietBtnContainer: {
    backgroundColor: '#f7f7f7',
    borderRadius: 50,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  // btn style
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
  // icon and info
  iconInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
  },
  // bar line
  linebar: {
    borderBottomColor: '#E8E8E8',
    width: width * 0.2,
    borderBottomWidth: 3,
    alignSelf: 'center',
  },
  headText: {
    fontFamily: 'SF Pro Display',
    color: '#212121',
    fontSize: 26,
    textAlign: 'center',
    marginTop: 28,
    fontWeight: 700,
  },
  // modal container
  container: {
    flex: 1,
    position: 'relative',
    margin: 0,
  },
  innercontainer: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 12,
    paddingHorizontal: 20,
    paddingBottom: 20,
    margin: 16,
  },
  textStyle: {
    fontFamily: 'SF Pro Display',
    color: '#212121',
  },
});
