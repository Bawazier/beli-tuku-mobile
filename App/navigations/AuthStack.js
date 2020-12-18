import React from 'react';

import Main from '../screens/Main';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import ForgotPass from '../screens/ForgotPass';
import ResetPass from '../screens/ResetPass';

import {Button, Text, Icon} from 'native-base';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const BagStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName={'Login'}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: '',
          headerStyle: {backgroundColor: '#075E54'},
          headerTintColor: '#fff',
          headerLeft: () => (
            <Icon
              name="long-arrow-left"
              type="FontAwesome"
              style={{color: '#fff', marginHorizontal: 10}}
              onPress={() => navigation.navigate('Home')}
            />
          ),
          headerRight: () => (
            <Button transparent onPress={() => navigation.navigate('SignUp')}>
              <Text style={{color: '#2EB67D'}}>signup</Text>
            </Button>
          ),
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
