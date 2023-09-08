import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RazorpayCheckout from 'react-native-razorpay';
import {RAZORPAY_KEY_SECRET, RAZORPAY_KEY_ID} from '@env';

export default function RazarPay() {
  let razorpayKeyId = RAZORPAY_KEY_ID;
  let razorpayKeySecret = RAZORPAY_KEY_SECRET;

  const amount = 100;
  const currency = 'INR';

  const handlePayment = () => {
    var options = {
      description: 'Buy BMW CAR',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: currency,
      key: razorpayKeyId,
      amount: amount * 100,
      name: 'test order',
      order_id: '', //Replace this with an order_id created using Orders API. Learn more at https://razorpay.com/docs/api/orders.
      prefill: {
        email: 'xyz@gmail.com',
        contact: '9999999999',
        name: 'User 1',
      },
      theme: {color: '#F37254'},
    };

    RazorpayCheckout.open(options)
      .then(data => {
        // handle success
        alert(`Success: ${data.razorpay_payment_id}`);
      })
      .catch(error => {
        // handle failure
        console.log(error);
        alert(`Error: ${error.code} | ${error.description}`);
      });
  };

  return (
    <View>
      <Text>App</Text>

      <Text
        onPress={handlePayment}
        style={{
          backgroundColor: 'green',
          color: 'white',
          padding: 10,
          margin: 10,
        }}>
        Pay Now
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
