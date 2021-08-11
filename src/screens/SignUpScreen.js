import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import BackComponent from '../components/BackComponent';
import ImageComponent from '../components/ImageComponent';
import strings from '../theme/strings';
import images from '../theme/images';
import InputComponent from '../components/InputComponent';
import ProcentBar from '../components/ProcentBar';
import CustomButton from '../components/CustumButton';
import LoginMethods from '../components/LoginMethods';
import colors from '../theme/colors';
import styles from './styles/signUpScreenStyles';
import { useNavigation } from "@react-navigation/native";
const _inputFields = [
  {
    img: images.name,
    placeHolder: strings.register.fullname,
  },
  {
    img: images.group,
    placeHolder: strings.register.email,
  },
  {
    img: images.group2,
    placeHolder: strings.register.password,
  },
  {
    img: images.group2,
    placeHolder: strings.register.cpassword,
  },
];

const SignUpScreen = () => {
  const [text, setText] = useState();
  const navigation = useNavigation();
  const NavigateTo = (screnName) => navigation.navigate(screnName)
  const NavigateBack = () => navigation.goBack();
  return (
    <View style={styles.background}>
      <BackComponent text={strings.login.back} navBack={NavigateBack} />
      <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}>
        <ImageComponent img={images.boy} text={strings.register.subtitle} />
        {_inputFields.map((x, index) => (
          <InputComponent
            key={index}
            img={x.img}
            placeHolder={x.placeHolder}
            textChange={setText}
          />
        ))}
        <ProcentBar
          height={6}
          completedColor={colors.tickle_pink}
          percentage={'100%'}></ProcentBar>
        <View style={styles.barLevelsView}>
          <View style={styles.emptyBarView}>
            <Text style={styles.barText}>{strings.register.emptyBar}</Text>
          </View>
          <View style={styles.mediumBarView}>
            <Text style={styles.barText}>{strings.register.mediumBar}</Text>
          </View>
          <View style={styles.fullBarView}>
            <Text style={styles.barText}>{strings.register.fullBar}</Text>
          </View>
        </View>
        <CustomButton text={strings.register.buttonText} navTo={NavigateTo} screenName='NavigationBar'/>
        <View style={styles.bottomViewText}>
          <Text style={styles.bottomText}>{strings.register.bottomText}</Text>
        </View>
        <LoginMethods text={strings.register.loginMethodTexts} />
      </ScrollView>
    </View>
  );
};

export default SignUpScreen;
