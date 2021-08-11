import React from 'react';
import {View, Image, TextInput} from 'react-native';
import styles from './styles/inputComponentStyles';
import colors from '../theme/colors';
const InputComponent = ({img, placeHolder, textChange}) => {
  return (
    <View style={styles.inputView}>
      <TextInput
        style={styles.input}
        onChangeText={text => textChange(text)}
        placeholder={placeHolder}
        placeholderTextColor={colors.mine_shaft}></TextInput>
      <Image style={styles.inputImage} source={img} />
    </View>
  );
};

export default InputComponent;
