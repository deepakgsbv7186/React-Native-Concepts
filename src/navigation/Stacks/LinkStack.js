import React from 'react';
import navigationstrings from '../navigationstrings';
import {LinkedDomainOptions} from '../../screens';

export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationstrings.LINKED_DOMAINS}
        component={LinkedDomainOptions}
      />
    </>
  );
}
