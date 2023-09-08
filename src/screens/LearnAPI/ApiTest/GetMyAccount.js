import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {moderateScale, moderateScaleVertical, textScale} from '../../../theme';

export default function GetMyAccount() {
  const pointsTo = useNavigation();
  const [user, setUser] = useState([]);
  const URL = 'https://java-dropcoin.mobiloitte.org/account/my-account';
  useEffect(() => {
    getUserAccount();
  }, []);

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

  return (
    <View style={{padding: 16}}>
      <Text>GetMyAccount</Text>
      <Text>Email: {user?.data?.email}</Text>
      <Text>First name: {user?.data?.firstName}</Text>
      <Text>Last name: {user?.data?.lastName}</Text>
      <Text>Phone: {user?.data?.phoneNo}</Text>
      <Text>User ID: {user?.data?.userId}</Text>
      {/* <Image
        source={{uri: user?.data?.imageUrl}}
        style={{width: 200, height: 200}}
        resizeMode="contain"
      /> */}
      <TouchableOpacity
        onPress={() => pointsTo.navigate('UpdateProfile', user?.data)}
        style={[
          styles.btn,
          {
            backgroundColor: '#0666EB',
          },
        ]}>
        <Text style={[styles.btnText]}>Update Profile</Text>
      </TouchableOpacity>
    </View>
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
});
