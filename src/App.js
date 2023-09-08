import React from 'react';
import Routes from './navigation/Routes';
import {SafeAreaView} from 'react-native';

export default function App() {
  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <Routes />
      </SafeAreaView>
    </>
  );
}
