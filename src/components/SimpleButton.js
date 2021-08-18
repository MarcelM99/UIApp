import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {LinearTextGradient} from 'react-native-text-gradient';
import grad from '../components/ColorEaseing';
import styles from './styles/simpleButtonStyles';

const SimpleButton = ({name, active, navTo, screenName}) => {
  return (
    <View style={styles.buttonView}>
      <TouchableOpacity onPress={() => navTo(screenName)}>
        <LinearTextGradient
          colors={
            active === true ? grad.grad.colors : grad.grad_inactive.colors
          }
          locations={grad.grad.locations}
          start={{x: 0.5, y: 0}}
          end={{x: 0.5, y: 1}}>
          <Text style={styles.buttoN}>{name}</Text>
        </LinearTextGradient>
      </TouchableOpacity>
    </View>
  );
};

export default SimpleButton;
