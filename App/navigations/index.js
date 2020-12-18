import React from 'react';
import {useSelector} from 'react-redux';

import HomeStack from './HomeStack';
import ShopStack from './ShopStack';
import BagStack from './BagStack';
import ProfileStack from './ProfileStack';
import AuthStack from './AuthStack';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

const BottomTabs = createBottomTabNavigator();

const Navigations = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <NavigationContainer>
      {!auth.token.length ? (
        <BottomTabs.Navigator
          tabBarOptions={{
            activeTintColor: '#075E54',
            inactiveTintColor: '#9ce47c',
            tabStyle: {backgroundColor: '#fff'},
          }}>
          <BottomTabs.Screen
            name="Main"
            component={HomeStack}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color, size}) => (
                <Icon name="home" color={color} size={size} />
              ),
            }}
          />
          <BottomTabs.Screen
            name="Shop"
            component={ShopStack}
            options={{
              tabBarLabel: 'Shop',
              tabBarIcon: ({color, size}) => (
                <Icon
                  name="shopping-cart"
                  type="FontAwesome5"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <BottomTabs.Screen
            name="Bag"
            component={AuthStack}
            options={{
              tabBarVisible: false,
              tabBarLabel: 'Bag',
              tabBarIcon: ({color, size}) => (
                <Icon
                  name="shopping-bag"
                  type="FontAwesome5"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <BottomTabs.Screen
            name="Login"
            component={AuthStack}
            options={{
              tabBarVisible: false,
              tabBarLabel: 'Login',
              tabBarIcon: ({color, size}) => (
                <Icon name="sign-in-alt" color={color} size={size} />
              ),
            }}
          />
        </BottomTabs.Navigator>
      ) : (
        <BottomTabs.Navigator
          tabBarOptions={{
            activeTintColor: '#075E54',
            inactiveTintColor: '#9ce47c',
            tabStyle: {backgroundColor: '#fff'},
          }}>
          <BottomTabs.Screen
            name="Main"
            component={HomeStack}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color, size}) => (
                <Icon name="home" color={color} size={size} />
              ),
            }}
          />
          <BottomTabs.Screen
            name="Shop"
            component={ShopStack}
            options={{
              tabBarLabel: 'Shop',
              tabBarIcon: ({color, size}) => (
                <Icon
                  name="shopping-cart"
                  type="FontAwesome5"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <BottomTabs.Screen
            name="Bag"
            component={BagStack}
            options={{
              tabBarLabel: 'Bag',
              tabBarIcon: ({color, size}) => (
                <Icon
                  name="shopping-bag"
                  type="FontAwesome5"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <BottomTabs.Screen
            name="Profile"
            component={ProfileStack}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({color, size}) => (
                <Icon name="user-alt" color={color} size={size} />
              ),
            }}
          />
        </BottomTabs.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigations;
