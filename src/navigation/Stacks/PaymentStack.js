import {Paypal, RazarPay} from '../../screens';
import navigationstrings from '../navigationstrings';

export default function (Stack) {
  return (
    <>
      <Stack.Screen name={navigationstrings.PAYPAL} component={Paypal} />
      <Stack.Screen name={navigationstrings.RAZORPAY} component={RazarPay} />
    </>
  );
}
