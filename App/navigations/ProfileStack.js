import React from 'react';

import ShippingAddress from '../screens/ShippingAddress';
import ChangeAddress from '../screens/ShippingAddress/ChangeAddress';
import AddingAddress from '../screens/ShippingAddress/AddingAddress';
import Profile from '../screens/Profile';
import Orders from '../screens/Orders';
import Setting from '../screens/Setting';
import Icon from 'react-native-vector-icons/FontAwesome';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const BagStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#075E54',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            lineHeight: 40,
          },
          headerRight: () => <Icon name="search" />,
        }}
      />
      <Stack.Screen
        name="Orders"
        component={Orders}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#075E54',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            lineHeight: 40,
          },
          headerRight: () => <Icon name="search" />,
        }}
      />
      <Stack.Screen
        name="ShippingAddress"
        component={ShippingAddress}
        options={{
          title: 'Shipping Address',
          headerStyle: {
            backgroundColor: '#075E54',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            lineHeight: 40,
          },
        }}
      />
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#075E54',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            lineHeight: 40,
          },
          headerRight: () => <Icon name="search" />,
        }}
      />
      <Stack.Screen
        name="ChangeAddress"
        component={ChangeAddress}
        options={{
          title: 'Change Address',
          headerStyle: {
            backgroundColor: '#075E54',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            lineHeight: 40,
          },
        }}
      />
      <Stack.Screen
        name="AddingAddress"
        component={AddingAddress}
        options={{
          title: 'Adding Address',
          headerStyle: {
            backgroundColor: '#075E54',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            lineHeight: 40,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default BagStack;
