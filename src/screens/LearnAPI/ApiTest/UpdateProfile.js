import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-native-date-picker';
import {SelectCountry} from 'react-native-element-dropdown';
import {
  VectorIcon,
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../../theme';
import {useNavigation} from '@react-navigation/native';
import navigationstrings from '../../../navigation/navigationstrings';
import {getCountryData} from '../api/apiRequest';
import axios from 'axios';

const updatePofileSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, 'Too Short !')
    .max(30, 'Too Long !')
    .required('Please enter your first name')
    .matches(/^(?!.*([\w\d])\1\1)[\w\d]+$/, 'Please enter a valid name')
    .matches(/^[A-Za-z]{2,40}$/, 'Only alphabets allowed.'),
  lastName: Yup.string()
    .min(2, 'Too Short !')
    .max(30, 'Too Long !')
    .required('Please enter your last name')
    .matches(/^(?!.*(\w)\1\1)[\w\d]+$/, 'No repeating or special characters')
    .matches(/^[A-Za-z]{2,40}$/, 'Only alphabets allowed.'),
  email: Yup.string()
    .trim()
    .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email.')
    .required('Email is required.'),
  mobile: Yup.string()
    .trim()
    .matches(
      /^\+?[0-9]{1,4}?[-.\s]?\(?[0-9]{1,3}?\)?[-.\s]?[0-9]{3,4}[-.\s]?[0-9]{4,10}$/,
      'Please enter a valid number',
    )
    .required('Number is required'),
  address: Yup.string().required('Please enter your full address'),
});
//   country: Yup.string().required('Required'),
//   dob: Yup.string().required('Please select your DOB'),
//   state: Yup.string()
//     .matches(/^[A-Za-z\s-,.']+$/, 'Invalid State Name')
//     .required('Please enter state'),
//   city: Yup.string()
//     .matches(/^[A-Za-z\s]+$/, 'Invalid City Name')
//     .required('Please enter city'),

export default function UpdateProfile() {
  useEffect(() => {
    countryDataFromAPI();
    getUserAccount();
  }, []);
  const pointsTo = useNavigation();

  const [isOpen, setIsopen] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [countryData, setCountryData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('1');
  const countryDataFromAPI = async () => {
    const response = await getCountryData();
    setCountryData(response);
  };

  // Get Request
  const [user, setUser] = useState([]);
  const URL = 'https://java-dropcoin.mobiloitte.org/account/my-account';

  const getUserAccount = async () => {
    try {
      const result = await axios.get(URL, {
        headers: {
          userId: 7,
        },
      });
      setUser(result.data);
    } catch (error) {
      console.log('GET===== ', error);
    }
  };

  // Post Request
  const postFormdata = async formData => {
    console.log('Using form=====>', formData);
    const TOKEN =
      'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzdWJhc2hpbmlAbWFpbGluYXRvci5jb20iLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXSwicm9sZSI6IlVTRVIiLCJhdXRoZW50aWNhdGVkIjp0cnVlLCJ1c2VySWQiOjcsInVzZXJuYW1lIjoic3ViYXNoaW5pQG1haWxpbmF0b3IuY29tIiwiaWF0IjoxNjkzOTkwODEzLCJleHAiOjE2OTQwNzcyMTN9.cpa71UBzE4xLa7Ry2ND-MVte0Awpwgka1jqw4hWX6GvDmhEvoFjl_24RlE4D6-5zZq3iB2oaFsTBoEF-wKmRtg';
    try {
      const response = await axios({
        url: 'https://java-dropcoin.mobiloitte.org/account/profile-update',
        method: 'post',
        headers: {
          Authorization: 'Bearer ' + TOKEN,
        },
        data: {
          address: formData.address,
          city: 'string',
          country: 'string',
          countryCode: 'string',
          dob: 'string',
          email: formData.email,
          firstName: formData.firstName,
          flag: 'string',
          gender: 'string',
          imageUrl: 'string',
          lastName: formData.lastName,
          phoneNo: formData.phoneNo,
          pnWithoutCountryCode: 'string',
          state: 'string',
        },
      });

      //   console.log(response?.data);
    } catch (error) {
      console.log('update=====>', error?.response?.data);
    }
  };

  const userprofiledata = {
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    // country: '',
    // dob: '',
    // state: '',
    // city: '',
    address: '',
  };
  //   console.log('user data in====>', userprofiledata);
  return (
    <>
      {/* Update Head */}
      <View style={styles.headerContainer}>
        <VectorIcon
          name={'leftcircleo'}
          type={'AntDesign'}
          color={'black'}
          size={textScale(16)}
          style={{flex: 1}}
          onPress={() => pointsTo.navigate('GetMyAccount')}
        />
        <Text style={[styles.headerText, {flex: 8}]}>Update Profile</Text>
        <View style={{flex: 1}} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Formik
          initialValues={userprofiledata}
          validationSchema={updatePofileSchema}
          onSubmit={(values, {resetForm}) => {
            console.log(values);
            postFormdata(values);
            pointsTo.navigate('GetMyAccount');
          }}>
          {({
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldTouched,
            isValid,
          }) => {
            return (
              <View style={styles.container}>
                {/* first name input */}
                <View style={[styles.textInputContaier]}>
                  <Text style={styles.textInuptLabel}>First Name</Text>
                  <TextInput
                    placeholder="Enter first name..."
                    value={values.firstName}
                    onChangeText={text =>
                      handleChange('firstName')(text.replace(/[^a-zA-Z]/g, ''))
                    }
                    onBlur={() => setFieldTouched('firstName')}
                    maxLength={50}
                    style={[
                      styles.textInputStyle,
                      {textTransform: 'capitalize'},
                      errors.firstName && touched.firstName
                        ? {borderColor: '#FF3838'}
                        : null,
                    ]}
                  />
                  {touched.firstName && errors.firstName && (
                    <Text style={[styles.errorMsg]}>{errors.firstName}</Text>
                  )}
                </View>
                {/* last name input */}
                <View style={[styles.textInputContaier]}>
                  <Text style={styles.textInuptLabel}>Last Name</Text>
                  <TextInput
                    placeholder="Enter first name..."
                    value={values.lastName}
                    onChangeText={text =>
                      handleChange('lastName')(text.replace(/[^a-zA-Z]/g, ''))
                    }
                    onBlur={() => setFieldTouched('lastName')}
                    maxLength={50}
                    style={[
                      styles.textInputStyle,
                      {textTransform: 'capitalize'},
                      errors.lastName && touched.lastName
                        ? {borderColor: '#FF3838'}
                        : null,
                    ]}
                  />
                  {touched.lastName && errors.lastName && (
                    <Text style={[styles.errorMsg]}>{errors.lastName}</Text>
                  )}
                </View>
                {/* email input */}
                <View style={[styles.textInputContaier]}>
                  <Text style={styles.textInuptLabel}>Email</Text>
                  <TextInput
                    placeholder="Enter email..."
                    value={values.email}
                    onChangeText={text =>
                      handleChange('email')(text.replace(/[^a-zA-Z.@-]/g, ''))
                    }
                    onBlur={() => setFieldTouched('email')}
                    maxLength={50}
                    style={[
                      styles.textInputStyle,
                      errors.email && touched.email
                        ? {borderColor: '#FF3838'}
                        : null,
                    ]}
                  />
                  {touched.email && errors.email && (
                    <Text style={[styles.errorMsg]}>{errors.email}</Text>
                  )}
                </View>
                {/* mobile number input */}
                <View style={[styles.textInputContaier]}>
                  <Text style={styles.textInuptLabel}>Mobile</Text>
                  <TextInput
                    placeholder="+91 XXXXX XXXXX"
                    value={values.mobile}
                    onChangeText={text =>
                      handleChange('mobile')(text.replace(/[^0-9]/g, ''))
                    }
                    onBlur={() => setFieldTouched('mobile')}
                    maxLength={10}
                    keyboardType="number-pad"
                    style={[
                      styles.textInputStyle,
                      errors.mobile && touched.mobile
                        ? {borderColor: '#FF3838'}
                        : null,
                    ]}
                  />
                  {touched.mobile && errors.mobile && (
                    <Text style={[styles.errorMsg]}>{errors.mobile}</Text>
                  )}
                </View>
                {/* DOB Input  need to attach with formik*/}
                {/* <View style={[styles.textInputContaier]}>
                  <Text style={styles.textInuptLabel}>Date Of Birth</Text>
                  <View
                    style={[
                      styles.textInputStyle,
                      {flexDirection: 'row', alignItems: 'center'},
                      errors.dob && touched.dob
                        ? {borderColor: '#FF3838'}
                        : null,
                    ]}>
                    <TextInput
                      value={dateOfBirth.toDateString()}
                      style={{flex: 9}}
                      editable={false}
                    />
                    <VectorIcon
                      name={'calendar'}
                      type={'AntDesign'}
                      color={'black'}
                      size={textScale(16)}
                      style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                      }}
                      onPress={() => setIsopen(!isOpen)}
                    />
                  </View>
                  {touched.password && errors.password && (
                    <Text style={[styles.errorMsg]}>{errors.password}</Text>
                  )}
                </View> */}
                {/* Country */}
                {/* <View style={[styles.textInputContaier]}>
                  <Text style={styles.textInuptLabel}>Country</Text>
                  <SelectCountry
                    style={[
                      styles.textInputStyle,
                      {paddingVertical: 0},
                      errors.country && touched.country
                        ? {borderColor: '#FF3838'}
                        : null,
                    ]}
                    selectedTextStyle={styles.selectedTextStyle}
                    placeholderStyle={styles.placeholderStyle}
                    imageStyle={styles.imageStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    search
                    maxHeight={moderateScaleVertical(250)}
                    value={country}
                    data={countryData}
                    valueField="value"
                    labelField="label"
                    imageField="image"
                    placeholder="Select country"
                    searchPlaceholder="Search..."
                    onChange={selectedValue => {
                      setSelectedCountry(selectedValue.value);
                      handleChange('country')(selectedValue.value);
                    }}
                  />
                  {touched.country && errors.country && (
                    <Text style={[styles.errorMsg]}>{errors.country}</Text>
                  )}
                </View> */}
                {/* city Input */}
                {/* <View style={[styles.textInputContaier]}>
                  <Text style={styles.textInuptLabel}>City</Text>
                  <TextInput
                    placeholder="Enter city..."
                    value={city}
                    onChangeText={text =>
                      handleChange('city')(text.replace(/[^a-zA-Z\s]/g, ''))
                    }
                    onBlur={() => setFieldTouched('city')}
                    maxLength={50}
                    style={[
                      styles.textInputStyle,
                      errors.city && touched.city
                        ? {borderColor: '#FF3838'}
                        : null,
                    ]}
                  />
                  {touched.city && errors.city && (
                    <Text style={[styles.errorMsg]}>{errors.city}</Text>
                  )}
                </View> */}
                {/* state input */}
                {/* <View style={[styles.textInputContaier]}>
                  <Text style={styles.textInuptLabel}>State</Text>
                  <TextInput
                    placeholder="State"
                    value={state}
                    onChangeText={text =>
                      handleChange('state')(text.replace(/[^a-zA-Z\s]/g, ''))
                    }
                    onBlur={() => setFieldTouched('state')}
                    maxLength={30}
                    style={[
                      styles.textInputStyle,
                      errors.state && touched.state
                        ? {borderColor: '#FF3838'}
                        : null,
                    ]}
                  />
                  {touched.state && errors.state && (
                    <Text style={[styles.errorMsg]}>{errors.state}</Text>
                  )}
                </View> */}
                {/* address Input */}
                <View style={[styles.textInputContaier]}>
                  <Text style={styles.textInuptLabel}>Address</Text>
                  <TextInput
                    placeholder="Enter address..."
                    value={values.address}
                    onChangeText={text =>
                      handleChange('address')(
                        text.replace(/[^a-zA-Z0-9\s.,-]/g, ''),
                      )
                    }
                    onBlur={() => setFieldTouched('address')}
                    maxLength={100}
                    multiline
                    // numberOfLines={4}
                    style={[
                      styles.textInputStyle,
                      {textTransform: 'capitalize'},
                      errors.address && touched.address
                        ? {borderColor: '#FF3838'}
                        : null,
                    ]}
                  />
                  {touched.address && errors.address && (
                    <Text style={[styles.errorMsg]}>{errors.address}</Text>
                  )}
                </View>
                {/* Submit Button */}
                <TouchableOpacity
                  onPress={handleSubmit}
                  //   disabled={!isValid}
                  style={[
                    styles.btn,
                    {
                      backgroundColor: !isValid ? 'rgba(0,0,0,0.3)' : '#0666EB',
                    },
                  ]}>
                  <Text style={[styles.btnText]}>Submit</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </Formik>
      </ScrollView>
      <DatePicker
        modal
        open={isOpen}
        mode="date"
        date={dateOfBirth}
        onConfirm={date => {
          setIsopen(!isOpen);
          setDateOfBirth(date);
        }}
        onCancel={() => {
          setIsopen(!isOpen);
        }}
        minimumDate={new Date('1980-12-31')}
        maximumDate={new Date()}
      />
    </>
  );
}

const styles = StyleSheet.create({
  // drop down
  imageStyle: {
    width: 24,
    height: 24,
  },
  placeholderStyle: {
    fontSize: textScale(14),
  },
  selectedTextStyle: {
    fontSize: textScale(14),
    marginLeft: 8,
  },
  iconStyle: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  inputSearchStyle: {
    height: moderateScaleVertical(40),
    fontSize: textScale(14),
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: textScale(16),
    fontWeight: '600',
  },
  btn: {
    marginVertical: moderateScaleVertical(10),
    padding: moderateScaleVertical(10),
    borderRadius: moderateScale(5),
  },
  errorMsg: {
    color: 'red',
    fontSize: textScale(10),
    marginTop: moderateScaleVertical(4),
  },
  textInputStyle: {
    borderColor: 'rgba(0,0,0,0.3)',
    borderWidth: 1,
    padding: moderateScale(10),
    borderRadius: moderateScale(5),
  },
  textInuptLabel: {
    marginBottom: moderateScaleVertical(4),
    fontSize: textScale(12),
  },
  textInputContaier: {paddingVertical: moderateScaleVertical(10)},
  headerText: {
    fontSize: textScale(16),
    fontWeight: '600',
    textAlign: 'center',
  },
  headerContainer: {
    backgroundColor: 'white',
    padding: moderateScale(16),
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: moderateScale(16),
  },
});
