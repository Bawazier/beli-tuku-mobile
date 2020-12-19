import React from 'react';
import {useSelector} from 'react-redux';

import Home from '../screens/Home';
import Notification from '../screens/Notification';
import Product from '../screens/Product';
import Review from '../screens/Review';
import Catalog from '../screens/Catalog';
import Search from '../screens/Search';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Item, Input} from 'native-base';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const HomeStack = ({navigation}) => {
  const {dataProduct} = useSelector((state) => state.detailProduct);
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
          headerRightContainerStyle: {marginHorizontal: 15},
        }}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={{
          title: dataProduct.name || '',
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

export default HomeStack;
