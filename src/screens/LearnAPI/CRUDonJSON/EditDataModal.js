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
import {editAPIdata, getAPIdata} from '../api/apiRequest';
import {TextInput} from 'react-native-paper';
import {Formik} from 'formik';
import * as Yup from 'yup';

const editformschema = Yup.object({
  title: Yup.string()
    .required('Book title is required.')
    .min(2, 'Minimum two letters required.')
    .matches(/^[A-Za-z@ ]{2,100}$/, 'Only alphabets allowed.'),
  author: Yup.string()
    .required('Book author is required.')
    .min(2, 'Minimum two letters required.')
    .matches(/^[A-Za-z ]{2,100}$/, 'Only alphabets allowed.'),
});

export default function EditDataModal({title, isOpen, setIsOpen, bookData}) {
  const book = {
    title: bookData.title,
    author: bookData.author,
  };
  const editBookData = async bookDetails => {
    try {
      await editAPIdata(bookData.id, bookDetails);
      setIsOpen(!isOpen);
      getAPIdata();
    } catch (error) {
      console.log('edit===== ', error);
    }
  };
  return (
    <Modal transparent visible={isOpen} animationType="fade">
      <View style={styles.container}>
        <View style={styles.innercontainer}>
          {/* head with close icon */}
          <View style={[styles.headContainer]}>
            <View style={{width: moderateScale(12)}} />
            <Text style={styles.headText}>{title}</Text>
            <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
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
          </View>

          {/* Form */}
          <Formik
            initialValues={book}
            validationSchema={editformschema}
            onSubmit={(values, {resetForm}) => {
              editBookData(values);
              resetForm();
            }}>
            {({
              values,
              touched,
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isValid,
              resetForm,
            }) => {
              const {title, author} = values;
              return (
                <View style={[styles.getContainer]}>
                  {/* Book title input */}
                  <View>
                    <TextInput
                      mode="outlined"
                      placeholder="Enter book title"
                      value={title}
                      maxLength={100}
                      onChangeText={text =>
                        handleChange('title')(text.replace(/[^a-zA-Z@ ]/g, ''))
                      }
                      onBlur={handleBlur('title')}
                      outlineColor={errors.title ? 'red' : 'black'}
                      autoCorrect={false}
                      autoCapitalize="none"
                    />
                    {errors.title && touched.title && (
                      <Text style={{color: 'red', fontSize: 10}}>
                        {errors.title}
                      </Text>
                    )}
                  </View>
                  {/* author name input */}
                  <View>
                    <TextInput
                      mode="outlined"
                      placeholder="Enter book author"
                      value={author}
                      maxLength={100}
                      onChangeText={text =>
                        handleChange('author')(text.replace(/[^a-zA-Z ]/g, ''))
                      }
                      onBlur={handleBlur('author')}
                      outlineColor={errors.author ? 'red' : 'black'}
                      autoCorrect={false}
                      autoCapitalize="none"
                    />
                    {errors.author && touched.author && (
                      <Text style={{color: 'red', fontSize: 10}}>
                        {errors.author}
                      </Text>
                    )}
                  </View>
                  {/* Buttons */}
                  <View style={styles.btnContainer}>
                    {/* Cancel Button */}
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
                    {/* update button */}
                    <TouchableOpacity
                      onPress={handleSubmit}
                      disabled={!isValid}
                      style={[
                        styles.commonBtn,
                        {
                          backgroundColor: !isValid
                            ? 'rgba(0,0,0,0.3)'
                            : 'rgba(0, 0, 0, 0.87)',
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
                        Update
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          </Formik>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  // form
  getContainer: {
    // backgroundColor: '#7091F5',
    // borderRadius: moderateScale(10),
    // paddingVertical: moderateScale(10),
    rowGap: 10,
  },
  // text head
  headContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headText: {
    fontFamily: 'Gilroy-Medium',
    fontSize: textScale(16),
    color: 'rgba(0, 0, 0, 0.87)',
    lineHeight: 22,
    textAlign: 'center',
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
    marginTop: moderateScaleVertical(4),
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
