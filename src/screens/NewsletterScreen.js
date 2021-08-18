import React, {useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {LinearTextGradient} from 'react-native-text-gradient';
import BackComponent from '../components/BackComponent';
import grad from '../components/ColorEaseing';
import CustomButton from '../components/CustumButton';
import InputComponent from '../components/InputComponent';
import images from '../theme/images';
import strings from '../theme/strings';
import styles from './styles/newsletterScreenStyles';

const NewsletterScreen = () => {
  const [text, setText] = useState();
  const navigation = useNavigation();
  const NavigateTo = screenName => navigation.navigate(screenName);
  const NavigateBack = () => navigation.goBack();
  return (
    <View style={styles.background}>
      <BackComponent text={strings.login.back} navBack={NavigateBack} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageView}>
          <Image source={images.newsletter} />
        </View>
        <View style={styles.gradientView}>
          <LinearTextGradient
            colors={grad.grad.colors}
            locations={grad.grad.locations}
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}>
            <Text style={styles.gradientText}>{strings.newsletter.title}</Text>
          </LinearTextGradient>
        </View>
        <InputComponent
          img={images.group}
          placeHolder={strings.newsletter.buttonPlaceHolder}
          textChange={setText}
        />
        <View style={styles.bottomTextView}>
          <Text style={styles.bottomText}>{strings.newsletter.bottomText}</Text>
        </View>
        <CustomButton
          text={strings.newsletter.customButton}
          navTo={NavigateTo}
          screenName="SignIn"
        />
      </ScrollView>
    </View>
  );
};

export default NewsletterScreen;
