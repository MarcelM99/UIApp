import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import BackComponent from '../components/BackComponent';
import grad from '../components/ColorEaseing';
import CircularProgress from '../components/proggresBars/CircularProgress';
import SettingsInformation from '../components/settings/SettingsInformation';
import CustomButton from '../components/CustumButton';
import SwitchButton from '../components/settings/SwitchButton';
import styles from './styles/settingsScreenStyles';
import colors from '../theme/colors';
import images from '../theme/images';
import strings from '../theme/strings';

const SettingsScreen = () => {
  const navigation = useNavigation();
  const navigateBack = () => navigation.goBack();
  const [accountInfo, setAccountInfo] = useState({
    firstName: strings.settings.firstName,
    lastName: strings.settings.lastName,
    phoneNumber: strings.settings.phoneNumber,
  });
  const [password, setPassword] = useState({
    password: strings.settings.hiddenChar,
    newPassword: strings.settings.hiddenChar,
    retryPassword: strings.settings.hiddenChar,
  });
  const [enable, setEnable] = useState({
    name: false,
    cardNumber: false,
  });
  const [activeSwitch, setActiveSwitch] = useState(1);
  return (
    <View style={styles.background}>
      <BackComponent
        text={strings.settings.backButton}
        navBack={navigateBack}
      />
      <ScrollView>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>{strings.settings.title}</Text>
        </View>
        <LinearGradient
          style={styles.topGradient}
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
            inActiveStrokeColor={colors.bridal_heath}
            inActiveStrokeOpacity={0.5}
            activeStrokeColor={colors.bridal_heath}
          />
        </LinearGradient>
        <SettingsInformation
          title={strings.settings.titleForAccount}
          inputOne={strings.settings.inputAccountOne}
          inputTwo={strings.settings.inputAccountTwo}
          inputThree={strings.settings.inputAccountThree}
          placeHolderOne={accountInfo.firstName}
          placeHolderTwo={accountInfo.lastName}
          placeHolderThree={accountInfo.phoneNumber}
          setDatas={setAccountInfo}
        />
        <SettingsInformation
          title={strings.settings.titleForPassword}
          inputOne={strings.settings.inputPasswordOne}
          inputTwo={strings.settings.inputPasswordTwo}
          inputThree={strings.settings.inputPasswordThree}
          placeHolderOne={strings.settings.hiddenChar}
          placeHolderTwo={strings.settings.hiddenChar}
          placeHolderThree={strings.settings.hiddenChar}
          setDatas={setPassword}
          datas={password}
        />
        <View style={styles.billingView}>
          <Text style={styles.billingTitleText}>
            {strings.settings.billingTitle}
          </Text>
          <LinearGradient
            style={styles.billingGradient}
            colors={grad.grad.colors}
            locations={grad.grad.locations}
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}>
            <View style={styles.billingGradientInnerView}>
              <TouchableOpacity
                onPress={() =>
                  setEnable(prevstate => ({
                    ...prevstate,
                    name: true,
                    cardNumber: true,
                  }))
                }>
                <Text style={styles.billingButton}>
                  {strings.settings.billingEdit}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.detailsView}>
              <TextInput
                onEndEditing={() =>
                  setEnable(prevstate => ({...prevstate, name: false}))
                }
                editable={enable.name}
                style={styles.nameInputText}
                placeholderTextColor={colors.bridal_heath}
                placeholder={strings.settings.defaultName}
              />
              <TextInput
                onEndEditing={() =>
                  setEnable(prevstate => ({...prevstate, cardNumber: false}))
                }
                editable={enable.cardNumber}
                style={styles.cardInputText}
                placeholderTextColor={colors.bridal_heath}
                placeholder={strings.settings.defaultCard}
              />
              <Text style={styles.cardTypeText}>
                {strings.settings.cardType}
              </Text>
            </View>
          </LinearGradient>
        </View>
        <View style={styles.accountSettingsView}>
          <Text style={styles.accountSettingsTitleText}>
            {strings.settings.accountSettingsTitle}
          </Text>
          <View style={styles.notificationsView}>
            <Text style={styles.notificationsText}>
              {strings.settings.pushText}
            </Text>
            <View style={styles.notificationsButtonView}>
              <SwitchButton
                switchSpeedChange={100}
                activeSwitch={activeSwitch}
                switchHeight={18}
                switchWidth={35}
                onValueChange={val => setActiveSwitch(val)}
              />
            </View>
          </View>
          <View style={styles.emailView}>
            <Text style={styles.emailText}>{strings.settings.emailText}</Text>
            <View style={styles.emailButton}>
              <SwitchButton
                switchSpeedChange={100}
                activeSwitch={activeSwitch}
                switchHeight={18}
                switchWidth={35}
                onValueChange={val => setActiveSwitch(val)}
              />
            </View>
          </View>
        </View>
        <CustomButton text={strings.settings.customButtonText} />
      </ScrollView>
    </View>
  );
};

export default SettingsScreen;
