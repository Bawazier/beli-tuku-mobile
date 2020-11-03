import React, {Component} from 'react';

import HomeStack from './HomeStack';
import ShopStack from './ShopStack';
import BagStack from './BagStack';
import ProfileStack from './ProfileStack';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const BottomTabs = createBottomTabNavigator();

export class Navigations extends Component {
  render() {
    return (
      <NavigationContainer>
        <BottomTabs.Navigator>
          <BottomTabs.Screen name="Main" component={HomeStack} />
          <BottomTabs.Screen name="Shop" component={ShopStack} />
          <BottomTabs.Screen name="Bag" component={BagStack} />
          <BottomTabs.Screen name="Profile" component={ProfileStack} />
        </BottomTabs.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigations;
