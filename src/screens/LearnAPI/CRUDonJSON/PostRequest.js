import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {moderateScale, moderateScaleVertical, textScale} from '../../../theme';
import {postAPIdata} from '../api/apiRequest';
import {TextInput} from 'react-native-paper';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';
import navigationstrings from '../../../navigation/navigationstrings';

const postformschema = Yup.object({
  title: Yup.string()
    .required('Book title is required.')
    .min(2, 'Minimum two letters required.')
    .matches(/^[A-Za-z ]{2,100}$/, 'Only alphabets allowed.'),
  author: Yup.string()
    .required('Book author is required.')
    .min(2, 'Minimum two letters required.')
    .matches(/^[A-Za-z ]{2,100}$/, 'Only alphabets allowed.'),
});

export default function PostRequest() {
  const pointsTo = useNavigation();
  // New book object
  const newbook = {
    title: '',
    author: '',
  };
  const postBookData = async bookDetails => {
    try {
      const pushdata = await postAPIdata(bookDetails);
      pointsTo.navigate(navigationstrings.GETREQUEST);
    } catch (error) {
      console.log('post===== ', error);
    }
  };
  return (
    <View style={[styles.container]}>
      <Text
        style={[
          styles.commonText,
          {color: 'black', marginVertical: moderateScaleVertical(10)},
        ]}>
        POST Request
      </Text>
      <View style={[styles.getContainer]}>
        <Formik
          initialValues={newbook}
          validationSchema={postformschema}
          onSubmit={(values, {resetForm}) => {
            postBookData(values);
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
          }) => {
            const {title, author} = values;
            return (
              <>
                <View>
                  <TextInput
                    mode="outlined"
                    placeholder="Enter book title"
                    value={title}
                    maxLength={100}
                    onChangeText={text =>
                      handleChange('title')(text.replace(/[^a-zA-Z ]/g, ''))
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
                <TouchableOpacity
                  onPress={handleSubmit}
                  disabled={!isValid}
                  style={[
                    styles.saveBtn,
                    {backgroundColor: !isValid ? 'rgba(0,0,0,0.3)' : '#78C1F3'},
                  ]}>
                  <Text style={[styles.commonText]}>Save Book</Text>
                </TouchableOpacity>
              </>
            );
          }}
        </Formik>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  saveBtn: {
    borderRadius: moderateScale(10),
    paddingVertical: moderateScaleVertical(10),
  },
  commonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: textScale(20),
  },
  getDetailsContainer: {
    backgroundColor: '#78C1F3',
    borderRadius: moderateScale(10),
    paddingVertical: moderateScaleVertical(4),
  },
  getContainer: {
    backgroundColor: '#7091F5',
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
    rowGap: 10,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: moderateScale(16),
  },
});
