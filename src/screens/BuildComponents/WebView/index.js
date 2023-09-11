import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';

export default function ShowWebView() {
  return (
    <>
      <WebView
        source={{uri: 'https://deepakgsbv7186-netflix-clone.netlify.app/'}}
      />
      {/* <View style={styles.container}>
      <TouchableOpacity
        onPress={() => Linking.openURL('https://www.google.com/')}
        style={[styles.palatte, styles.btn]}>
        <Text style={[styles.titleText, {marginVertical: 0, color: '#ffffff'}]}>
          Open World
        </Text>
      </TouchableOpacity>
    </View> */}
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
    paddingHorizontal: 16,
    justifyContent: 'center',
    // alignItems: 'center',
  },
});
