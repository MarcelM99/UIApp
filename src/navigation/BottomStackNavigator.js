import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import InnerNavigator from './InnerNavigator';
import ChatNavigator from './ChatNavigator';
import TranzactionScreen from '../screens/TranzactionScreen';
import ProfileScreen from '../screens/ProfileScreen';
import images from '../theme/images';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tab.Screen
        name="DashBoard"
        component={InnerNavigator}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={images.dashboard_activ} />
            ) : (
              <Image source={images.dashboard} />
            ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Chat"
        component={ChatNavigator}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={images.chat_activ} />
            ) : (
              <Image source={images.chat} />
            ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Tranzactions"
        component={TranzactionScreen}
        options={{
          tabBarLabel: 'Tranzactions',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={images.tranzactions_activ} />
            ) : (
              <Image source={images.tranzactions} />
            ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Settings"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image source={images.settings_activ} />
            ) : (
              <Image source={images.settings} />
            ),
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
