import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {LinearTextGradient} from 'react-native-text-gradient';
import LinearGradient from 'react-native-linear-gradient';
import strings from '../../theme/strings';
import styles from '../../screens/styles/onBoardingStyles';
import grad from '../ColorEaseing'

const Boarding = ({item,navTo,screenName}) => {
  return (
    <View key={item.item.item} >
      {item.item.item !== 3 ? (
        <TouchableOpacity
          onPress={() => navTo(screenName)}
          style={styles.skipButton}>
          <Text
            style={styles.skipButtonText}>
           {strings.onboarding.skip}
          </Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.blankSpace}></View>
      )}
      <View
        style={styles.imageView}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={item.item.image}
        />
      </View>
      <LinearTextGradient
        style={styles.titleGradient}
        colors={grad.grad.colors}
        start={{x: 0.5, y: 0}}
        locations={grad.grad.locations}
        end={{x: 0.5, y: 1}}>
        <Text>{item.item.title}</Text>
      </LinearTextGradient>
      <Text
        style={styles.titleText}>
        {item.item.subtitle}
      </Text>
      {item.item.item === 3 ? (
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navTo(screenName)}>
          <LinearGradient
            style={styles.continueGradient}
            colors={grad.grad.colors}
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}
            locations={grad.grad.locations}>
            <Text
              style={styles.continueText}>
              {strings.onboarding.continueButton}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Boarding;
