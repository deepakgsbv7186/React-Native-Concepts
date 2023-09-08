import {
  Alert,
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
import {TextInput} from 'react-native-paper';
import {Dropdown} from 'react-native-element-dropdown';

const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
];

export default function BottomModalTwo({isOpen, setIsOpen}) {
  return (
    <>
      <Modal transparent visible={isOpen} animationType="fade">
        <View style={styles.container}>
          <View style={styles.innercontainer}>
            {/* Single Bar */}
            <View style={styles.linebar} />
            {/* Options Container */}
            <Text style={[styles.headText]}>
              Documents Uploaded Successfully!
            </Text>
            <View style={styles.optionsContainer}>
              {/* Dropdown */}
              <View>
                <Text style={styles.optionsLabelText}>
                  Select Folder (Optional)
                </Text>
                <Dropdown
                  style={[styles.dropdown]}
                  placeholderStyle={{
                    color: 'rgba(0, 0, 0, 0.60)',
                    fontFamily: 'Gilroy-Light',
                    marginLeft: moderateScale(20),
                  }}
                  iconStyle={{marginRight: moderateScale(20)}}
                  data={data}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={'Please select the folder'}
                />
              </View>
              {/* TextInput */}
              <View>
                <Text style={styles.optionsLabelText}>
                  Document Name (Optional)
                </Text>
                <TextInput
                  mode="outlined"
                  outlineColor="rgba(0, 0, 0, 0.15)"
                  activeOutlineColor="rgba(0, 0, 0, 0.15)"
                  outlineStyle={{borderRadius: moderateScale(50)}}
                  style={{
                    backgroundColor: 'white',
                    paddingHorizontal: 4,
                    fontFamily: 'Gilroy-Light',
                  }}
                  placeholder="Please enter document name"
                  placeholderTextColor={'rgba(0, 0, 0, 0.60)'}
                />
              </View>
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
                    Skip
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    Alert.alert('Continue');
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
                    Continue
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  // Button Container
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  commonBtn: {
    borderWidth: 1,
    flex: 0.485,
    paddingVertical: moderateScaleVertical(14),
    borderRadius: moderateScale(30),
  },
  btnText: {
    fontFamily: 'Gilroy-SemiBold',
    fontSize: textScale(16),
    textAlign: 'center',
  },
  // options
  optionsContainer: {
    marginVertical: moderateScale(24),
    rowGap: 20,
  },
  optionsLabelText: {
    fontFamily: 'Gilroy-Regular',
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: textScale(16),
    lineHeight: 20,
  },
  dropdown: {
    borderColor: 'rgba(0, 0, 0, 0.15)',
    borderWidth: 1,
    borderRadius: moderateScale(50),
    marginTop: moderateScaleVertical(6),
    paddingVertical: moderateScaleVertical(6),
  },
  // bar line
  linebar: {
    borderBottomColor: 'rgba(0, 0, 0, 0.87)',
    width: width * 0.12,
    borderBottomWidth: 4,
    alignSelf: 'center',
    marginBottom: moderateScale(16),
  },
  headText: {
    fontFamily: 'Gilroy-SemiBold',
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
    padding: moderateScale(24),
    borderTopLeftRadius: moderateScale(30),
    borderTopRightRadius: moderateScale(30),
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: moderateScaleVertical(12),
  },
});
