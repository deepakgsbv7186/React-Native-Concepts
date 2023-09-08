import {
  Alert,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from './responsiveui';

export default function BottomModalOne({isOpen, setIsOpen}) {
  return (
    <>
      <Modal transparent visible={isOpen} animationType="fade">
        <View style={styles.container}>
          <View style={styles.innercontainer}>
            {/* Single Bar */}
            <View style={styles.linebar} />
            {/* Options Container */}
            <View style={styles.optionsContainer}>
              <Text style={[styles.headText]}>Upload Docs</Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flex: 0.45}}>
                  <TouchableOpacity
                    onPress={() => Alert.alert('Camera')}
                    style={[styles.optionsInnerContainer]}>
                    <Image
                      source={require('./icons/camera.png')}
                      resizeMode="contain"
                      style={styles.optionIcon}
                    />
                  </TouchableOpacity>
                  <Text style={[styles.headText]}>Camera</Text>
                </View>
                <View style={{flex: 0.45}}>
                  <TouchableOpacity
                    onPress={() => Alert.alert('Gallery')}
                    style={[styles.optionsInnerContainer]}>
                    <Image
                      source={require('./icons/gallery.png')}
                      resizeMode="contain"
                      style={styles.optionIcon}
                    />
                  </TouchableOpacity>
                  <Text style={[styles.headText]}>Gallery</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  // options
  optionsContainer: {
    paddingVertical: moderateScale(16),
    marginBottom: moderateScale(16),
  },
  optionsInnerContainer: {
    borderColor: 'rgba(0, 0, 0, 0.20)',
    borderRadius: moderateScale(60),
    borderWidth: 1,
    paddingVertical: moderateScaleVertical(24),
    marginVertical: moderateScaleVertical(16),
  },
  optionIcon: {
    width: moderateScale(32),
    height: moderateScaleVertical(32),
    alignSelf: 'center',
  },
  // bar line
  linebar: {
    borderBottomColor: 'rgba(0, 0, 0, 0.87)',
    width: width * 0.12,
    borderBottomWidth: 4,
    alignSelf: 'center',
  },
  headText: {
    fontFamily: 'Gilroy-Regular',
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: textScale(16),
    lineHeight: 20,
    textAlign: 'center',
  },
  // modal container
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.25)',
    position: 'relative',
  },
  innercontainer: {
    backgroundColor: '#ffffff',
    padding: moderateScale(16),
    borderTopLeftRadius: moderateScale(30),
    borderTopRightRadius: moderateScale(30),
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: moderateScaleVertical(12),
  },
});
