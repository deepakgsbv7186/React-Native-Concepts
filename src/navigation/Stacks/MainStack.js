import React from 'react';
import TabRoutes from '../TabRoutes';
import navigationstrings from '../navigationstrings';

export default function (Stack) {
  return (
    <>
      <Stack.Screen name={navigationstrings.TAB_ROUTES} component={TabRoutes} />
    </>
  );
}
