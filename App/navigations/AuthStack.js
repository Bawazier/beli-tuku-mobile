import React from 'react';

import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import ForgotPass from '../screens/ForgotPass';
import ResetPass from '../screens/ResetPass';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const BagStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPass" component={ForgotPass} />
      <Stack.Screen name="ResetPass" component={ResetPass} />
    </Stack.Navigator>
  );
};

export default BagStack;
