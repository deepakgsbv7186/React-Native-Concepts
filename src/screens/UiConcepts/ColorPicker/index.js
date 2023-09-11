import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Clipboard from '@react-native-clipboard/clipboard';

export default function ColorPicker() {
  const [colors, setColors] = useState([]);
  useEffect(() => {
    colorStringGenerator();
  }, []);
  const getColorString = () =>
    Math.floor(Math.random() * 256)
      .toString(16)
      .toUpperCase()
      .padStart(2, 0);
  const colorStringGenerator = () => {
    let temp_color = [];
    for (let i = 1; i <= 10; i++) {
      const redColor = getColorString();
      const greenColor = getColorString();
      const blueColor = getColorString();
      temp_color = [...temp_color, `#${redColor}${greenColor}${blueColor}`];
    }
    setColors(temp_color);
  };

  const handleCopy = colorCode => {
    Clipboard.setString(colorCode);
    Alert.alert(colorCode);
  };
  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={colors}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => handleCopy(item)}
              style={[styles.palatte, {backgroundColor: item}]}>
              <Text style={[styles.titleText, {marginVertical: 0}]}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity
          onPress={colorStringGenerator}
          style={[styles.palatte, styles.btn]}>
          <Text
            style={[styles.titleText, {marginVertical: 0, color: '#ffffff'}]}>
            Generate New
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  palatte: {
    padding: 12,
    marginVertical: 4,
    borderRadius: 10,
  },
  titleText: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 12,
  },
  container: {
    flex: 1,
    padding: 16,
  },
});
