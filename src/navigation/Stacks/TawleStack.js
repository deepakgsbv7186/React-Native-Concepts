import {
  EditBookingDetails,
  MyTawle,
  MyTawleLoyality,
  RateScreen,
  RedeemVouchers,
  ReservationScreen,
  SearchScreen,
  ThanksFeedBack,
} from '../../screens';
import navigationstrings from '../navigationstrings';

export default function (Stack) {
  return (
    <>
      <Stack.Screen name={navigationstrings.SEARCH} component={SearchScreen} />
      <Stack.Screen
        name={navigationstrings.REDEEMVOUCHER}
        component={RedeemVouchers}
      />
      <Stack.Screen name={navigationstrings.MYTAWLE} component={MyTawle} />
      <Stack.Screen
        name={navigationstrings.MYTAWLEROYALITY}
        component={MyTawleLoyality}
      />
      <Stack.Screen
        name={navigationstrings.RESERVATION}
        component={ReservationScreen}
      />
      <Stack.Screen name={navigationstrings.RATESTAR} component={RateScreen} />
      <Stack.Screen
        name={navigationstrings.THANKSFEEDBACK}
        component={ThanksFeedBack}
      />
      <Stack.Screen
        name={navigationstrings.EIDTBOOKINGDETAILS}
        component={EditBookingDetails}
      />
    </>
  );
}
