import {SelectCountry} from '../../screens';
import navigationstrings from '../navigationstrings';

export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationstrings.SELECTCOUNTRY}
        component={SelectCountry}
      />
    </>
  );
}
