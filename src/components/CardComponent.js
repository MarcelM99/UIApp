import React from 'react';
import {ImageBackground, Image, View, TouchableOpacity} from 'react-native';
import styles from './styles/cardComponentStyles'
const Card = ({
  background,
  logo,
  icon,
  text,
  mini,
  navTo,
  screenName,
  name,
  colors,
  currency,
  subtitle,
  multipleOptions
}) => {
  console.log('card', icon);
  return (
    <ImageBackground
      resizeMode="contain"
      style={styles.imageBackground}
      source={background}>
      <TouchableOpacity
        onPress={() =>
          navTo(screenName, background, logo, text, mini, icon, name, colors, currency, subtitle,multipleOptions)
        }
        style={styles.button}>
        <View style={styles.imageView}>
          <Image source={icon} />
        </View>
        <View
          style={styles.logoView}>
          <Image source={logo} />
          {text !== undefined ? (
            <View style={styles.textView}>
              <Image style={styles.image} source={text} />
              <Image source={mini} />
            </View>
          ) : null}
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Card;
