import React from 'react';
import navigationstrings from '../navigationstrings';
import {ModalConcept} from '../../screens';

export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationstrings.MODALCONCEPT}
        component={ModalConcept}
        // options={{headerShown: true}}
      />
    </>
  );
}
