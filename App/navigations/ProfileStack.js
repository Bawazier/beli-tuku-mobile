import React from 'react';

import ShippingAddress from '../screens/ShippingAddress';
import ChangeAddress from '../screens/ShippingAddress/ChangeAddress';
import AddingAddress from '../screens/ShippingAddress/AddingAddress';
import Profile from '../screens/Profile';
import Orders from '../screens/Orders';
import Setting from '../screens/Setting';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const BagStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="ShippingAddress" component={ShippingAddress} />
      <Stack.Screen name="ChangeAddress" component={ChangeAddress} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="AddingAddress" component={AddingAddress} />
    </Stack.Navigator>
  );
};

export default BagStack;
