import {
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
} from '../../../../theme';
import {useNavigation} from '@react-navigation/native';
import navigationstrings from '../../../../navigation/navigationstrings';
import {getCountryData} from '../../api/apiRequest';
import axios from 'axios';

const kycValidationSchema = Yup.object({
  fullname: Yup.string()
    .trim()
    .min(2, 'Atleast two characters')
    .matches(/^[a-zA-Z\s]*$/, 'Full Name can only contain letters and spaces')
    .required('Full Name is required'),
  dob: Yup.string().required('DOB is required'),
  country: Yup.string().required('Country is required'),
  city: Yup.string()
    .trim()
    .min(2, 'Check city name again...')
    .matches(/^[a-zA-Z\s]*$/, 'City can only contain letters and spaces')
    .required('City is required'),
  postal: Yup.string()
    .trim()
    .matches(/^[0-9]*$/, 'Postal code must contain numbers only')
    .min(5, 'Postal code must be at least 5 digits long')
    .max(10, 'Postal code cannot exceed 10 digits'),
  address: Yup.string()
    .trim()
    .min(2, 'Full address required')
    .matches(/^[a-zA-Z0-9\s.,-]*$/, 'Check address again...')
    .required('Address is required'),
});

export default function UserKyc() {
  useEffect(() => {
    countryDataFromAPI();
  }, []);
  const pointsTo = useNavigation();
  const kycdata = {
    fullname: '',
    dob: new Date(),
    country: '',
    city: '',
    postal: '',
    address: '',
  };
  const [isOpen, setIsopen] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [countryData, setCountryData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('1');
  const countryDataFromAPI = async () => {
    const response = await getCountryData();
    setCountryData(response);
  };
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGYyZDY2ZjhjMGYzMDE4OTQ2Mjg1MjIiLCJlbWFpbCI6InZha2F1Y2doa2VzZ2p2a2tocUBjYXpsZy5jb20iLCJtb2JpbGVOdW1iZXIiOiI5ODk4OTg5ODkwIiwidXNlclR5cGUiOiJVU0VSIiwiaWF0IjoxNjkzNjM2Mjk2LCJleHAiOjE2OTM2Nzk0OTZ9.BaYMoB-xHY3jYOeNlhiGCPKeSZXBSut_e9BiE0ALd68';
  const URL = 'https://node-digitalwallet.mobiloitte.io/api/v1/user/addKYC';
  const postFormdata = async formData => {
    try {
      const response = await axios.post(
        URL,
        {
          fullName: formData.fullname,
          gender: 'string',
          address: formData.address,
          country: formData.country,
          countrycode: 'string',
          state: 'string',
          city: formData.address,
          fullAddress: formData.address,
          zipCode: formData.postal,
          dateOfBirth: dateOfBirth,
          profilePic: 'string',
          image: 'string',
          passport: {
            idNumber: 'string',
            documentName: 'string',
            frontImage: 'string',
            backImage: 'string',
          },
        },
        {
          headers: {
            token: token,
          },
        },
      );
      console.log(response?.data?.responseMessage);
    } catch (error) {
      console.log('KYC=====>', error?.response?.data);
    }
  };

  return (
    <>
      {/* KYC Head */}
      <View style={styles.headerContainer}>
        <VectorIcon
          name={'leftcircleo'}
          type={'AntDesign'}
          color={'black'}
          size={textScale(16)}
          style={{flex: 1}}
          onPress={() => pointsTo.navigate(navigationstrings.LOGIN)}
        />
        <Text style={[styles.headerText, {flex: 8}]}>KYC Verification</Text>
        <View style={{flex: 1}} />
      </View>
      <Formik
        initialValues={kycdata}
        validationSchema={kycValidationSchema}
        onSubmit={(values, {resetForm}) => {
          console.log(values);
          postFormdata(values);
          resetForm();
        }}>
        {({
          values,
          touched,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          isValid,
        }) => {
          const {fullname, dob, country, city, postal, address} = values;
          return (
            <View style={styles.container}>
              {/* Fullname Input */}
              <View style={[styles.textInputContaier]}>
                <Text style={styles.textInuptLabel}>Full Name</Text>
                <TextInput
                  placeholder="Enter full name..."
                  value={fullname}
                  onChangeText={text =>
                    handleChange('fullname')(text.replace(/[^a-zA-Z\s]/g, ''))
                  }
                  onBlur={handleBlur('fullname')}
                  maxLength={50}
                  style={[styles.textInputStyle]}
                />
                {touched.fullname && errors.fullname && (
                  <Text style={[styles.errorMsg]}>{errors.fullname}</Text>
                )}
              </View>
              {/* DOB Input  need to attach with formik*/}
              <View style={[styles.textInputContaier]}>
                <Text style={styles.textInuptLabel}>Date Of Birth</Text>
                <View
                  style={[
                    styles.textInputStyle,
                    {flexDirection: 'row', alignItems: 'center'},
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
              </View>
              {/* Country */}
              <View style={[styles.textInputContaier]}>
                <Text style={styles.textInuptLabel}>Country</Text>
                <SelectCountry
                  style={[styles.textInputStyle, {paddingVertical: 0}]}
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
              </View>
              {/* city Input */}
              <View style={[styles.textInputContaier]}>
                <Text style={styles.textInuptLabel}>City</Text>
                <TextInput
                  placeholder="Enter city..."
                  value={city}
                  onChangeText={text =>
                    handleChange('city')(text.replace(/[^a-zA-Z\s]/g, ''))
                  }
                  onBlur={handleBlur('city')}
                  maxLength={50}
                  style={[styles.textInputStyle]}
                />
                {touched.city && errors.city && (
                  <Text style={[styles.errorMsg]}>{errors.city}</Text>
                )}
              </View>
              {/* postal code Input */}
              <View style={[styles.textInputContaier]}>
                <Text style={styles.textInuptLabel}>
                  Postal Code (Optional)
                </Text>
                <TextInput
                  placeholder="Postal code"
                  value={postal}
                  onChangeText={text =>
                    handleChange('postal')(text.replace(/[^0-9]/g, ''))
                  }
                  onBlur={handleBlur('postal')}
                  maxLength={6}
                  keyboardType="number-pad"
                  style={[styles.textInputStyle]}
                />
                {touched.postal && errors.postal && (
                  <Text style={[styles.errorMsg]}>{errors.postal}</Text>
                )}
              </View>
              {/* address Input */}
              <View style={[styles.textInputContaier]}>
                <Text style={styles.textInuptLabel}>Residential address</Text>
                <TextInput
                  placeholder="Enter address..."
                  value={address}
                  onChangeText={text =>
                    handleChange('address')(
                      text.replace(/[^a-zA-Z0-9\s.,-]/g, ''),
                    )
                  }
                  onBlur={handleBlur('address')}
                  maxLength={50}
                  style={[styles.textInputStyle]}
                />
                {touched.address && errors.address && (
                  <Text style={[styles.errorMsg]}>{errors.address}</Text>
                )}
              </View>
              {/* Submit Button */}
              <TouchableOpacity
                onPress={handleSubmit}
                disabled={!isValid}
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
