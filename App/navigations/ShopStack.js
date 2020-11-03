import React from 'react';

import Categories from '../screens/Categories';
import Catalog from '../screens/Catalog';
import Search from '../screens/Search';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const ShopStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Catalog" component={Catalog} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};

export default ShopStack;
