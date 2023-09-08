import {StyleSheet, View} from 'react-native';
import React, {createContext, useState} from 'react';
import WrapperContainer from '../../../components/WrapperContainer';
import InputUsername from './InputUsername';
import DisplayUser from './DisplayUser';

export const SimpleContext = createContext(null);
export default function UseContextHook() {
  const [inputValue, setInputValue] = useState('...');
  return (
    <WrapperContainer>
      <SimpleContext.Provider value={{inputValue, setInputValue}}>
        <DisplayUser />
        <InputUsername />
      </SimpleContext.Provider>
    </WrapperContainer>
  );
}

const styles = StyleSheet.create({});
