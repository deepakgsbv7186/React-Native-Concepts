import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import BottomModal from './BottomModal';

export default function ModalConcept() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <View style={{flex: 1, paddingHorizontal: 16}}>
        <Text>Modal Concept</Text>
        <TouchableOpacity
          style={{backgroundColor: '#0E21A0', padding: 12, marginVertical: 12}}
          onPress={() => setIsModalOpen(!isModalOpen)}>
          <Text style={{fontSize: 16, textAlign: 'center', color: '#ffffff'}}>
            Open Modal
          </Text>
        </TouchableOpacity>
      </View>
      <BottomModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        modalTitle={'Blur Backgound'}
      />
    </>
  );
}

const styles = StyleSheet.create({});
