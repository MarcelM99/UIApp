import React from 'react';
import {View, Text, Image} from 'react-native';
import Svg, {Circle, LinearGradient, Stop} from 'react-native-svg';
import colors from '../../theme/colors';
import grad from '../ColorEaseing';

const CircleComponent = ({radius, img, text, number}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Svg height={radius * 2} width={radius * 2}>
        <Circle cx="50%" cy="50%" r={radius} fill="url(#grad)" />
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: radius * 2,
          }}>
          <Image resizeMode="contain" style={{flex: 0.5}} source={img} />
          <Text style={{fontSize: 10, color: colors.bridal_heath}}>{text}</Text>
          <Text style={{fontSize: 16, color: colors.bridal_heath}}>{number}</Text>
        </View>
        <LinearGradient id="grad" x1="0.5" y1="0" x2="0.5" y2="1">
          <Stop offset="0" stopColor={grad.grad.colors[0]} stopOpacity="1" />
          <Stop offset="1" stopColor={grad.grad.colors[14]} stopOpacity="1" />
        </LinearGradient>
      </Svg>
    </View>
  );
};

export default CircleComponent;
