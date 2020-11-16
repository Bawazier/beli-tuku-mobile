import React from 'react';

import Categories from '../screens/Categories';
import Catalog from '../screens/Catalog';
import Search from '../screens/Search';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Item, Input} from 'native-base';

import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

const Stack = createStackNavigator();
const ShopStack = () => {
  const navigation = useNavigation();
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
          headerRight: () => (
            <Icon
              name="search"
              size={20}
              color="#fff"
              onPress={() => navigation.navigate('Search')}
            />
          ),
          headerRightContainerStyle: {marginHorizontal: 15},
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
          headerRight: () => (
            <Icon
              name="search"
              size={20}
              color="#fff"
              onPress={() => navigation.navigate('Search')}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerTitle: () => (
            <Item
              searchBar
              rounded
              color="#222222"
              style={{backgroundColor: '#fff', paddingHorizontal: 10}}>
              <Icon
                name="search"
                size={20}
                onPress={() => navigation.navigate('Search')}
              />
              <Input placeholder="Search" />
            </Item>
          ),
          headerTitleContainerStyle: {marginHorizontal: -10},
          headerStyle: {
            backgroundColor: '#075E54',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            lineHeight: 40,
            paddingVertical: 20,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default ShopStack;
