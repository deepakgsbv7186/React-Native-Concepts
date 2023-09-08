import React from 'react';
import navigationstrings from '../navigationstrings';
import {Login, Signup, UserKyc} from '../../screens';

export default function (Stack) {
  return (
    <>
      <Stack.Screen name={navigationstrings.LOGIN} component={Login} />
      <Stack.Screen name={navigationstrings.SIGNUP} component={Signup} />
      <Stack.Screen name={navigationstrings.KYC} component={UserKyc} />
    </>
  );
}
