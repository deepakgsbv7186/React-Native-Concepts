import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import React, {useState} from 'react';
const {width, height} = Dimensions.get('window');

export default function BottomModal({isOpen, setIsOpen, btnTitle}) {
  const [isPointsDeducted, setIsPointsDeducted] = useState(false);
  return (
    <>
      <Modal
        isVisible={isOpen}
        onSwipeComplete={() => setIsOpen(false)}
        swipeDirection="down"
        backdropColor="rgba(0,0,0,0.4)"
        onBackdropPress={() => setIsOpen(false)}
        onBackButtonPress={() => setIsOpen(false)}
        style={[styles.container]}>
        <View style={styles.innercontainer}>
          {/* line Bar */}
          <View style={styles.linebar} />
          <View>
            {/* image and head text */}
            <View style={{marginVertical: 28}}>
              <Image
                source={require('./images/redeemed-1.png')}
                resizeMode="contain"
                style={styles.cardImage}
              />
              {/* row one */}
              <Text style={styles.cardHeadText}>1 month membership</Text>
              {/* row two */}
              <Text style={styles.cardLocationText}>Fitness Zone</Text>
              {/* row three */}
              <Text style={[styles.cardMoneyText, {marginTop: 4}]}>
                Use by 24/11/25
              </Text>
            </View>
            {/* redeemed details */}
            <Text style={styles.redeemTextDetails}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
            <Text style={styles.tandcText}>Terms and conditions</Text>
            <View style={styles.cardMoneyContainer}>
              <View style={styles.cardMoneyInnerContainer} />
              <Text style={styles.cardMoneyText}>Bullet Point 1</Text>
            </View>
            <View style={styles.cardMoneyContainer}>
              <View style={styles.cardMoneyInnerContainer} />
              <Text style={styles.cardMoneyText}>Bullet Point 2</Text>
            </View>
            <View style={styles.cardMoneyContainer}>
              <View style={styles.cardMoneyInnerContainer} />
              <Text style={styles.cardMoneyText}>Bullet Point 3</Text>
            </View>
          </View>

          {btnTitle && (
            <>
              <TouchableOpacity
                onPressIn={() => setIsPointsDeducted(!isPointsDeducted)}
                style={{
                  backgroundColor: '#00BED4',
                  borderRadius: 70,
                  padding: 10,
                  marginTop: 28,
                }}
                onPress={() => console.log('Redeemed button clicked.')}>
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
                  {btnTitle}
                </Text>
              </TouchableOpacity>
              {isPointsDeducted && (
                <>
                  <Text
                    style={[
                      styles.textStyle,
                      {
                        fontSize: 14,
                        textAlign: 'center',
                        color: '#757575',
                        marginTop: 16,
                      },
                    ]}>
                    You need 20 more chairs to redeem voucher
                  </Text>
                </>
              )}
            </>
          )}
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  // card details
  tandcText: {
    color: '#212121',
    fontFamily: 'SF Pro Display',
    fontSize: 16,
    lineHeight: 20,
    marginTop: 28,
  },
  redeemTextDetails: {
    color: '#757575',
    fontFamily: 'SF Pro Display',
    fontSize: 16,
    lineHeight: 20,
  },
  cardMoneyText: {
    fontFamily: 'SF Pro Display',
    fontSize: 16,
    color: '#757575',
    lineHeight: 20,
  },
  cardMoneyInnerContainer: {
    backgroundColor: '#757575',
    width: 4,
    height: 5,
    borderRadius: 2,
  },
  cardMoneyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
    paddingTop: 6,
  },
  cardHeadText: {
    fontFamily: 'SF Pro Display',
    fontWeight: '500',
    fontSize: 20,
    color: '#212121',
    lineHeight: 20,
    alignSelf: 'center',
    marginTop: 12,
  },
  cardLocationText: {
    fontFamily: 'SF Pro Display',
    fontSize: 16,
    color: '#212121',
    lineHeight: 20,
    alignSelf: 'center',
  },
  cardMoneyText: {
    fontFamily: 'SF Pro Display',
    fontSize: 12,
    color: '#757575',
    lineHeight: 14,
    alignSelf: 'center',
  },
  cardImage: {
    width: 64,
    height: 64,
    alignSelf: 'center',
  },

  // bar line
  linebar: {
    borderBottomColor: '#E8E8E8',
    width: width * 0.2,
    borderBottomWidth: 3,
    alignSelf: 'center',
  },
  headText: {
    fontFamily: 'Gilroy-Regular',
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
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
    paddingVertical: 12,
    paddingHorizontal: 20,
    paddingBottom: 20,
    margin: 16,
  },
  textStyle: {
    fontFamily: 'SF Pro Display',
    color: '#212121',
  },
});
