import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import OnBoarding5 from "../screens/Onboarding5";
import SignUpScreen from "../screens/SignUpScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import RecoverPasswordScreen from "../screens/RecoverPasswordScreen";
import NewsletterScreen from "../screens/NewsletterScreen";
import NavigationScreen from "../screens/NavigationScreen";
import BottomTabNavigator from './BottomStackNavigator';
const Stack = createStackNavigator();

const MainStackNavigator = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'OnBoarding'} screenOptions={{headerMode:false}}>
            <Stack.Screen name="OnBoarding" component={OnBoarding5} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="SignIn" component={RegistrationScreen} />
            <Stack.Screen name="RecoverPass" component={RecoverPasswordScreen} />
            <Stack.Screen name="Newsletter" component={NewsletterScreen} />
            <Stack.Screen name="NavigationBar" component={NavigationScreen} />
            <Stack.Screen name="ChatScreen" component={BottomTabNavigator} initialParams={{screeName:'Chat'}}/>
            <Stack.Screen name="ProfileScr" component={BottomTabNavigator} initialParams={{screeName:'ProfileScreen',secoundScreen:'Profile'}}/>
            <Stack.Screen name="TranzactionHistory" component={BottomTabNavigator} initialParams={{screeName:'Tranzactions'}}/>
            <Stack.Screen name="DashBoardScr" component={BottomTabNavigator} initialParams={{screeName:'DashBoard'}}/>
            <Stack.Screen name="SettingsScr" component={BottomTabNavigator} initialParams={{screeName:'ProfileScreen',secoundScreen:'Settings'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackNavigator;