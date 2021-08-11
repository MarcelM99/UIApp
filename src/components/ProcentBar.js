import React from 'react';
import {View} from 'react-native';
import styles from '../components/styles/percentageBarStyels'
 
const PercentageBar = ({
  percentage,
  height,
  completedColor,
}) => {
 
  return (
    <View style={styles(percentage,height,completedColor).background}>
      <View style={styles(percentage,height,completedColor).activeView}></View>
      <View style={styles(percentage,height,completedColor).inactiveView}>
      </View>
    </View>
  );
};

export default PercentageBar;