import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import OnBoarding5 from '../screens/Onboarding5';
import SignUpScreen from '../screens/SignUpScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import RecoverPasswordScreen from '../screens/RecoverPasswordScreen';
import NewsletterScreen from '../screens/NewsletterScreen';
import NavigationScreen from '../screens/NavigationScreen';
import BottomTabNavigator from './BottomStackNavigator';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'OnBoarding'}
        screenOptions={{headerMode: false}}>
        <Stack.Screen name="OnBoarding" component={OnBoarding5} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SignIn" component={RegistrationScreen} />
        <Stack.Screen name="RecoverPass" component={RecoverPasswordScreen} />
        <Stack.Screen name="Newsletter" component={NewsletterScreen} />
        <Stack.Screen name="NavigationBar" component={NavigationScreen} />
        <Stack.Screen name="BottomNav" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
