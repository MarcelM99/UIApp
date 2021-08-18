import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  BackHandler,
  ScrollView,
} from 'react-native';
import {LinearTextGradient} from 'react-native-text-gradient';
import {useNavigation} from '@react-navigation/native';
import BackComponent from '../components/BackComponent';
import CircularProgress from '../components/proggresBars/CircularProgress';
import grad from '../components/ColorEaseing';
import SimpleButton from '../components/SimpleButton';
import images from '../theme/images';
import styles from './styles/navigatioonScreenStyles';
import strings from '../theme/strings';

const _buttons = [
  {
    name: strings.navigationScreen.button1,
    active: true,
  },
  {
    name: strings.navigationScreen.button2,
    active: false,
  },
  {
    name: strings.navigationScreen.button3,
    active: false,
  },
  {
    name: strings.navigationScreen.button4,
    active: false,
  },
  {
    name: strings.navigationScreen.button5,
    active: false,
  },
];
const NavigationScreen = () => {
  const navigation = useNavigation();
  const NavigateTo = screenName => navigation.navigate(screenName);
  const NavigateBack = () => navigation.goBack();
  return (
    <View style={styles.background}>
      <BackComponent
        text={strings.navigationScreen.back}
        navBack={NavigateBack}
      />
      <View style={styles.buttonsView}>
        <CircularProgress
          value={70}
          activeStrokeWidth={5}
          inActiveStrokeWidth={4}
          radius={50}
          activeStrokeColor="url(#grad)"
          inActiveStrokeColor="pink"
          inActiveStrokeOpacity={0.2}
        />
        <LinearTextGradient
          colors={grad.grad.colors}
          locations={grad.grad.locations}
          start={{x: 0.5, y: 0}}
          end={{x: 0.5, y: 1}}>
          <Text style={styles.name}>{strings.navigationScreen.title}</Text>
        </LinearTextGradient>
        <View style={styles.imageView}>
          <Image style={styles.image} source={images.vector} />
          <Text>{strings.navigationScreen.value}</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.buttons}>
          {_buttons.map((x, index) => (
            <SimpleButton
              key={index}
              name={x.name}
              active={x.active}
              navTo={NavigateTo}
              screenName="BottomNav"
            />
          ))}
          <TouchableOpacity onPress={() => BackHandler.exitApp()}>
            <Image style={styles.shutdownImg} source={images.shutdown} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default NavigationScreen;
