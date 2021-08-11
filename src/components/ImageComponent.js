import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles/imageComponentStyles';
const ImageComponent = ({img, text}) => {
  return (
    <View style={styles.backgroundImage}>
      <Image source={img} />
      <Text style={styles.subTitle}>{text}</Text>
    </View>
  );
};
export default ImageComponent;
