import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import images from '../theme/images';
import styles from './styles/backComponentStyles';
import CircularProgress from './CircularProgress';
const TopComponent = ({ navBack, showCircle , screenName}) => {
  return (
    <View style={styles.background}>
      <TouchableOpacity onPress={() => navBack(screenName)} style={styles.backButton}>
        <Image source={images.menu}></Image>
      </TouchableOpacity>
      {showCircle ? (
        <View style={styles.circleView}>
          <CircularProgress
            value={70}
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

export default TopComponent;