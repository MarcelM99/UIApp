import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import DashBoardScreen from '../screens/DashboardScreen';
import DashboardOpen from '../screens/DashboardOpenScreen';
const Stack = createStackNavigator();

const InnerNavigator = () => {

    return (
        <Stack.Navigator initialRouteName={'Dashboard'} screenOptions={{headerMode:false}}>
        <Stack.Screen name="Dashboard" component={DashBoardScreen} />
        <Stack.Screen name="CardOpen" component={DashboardOpen} />
        </Stack.Navigator>
    )
}
export default InnerNavigator;