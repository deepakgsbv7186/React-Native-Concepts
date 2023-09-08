import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {moderateScale, moderateScaleVertical, textScale} from '../../../theme';

export default function ConfirmModal({isOpen, title, onConfirm, onCancel}) {
  return (
    <Modal transparent visible={isOpen} animationType="fade">
      <View style={styles.container}>
        <View style={styles.innercontainer}>
          {/* Close icon */}
          <TouchableOpacity onPress={onCancel}>
            <Image
              source={require('../../../assets/icons/close.png')}
              resizeMode="contain"
              style={{
                width: moderateScale(12),
                height: moderateScaleVertical(12),
                alignSelf: 'flex-end',
              }}
            />
          </TouchableOpacity>
          <Text style={styles.headText}>{title}</Text>

          {/* Modal Buttons */}
          <View style={styles.btnContainer}>
            <TouchableOpacity
              onPress={onCancel}
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
              onPress={onConfirm}
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
