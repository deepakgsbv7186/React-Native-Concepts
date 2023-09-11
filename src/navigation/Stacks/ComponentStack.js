import {SelectCountry, ShowWebView} from '../../screens';
import navigationstrings from '../navigationstrings';

export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationstrings.SELECTCOUNTRY}
        component={SelectCountry}
      />
      <Stack.Screen
        name={navigationstrings.SHOWWEBVIEW}
        component={ShowWebView}
      />
    </>
  );
}
