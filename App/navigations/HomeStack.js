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
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          title: 'Notification',
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
        name="Product"
        component={Product}
        options={{
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
        name="Review"
        component={Review}
        options={{
          title: 'Rating and reviews',
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

export default HomeStack;
