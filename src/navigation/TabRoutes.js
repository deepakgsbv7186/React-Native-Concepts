import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Platform} from 'react-native';
import {
  COLORS,
  VectorIcon,
  moderateScale,
  moderateScaleVertical,
  textScale,
  verticalScale,
} from '../theme';
import navigationstrings from './navigationstrings';
import {
  Explore,
  GetRequest,
  Home,
  JsonPlaceHolder,
  Notification,
  PostRequest,
  Profile,
  RazarPay,
  UseContextHook,
  UseReducerHook,
  UseRefHook,
} from '../screens';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

export default TabRoutes = () => {
  const pointsTo = useNavigation();
  return (
    <BottomTab.Navigator
      initialRouteName={navigationstrings.DASHBOARD}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: Platform.OS === 'ios' ? verticalScale(90) : verticalScale(60),
        },
        tabBarItemStyle: {paddingVertical: moderateScaleVertical(8)},
        tabBarLabelStyle: {
          color: COLORS.primary,
          textTransform: 'capitalize',
          fontSize: textScale(10),
        },

        // tabBarShowLabel: false,
      }}>
      <BottomTab.Screen
        name={navigationstrings.DASHBOARD}
        component={HomeDashboard}
        options={{
          tabBarIcon: ({focused}) => (
            <VectorIcon
              name={focused ? 'home' : 'home-outline'}
              type={'Ionicons'}
              size={moderateScale(20)}
              color={COLORS.primary}
              onPress={() => pointsTo.navigate(navigationstrings.DASHBOARD)}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name={navigationstrings.EXPLOREMENU}
        component={ExploreMenu}
        options={{
          tabBarIcon: ({focused}) => (
            <VectorIcon
              name={focused ? 'world' : 'world-o'}
              type={'Fontisto'}
              size={moderateScale(20)}
              color={COLORS.primary}
              onPress={() => pointsTo.navigate(navigationstrings.EXPLOREMENU)}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name={navigationstrings.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <VectorIcon
              name={focused ? 'person' : 'person-outline'}
              type={'Ionicons'}
              size={moderateScale(20)}
              color={COLORS.primary}
              onPress={() => pointsTo.navigate(navigationstrings.PROFILE)}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const HomeDashboard = () => {
  return (
    <Stack.Navigator
      initialRouteName={navigationstrings.RAZORPAY}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={navigationstrings.HOME} component={Home} />
      <Stack.Screen
        name={navigationstrings.NOTIFICATION}
        component={Notification}
      />
      <Stack.Screen
        name={navigationstrings.GETREQUEST}
        component={GetRequest}
      />
      <Stack.Screen
        name={navigationstrings.POSTREQUEST}
        component={PostRequest}
      />
      <Stack.Screen
        name={navigationstrings.JSONPLACEHOLDER}
        component={JsonPlaceHolder}
      />
      <Stack.Screen name={navigationstrings.RAZORPAY} component={RazarPay} />
    </Stack.Navigator>
  );
};

const ExploreMenu = () => {
  return (
    <Stack.Navigator
      initialRouteName={navigationstrings.USEREDUCERHOOK}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={navigationstrings.EXPLORE} component={Explore} />
      <Stack.Screen
        name={navigationstrings.USEREDUCERHOOK}
        component={UseReducerHook}
      />
      <Stack.Screen
        name={navigationstrings.USEREFHOOK}
        component={UseRefHook}
      />
      <Stack.Screen
        name={navigationstrings.USECONTEXT}
        component={UseContextHook}
      />
    </Stack.Navigator>
  );
};
