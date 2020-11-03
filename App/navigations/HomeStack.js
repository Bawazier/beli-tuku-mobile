import React from 'react';

import Home from '../screens/Home';
import Notification from '../screens/Notification';
import Product from '../screens/Product';
import Review from '../screens/Review';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Review" component={Review} />
    </Stack.Navigator>
  );
};

export default HomeStack;
