import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {moderateScale, moderateScaleVertical, textScale} from './responsiveui';
import ModalCompSecond from './ModalCompSecond';

export default function ModalCompFirst({isOpen, setIsOpen, ...props}) {
  const [isPlay, setIsPlay] = useState(false);
  const [isDisconnectModal, setIsDisconnectModal] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
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
            <TouchableOpacity
              style={{marginBottom: moderateScaleVertical(10)}}
              onPress={() => setIsOpen(!isOpen)}>
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
            {/* Action  */}
            {isPlay ? (
              <TouchableOpacity
                onPress={() => setIsPlay(!isPlay)}
                style={[styles.optionBtn]}>
                <Image
                  source={require('./icons/play.png')}
                  resizeMode="contain"
                  style={styles.optionIcon}
                />
                <Text style={[styles.optionBtnText]}>
                  Start Synchronization
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => setIsPlay(!isPlay)}
                style={[styles.optionBtn]}>
                <Image
                  source={require('./icons/pause.png')}
                  resizeMode="contain"
                  style={styles.optionIcon}
                />
                <Text style={[styles.optionBtnText]}>Stop Synchronization</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity
              onPress={() => {
                setIsDisconnectModal(!isDisconnectModal);
                setIsOpen(!isOpen);
              }}
              style={[styles.optionBtn]}>
              <Image
                source={require('./icons/no_connection.png')}
                resizeMode="contain"
                style={styles.optionIcon}
              />
              <Text style={[styles.optionBtnText]}>
                Disconnect Domain from Sync
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setIsDeleteModal(!isDeleteModal);
                setIsOpen(!isOpen);
              }}
              style={[
                styles.optionBtn,
                {borderBottomWidth: 0, marginBottom: 0},
              ]}>
              <Image
                source={require('./icons/delete.png')}
                resizeMode="contain"
                style={styles.optionIcon}
              />
              <Text style={[styles.optionBtnText]}>
                Delete from List of Domains
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <ModalCompSecond
        isOpen={isDisconnectModal}
        setIsOpen={setIsDisconnectModal}
        title="Are you sure about to disconnect synchronization?"
      />
      <ModalCompSecond
        isOpen={isDeleteModal}
        setIsOpen={setIsDeleteModal}
        title="Are you sure about to delete list from domain?"
      />
    </>
  );
}

const styles = StyleSheet.create({
  optionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: moderateScale(12),
    borderBottomColor: 'rgba(0, 0, 0, 0.15)',
    borderBottomWidth: 1,
    paddingBottom: moderateScaleVertical(15),
    marginBottom: moderateScaleVertical(15),
  },
  optionBtnText: {
    fontFamily: 'Gilroy-Regular',
    fontSize: textScale(16),
    color: 'rgba(0, 0, 0, 0.87)',
  },
  optionIcon: {
    width: moderateScale(44),
    height: moderateScaleVertical(44),
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
    padding: moderateScale(15),
    borderRadius: moderateScale(10),
  },
});
