import React, {useState} from 'react';
import {TouchableOpacity, View, Text, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import BackComponent from '../components/BackComponent';
import grad from '../components/ColorEaseing';
import CustomButton from '../components/CustumButton';
import ImageComponent from '../components/registration/ImageComponent';
import InputComponent from '../components/InputComponent';
import LoginMethods from '../components/registration/LoginMethods';
import images from '../theme/images';
import strings from '../theme/strings';
import styles from './styles/registrationScreenStyles';

const RegistrationScreen = () => {
  const [textChanged, setTextChanged] = useState();
  const navigation = useNavigation();
  const NavigateTo = screenName => navigation.navigate(screenName);
  const NavigateBack = () => navigation.goBack();
  return (
    <View style={styles.background}>
      <BackComponent text={strings.login.back} navBack={NavigateBack} />
      <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}>
        <ImageComponent img={images.boy} text={strings.login.subtitle} />
        <InputComponent
          img={images.group}
          placeHolder={strings.login.email}
          textChange={setTextChanged}
        />
        <InputComponent
          img={images.group2}
          placeHolder={strings.login.password}
          value={textChanged}
          textChange={setTextChanged}
        />
        <View style={styles.resetPasswordView}>
          <TouchableOpacity onPress={() => NavigateTo('RecoverPass')}>
            <Text style={styles.resetPasswordText}>
              {strings.login.resetPasswordButton}
            </Text>
          </TouchableOpacity>
        </View>
        <CustomButton
          text={strings.login.login}
          navTo={NavigateTo}
          screenName="NavigationBar"
        />
        <LoginMethods text={strings.login.socialMediatext} />
      </ScrollView>
      <TouchableOpacity onPress={() => NavigateTo('SignUp')}>
        <LinearGradient
          style={styles.registerButton}
          colors={grad.grad.colors}
          locations={grad.grad.locations}
          start={{x: 0.5, y: 0}}
          end={{x: 0.5, y: 1}}>
          <Text style={styles.registerButtonFirstText}>
            {strings.login.registerFirstText}
          </Text>
          <Text style={styles.registerButtonSecondText}>
            {strings.login.registerSecondText}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default RegistrationScreen;
