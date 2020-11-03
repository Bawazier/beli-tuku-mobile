import React from 'react';

import ShippingAddress from '../screens/ShippingAddress';
import Profile from '../screens/Profile';
import Orders from '../screens/Orders';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const BagStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="ShippingAddress" component={ShippingAddress} />
    </Stack.Navigator>
  );
};

export default BagStack;
