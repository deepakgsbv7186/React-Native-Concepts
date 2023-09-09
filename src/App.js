import React, { useEffect } from 'react';
import Routes from './navigation/Routes';
import {SafeAreaView} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  useEffect(()=>{
    SplashScreen.hide()
  },[])
  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <Routes />
      </SafeAreaView>
    </>
  );
}
