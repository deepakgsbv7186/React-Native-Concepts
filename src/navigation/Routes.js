import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  AuthStack,
  ComponentStack,
  LearnApiStack,
  LinkStack,
  MainStack,
  PaymentStack,
  TawleStack,
  UiConceptStack,
} from './Stacks';
import navigationstrings from './navigationstrings';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={navigationstrings.MODALCONCEPT}
        screenOptions={{headerShown: false}}>
        {AuthStack(Stack)}
        {MainStack(Stack)}
        {UiConceptStack(Stack)}
        {LearnApiStack(Stack)}
        {LinkStack(Stack)}
        {TawleStack(Stack)}
        {PaymentStack(Stack)}
        {ComponentStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
