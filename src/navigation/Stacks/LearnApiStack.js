import {
  GetMyAccount,
  GetRequest,
  MultiImageUpload,
  UpdateProfile,
} from '../../screens';
import navigationstrings from '../navigationstrings';

export default function (Stack) {
  return (
    <>
      {/* JSON-Server */}
      <Stack.Screen
        name={navigationstrings.GETREQUEST}
        component={GetRequest}
      />
      {/* Swagger API */}
      <Stack.Screen
        name={navigationstrings.GETMYACCOUNT}
        component={GetMyAccount}
      />
      <Stack.Screen
        name={navigationstrings.UPDATEPROFILE}
        component={UpdateProfile}
      />
      <Stack.Screen
        name={navigationstrings.MULTIMAGEUPLOAD}
        component={MultiImageUpload}
      />
    </>
  );
}
