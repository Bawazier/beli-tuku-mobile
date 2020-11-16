import React from 'react';

import Categories from '../screens/Categories';
import Catalog from '../screens/Catalog';
import Search from '../screens/Search';
import Icon from 'react-native-vector-icons/FontAwesome';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const ShopStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{
          title: 'Categories',
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
        name="Catalog"
        component={Catalog}
        options={{
          title: 'Catalog',
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
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ShopStack;
