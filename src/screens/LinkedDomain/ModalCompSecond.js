import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {moderateScale, moderateScaleVertical, textScale} from './responsiveui';
import {useNavigation} from '@react-navigation/native';

export default function ModalCompSecond({isOpen, setIsOpen, title, ...props}) {
  const pointsTo = useNavigation();
  return (
    <>
      <Modal
        transparent
        visible={isOpen}
        animationType="fade"
        // onRequestClose
        onDismiss={isOpen}>
        <View style={styles.container}>
          <View style={styles.innercontainer}>
            {/* Close icon */}
            <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
              <Image
                source={require('./icons/close.png')}
                resizeMode="contain"
                style={{
                  width: moderateScale(12),
                  height: moderateScaleVertical(12),
                  alignSelf: 'flex-end',
                }}
              />
            </TouchableOpacity>
            <Image
              source={require('./icons/info.png')}
              resizeMode="contain"
              style={{
                width: moderateScale(60),
                height: moderateScaleVertical(60),
                alignSelf: 'center',
              }}
            />
            <Text style={styles.headText}>{title}</Text>
            <Text style={styles.descText}>
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual form of a document or a typeface without relying on
              meaningful content.
            </Text>

            {/* Modal Buttons */}
            <View style={styles.btnContainer}>
              <TouchableOpacity
                onPress={() => setIsOpen(!isOpen)}
                style={[
                  styles.commonBtn,
                  {
                    backgroundColor: '#ffffff',
                    borderColor: 'rgba(0, 0, 0, 0.15)',
                  },
                ]}>
                <Text
                  style={[
                    styles.btnText,
                    {
                      color: 'rgba(0, 0, 0, 0.60)',
                    },
                  ]}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  pointsTo.navigate('linked_domains');
                  setIsOpen(!isOpen);
                }}
                style={[
                  styles.commonBtn,
                  {
                    backgroundColor: 'rgba(0, 0, 0, 0.87)',
                    borderColor: 'rgba(0, 0, 0, 0.87)',
                  },
                ]}>
                <Text
                  style={[
                    styles.btnText,
                    {
                      color: 'rgba(255, 255, 255, 0.87)',
                    },
                  ]}>
                  Yes
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  // text head
  headText: {
    fontFamily: 'Gilroy-Medium',
    fontSize: textScale(16),
    color: 'rgba(0, 0, 0, 0.87)',
    lineHeight: 22,
    textAlign: 'center',
    marginTop: moderateScaleVertical(20),
    marginBottom: moderateScaleVertical(10),
  },
  descText: {
    fontFamily: 'Gilroy-Light',
    fontSize: textScale(14),
    color: 'rgba(0, 0, 0, 0.60)',
    lineHeight: 20,
    textAlign: 'center',
  },
  // modal container
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: moderateScale(16),
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  innercontainer: {
    backgroundColor: '#ffffff',
    padding: moderateScale(16),
    borderRadius: moderateScale(10),
  },
  // Button Container
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: moderateScaleVertical(24),
    marginBottom: moderateScaleVertical(8),
  },
  commonBtn: {
    borderWidth: 1,
    flex: 0.47,
    paddingVertical: moderateScaleVertical(14),
    borderRadius: moderateScale(30),
  },
  btnText: {
    fontFamily: 'Gilroy-SemiBold',
    fontSize: textScale(16),
    textAlign: 'center',
  },
});
