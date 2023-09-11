import React from 'react';
import navigationstrings from '../navigationstrings';
import {ColorPicker, ModalConcept} from '../../screens';

export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationstrings.MODALCONCEPT}
        component={ModalConcept}
        // options={{headerShown: true}}
      />
      <Stack.Screen
        name={navigationstrings.COLORPICKER}
        component={ColorPicker}
      />
    </>
  );
}
