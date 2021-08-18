import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ChatNotifications from '../screens/ChatNotifications';
import ChatBox from '../screens/ChatBoxScreen';

const Stack = createStackNavigator();

const ChatNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'ChatNotifications'}
      screenOptions={{headerMode: false}}>
      <Stack.Screen name="ChatNotifications" component={ChatNotifications} />
      <Stack.Screen name="ChatBox" component={ChatBox} />
    </Stack.Navigator>
  );
};

export default ChatNavigator;
