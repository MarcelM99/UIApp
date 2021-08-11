import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import BackComponent from '../components/BackComponent';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import grad from '../components/ColorEaseing';
import CircularProgress from '../components/CircularProgress';
import images from '../theme/images';
import SettingsInformation from '../components/SettingsInformation';
import strings from '../theme/strings';

const SettingsScreen = () => {
  const navigation = useNavigation();
  const navigateBack = () => navigation.goBack();
  const [accountInfo, setAccountInfo] = useState({
    firstName: strings.settings.firstName,
    lastName: strings.settings.lastName,
    phoneNumber: strings.settings.phoneNumber,
  });
  return (
    <View style={{flex: 1, backgroundColor: '#FFFBF7'}}>
      <BackComponent text="Back" navBack={navigateBack} />
      <View style={{marginTop: 28, marginLeft: 28}}>
        <Text style={{color: '#626262', fontSize: 16}}>{strings.settings.title}</Text>
      </View>
      <LinearGradient
        style={{
          alignItems: 'center',
          paddingVertical: 38,
          marginTop: 20,
          marginBottom: 38,
        }}
        colors={grad.grad.colors}
        locations={grad.grad.locations}
        start={{x: 0.5, y: 0}}
        end={{x: 0.5, y: 1}}>
        <CircularProgress
          value={50}
          activeStrokeWidth={8}
          inActiveStrokeWidth={6}
          radius={65}
          image={images.profile_camera}
          inActiveStrokeColor="#FFFBF7"
          inActiveStrokeOpacity={0.5}
          activeStrokeColor="#FFFBF7"
        />
      </LinearGradient>
      <SettingsInformation
        title="Account Information"
        inputOne="First Name"
        inputTwo="Last Name"
        inputThree="Phone Number"
        placeHolderOne={accountInfo.firstName}
        placeHolderTwo={accountInfo.lastName}
        placeHolderThree={accountInfo.phoneNumber}
        setOne={setAccountInfo}
        setTwo={setAccountInfo}
        setThree={setAccountInfo}
        accountInfo={accountInfo}
      />
    </View>
  );
};

export default SettingsScreen;
