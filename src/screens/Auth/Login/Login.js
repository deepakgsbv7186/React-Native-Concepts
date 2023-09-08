import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {
  VectorIcon,
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../../theme';
import {useNavigation} from '@react-navigation/native';
import navigationstrings from '../../../navigation/navigationstrings';

const loginValidationSchema = Yup.object({
  email: Yup.string()
    .trim()
    .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email.')
    .required('Email is required.'),
  password: Yup.string()
    .trim()
    .min(8, 'Minimum 8 characters required.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Weak password. Include speacial characters, numbers as well.',
    )
    .required('Password is required.'),
});

export default function Login() {
  const pointsTo = useNavigation();
  const [showPass, setShowPass] = useState(false);
  const user = {
    email: '',
    password: '',
  };
  return (
    <>
      {/* Login Head */}
      <View style={{backgroundColor: 'white', padding: moderateScale(16)}}>
        <Text style={styles.headerText}>Login for KYC</Text>
      </View>
      <Formik
        initialValues={user}
        validationSchema={loginValidationSchema}
        onSubmit={(values, {resetForm}) => {
          console.log(values);
          resetForm();
          pointsTo.navigate(navigationstrings.KYC);
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
          const {email, password} = values;
          return (
            <View style={styles.container}>
              {/* Email Input */}
              <View style={[styles.textInputContaier]}>
                <Text style={styles.textInuptLabel}>Email</Text>
                <TextInput
                  placeholder="Enter email..."
                  value={email}
                  onChangeText={text =>
                    handleChange('email')(text.replace(/[^a-zA-Z@0-9._]/g, ''))
                  }
                  onBlur={handleBlur('email')}
                  maxLength={50}
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={[styles.textInputStyle, {textTransform: 'lowercase'}]}
                />
                {touched.email && errors.email && (
                  <Text style={[styles.errorMsg]}>{errors.email}</Text>
                )}
              </View>
              {/* Password Input */}
              <View style={[styles.textInputContaier]}>
                <Text style={styles.textInuptLabel}>Password</Text>
                <View
                  style={[
                    styles.textInputStyle,
                    {flexDirection: 'row', alignItems: 'center'},
                  ]}>
                  <TextInput
                    placeholder="Enter password..."
                    value={password}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    maxLength={50}
                    autoCapitalize="none"
                    secureTextEntry={!showPass}
                    style={[{flex: 9}]}
                  />
                  <VectorIcon
                    name={showPass ? 'eye-outline' : 'eye-off-outline'}
                    type={'Ionicons'}
                    color={'black'}
                    size={textScale(16)}
                    style={{
                      flex: 1,
                      alignItems: 'center',
                    }}
                    onPress={() => setShowPass(!showPass)}
                  />
                </View>
                {touched.password && errors.password && (
                  <Text style={[styles.errorMsg]}>{errors.password}</Text>
                )}
              </View>
              <TouchableOpacity
                onPress={handleSubmit}
                disabled={!isValid}
                style={[
                  styles.btn,
                  {
                    backgroundColor: !isValid ? 'rgba(0,0,0,0.3)' : '#0666EB',
                  },
                ]}>
                <Text style={[styles.btnText]}>Login</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      </Formik>
    </>
  );
}

const styles = StyleSheet.create({
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
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: moderateScale(16),
  },
});
