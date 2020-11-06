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
      <Stack.Screen name="Login" component={Login} options={{title: ''}} />
      <Stack.Screen name="SignUp" component={SignUp} options={{title: ''}} />
      <Stack.Screen
        name="ForgotPass"
        component={ForgotPass}
        options={{title: ''}}
      />
      <Stack.Screen
        name="ResetPass"
        component={ResetPass}
        options={{title: ''}}
      />
    </Stack.Navigator>
  );
};

export default BagStack;
