import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import MainStackNavigator from './src/navigation/StackNavigator';
const App = () => {
  useEffect(() => {
    setTimeout(() =>{
      SplashScreen.hide();
    },500)
    
  }, []);
  return <MainStackNavigator />;
};

export default App;
