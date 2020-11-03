import React from 'react';

import Cart from '../screens/Cart';
import Checkout from '../screens/Checkout';
import ShippingAddress from '../screens/ShippingAddress';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const BagStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="ShippingAddress" component={ShippingAddress} />
    </Stack.Navigator>
  );
};

export default BagStack;
