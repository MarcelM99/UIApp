import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import RegistrationScreen from './src/screens/RegistrationScreen';
import OnBoarding5 from './src/screens/Onboarding5';
import SignUpScreen from './src/screens/SignUpScreen';
import RecoverPasswordScreen from './src/screens/RecoverPasswordScreen';
import NewsletterScreen from './src/screens/NewsletterScreen';
import NavigationScreen from './src/screens/NavigationScreen';
import MainStackNavigator from './src/navigation/StackNavigator';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <MainStackNavigator />;
};

export default App;
