import React from 'react';

import ShippingAddress from '../screens/ShippingAddress';
import ChangeAddress from '../screens/ShippingAddress/ChangeAddress';
import AddingAddress from '../screens/ShippingAddress/AddingAddress';
import Profile from '../screens/Profile';
import Orders from '../screens/Orders';
import Setting from '../screens/Setting';

import {createStackNavigator} from '@react-navigation/stack';

import {Icon, Button} from 'native-base';

const Stack = createStackNavigator();
const BagStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: '',
          headerRight: () => (
            <Button transparent>
              <Icon name="search" type="FontAwesome" />
            </Button>
          ),
        }}
      />
      <Stack.Screen
        name="Orders"
        component={Orders}
        options={{
          title: '',
          headerRight: () => (
            <Button transparent>
              <Icon name="search" type="FontAwesome" />
            </Button>
          ),
        }}
      />
      <Stack.Screen
        name="ShippingAddress"
        component={ShippingAddress}
        options={{title: 'Shipping Address'}}
      />
      <Stack.Screen
        name="ChangeAddress"
        component={ChangeAddress}
        options={{title: 'Change Address'}}
      />
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{
          title: '',
          headerRight: () => (
            <Button transparent>
              <Icon name="search" type="FontAwesome" />
            </Button>
          ),
        }}
      />
      <Stack.Screen
        name="AddingAddress"
        component={AddingAddress}
        options={{title: 'Adding Shipping Address'}}
      />
    </Stack.Navigator>
  );
};

export default BagStack;
