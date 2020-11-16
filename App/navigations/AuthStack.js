import React from 'react';

import Main from '../screens/Main';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import ForgotPass from '../screens/ForgotPass';
import ResetPass from '../screens/ResetPass';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const BagStack = () => {
  return (
    <Stack.Navigator initialRouteName={'Main'}>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: '',
          headerStyle: {backgroundColor: '#075E54'},
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: '',
          headerStyle: {backgroundColor: '#075E54'},
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="ForgotPass"
        component={ForgotPass}
        options={{
          title: '',
          headerStyle: {backgroundColor: '#075E54'},
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="ResetPass"
        component={ResetPass}
        options={{
          title: '',
          headerStyle: {backgroundColor: '#075E54'},
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  );
};

export default BagStack;
