import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import images from '../theme/images';
import {LinearTextGradient} from 'react-native-text-gradient';
import grad from '../components/ColorEaseing';
import styles from './styles/backComponentStyles';
import CircularProgress from './CircularProgress';
const BackComponent = ({text, navBack, showCircle}) => {
  return (
    <View style={styles.background}>
      <TouchableOpacity onPress={() => navBack()} style={styles.backButton}>
        <Image source={images.backIcon}></Image>
        <LinearTextGradient
          style={{marginLeft: 10}}
          colors={grad.grad.colors}
          locations={grad.grad.locations}
          start={{x: 0.5, y: 0}}
          end={{x: 0.5, y: 1}}>
          <Text style={styles.backButtonText}>{text}</Text>
        </LinearTextGradient>
      </TouchableOpacity>
      {showCircle ? (
        <View style={styles.circleView}>
          <CircularProgress
            value={30}
            activeStrokeWidth={5}
            inActiveStrokeWidth={4}
            radius={30}
            activeStrokeColor='url(#grad)'
            inActiveStrokeColor="pink"
            inActiveStrokeOpacity={0.2}
          />
        </View>
      ) : null}
    </View>
  );
};

export default BackComponent;
