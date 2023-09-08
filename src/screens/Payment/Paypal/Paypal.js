import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import {WebView} from 'react-native-webview';

const Paypal = () => {
  const [showGateway, setShowGateway] = useState(false);
  const [prog, setProg] = useState(false);
  const [progClr, setProgClr] = useState('#000');
  // const [amount, setAmount] = useState(10.00); // default amount
  const [amount, setAmount] = useState(1.0); // Set default amount to 1.00 USD

  function onMessage(e) {
    let data = e.nativeEvent.data;
    console.log('asjdjdals;kdlakdl;aksdl;kasl;d--->', e);
    setShowGateway(false);
    console.log('kdjsklfjkls-->', data);

    let payment = JSON.parse(data);
    if (payment.status === 'COMPLETED') {
      alert('PAYMENT MADE SUCCESSFULLY!');
    } else {
      alert('PAYMENT FAILED. PLEASE TRY AGAIN.');
    }
  }
  function handleNavigation(event) {
    console.log('handleNavigation', event);
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TouchableOpacity
          style={{backgroundColor: '#00457C', padding: 5}}
          onPress={() => {
            setAmount(20.0);
            setShowGateway(true);
          }}>
          <Text style={{color: 'white'}}>Paypal 20 Dollar</Text>
        </TouchableOpacity>
      </View>
      {showGateway ? (
        <Modal
          visible={showGateway}
          onDismiss={() => setShowGateway(false)}
          onRequestClose={() => setShowGateway(false)}
          animationType={'fade'}
          transparent>
          <View style={styles.webViewCon}>
            <View style={styles.wbHead}>
              <TouchableOpacity
                style={{padding: 13}}
                onPress={() => setShowGateway(false)}></TouchableOpacity>
              <Text
                style={{
                  flex: 1,
                  textAlign: 'center',
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#00457C',
                }}>
                PayPal Gateway
              </Text>
              <View style={{padding: 13, opacity: prog ? 1 : 0}}>
                <ActivityIndicator size={24} color={progClr} />
              </View>
            </View>
            <WebView
              // source={{ uri: `https://my-pay-web.web.app/?amount=${amount}` }}
              source={{
                // Modify the URL with dynamic values using string interpolation
                // uri: `https://my-pay-web.web.app/?amount=${amount}&orderID=${456465}`,
                uri: `https://my-pay-web.web.app/?amount=${encodeURIComponent(
                  amount,
                )}&orderID=${encodeURIComponent(456465)}`,
              }}
              style={{flex: 1}}
              onLoadStart={(data, action) => {
                console.log('fdsgdsgdfs', data);
                setProg(true);
                console.log('Loading URL with amount:', amount);
                // console.log("Loactionsasdasdasd", action);
                setProgClr('#000');
              }}
              onLoadProgress={(data, action) => {
                // console.log("Loading URL with amount:", data);
                // console.log("Loactionsasdasdasd", action);
                setProg(true);
                setProgClr('#00457C');
              }}
              onNavigationStateChange={event => handleNavigation(event)}
              onLoadEnd={() => {
                setProg(false);
              }}
              onLoad={() => {
                console.log('On load amount:', amount);
                setProg(false);
              }}
              onMessage={onMessage}
            />
          </View>
        </Modal>
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#fff',
  },
  amountInputContainer: {
    marginBottom: 20,
  },
  amountInput: {
    width: '70%',
    padding: 10,
    borderColor: '#00457C',
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
  },
  btnCon: {
    height: 45,
    width: '70%',
    elevation: 1,
    backgroundColor: '#00457C',
    borderRadius: 3,
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTxt: {
    color: '#fff',
    fontSize: 18,
  },
  webViewCon: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  wbHead: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    zIndex: 25,
    elevation: 2,
  },
});

export default Paypal;
