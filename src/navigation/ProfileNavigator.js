 import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import SettingsScreen from '../screens/SettingsScreen'
import ProfileScreen from '../screens/ProfileScreen'

const Stack = createStackNavigator();

const ProfileNavigator = (props) => {
    return (
        <Stack.Navigator initialRouteName={props.route.params===undefined?'Profile':props.route.params.screeName} screenOptions={{headerMode:false}}>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
    )
}

export default ProfileNavigator;