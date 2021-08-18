import React from 'react';
import {View, Text} from 'react-native';
import Svg, {LinearGradient, Stop, Rect} from 'react-native-svg';
import colors from '../theme/colors';
import styles from './styles/dashedViewStyles';

const DashedView = ({value, showErnings}) => {
  return (
    <View style={{marginHorizontal: 84, marginBottom: 10}}>
      <Svg height={78} width={'100%'}>
        <LinearGradient id="grad" x1="0.5" y1="1" x2="0.5" y2="0">
          <Stop offset="0" stopColor={colors.electric_violet} stopOpacity="1" />
          <Stop offset="0.8" stopColor={colors.tickle_pink} stopOpacity="1" />
        </LinearGradient>

        <Rect
          x="1%"
          y="22%"
          width="98%"
          height="60"
          fill="transparent"
          strokeWidth="1"
          strokeDasharray={10}
          stroke="url(#grad)"
        />
        {showErnings ? (
          <View style={styles.earningsView}>
            <Text style={styles.earningsText}>Total Earnings</Text>
          </View>
        ) : null}
        {showErnings ? (
          <Rect x="25%" y="0%" width="50%" height="40%" fill="url(#grad)" />
        ) : null}

        <View
          style={!showErnings ? styles.valueView : styles.valueViewWithErning}>
          <Text
            style={
              !showErnings ? styles.valueText : styles.valueTextWithEarnings
            }>
            {value}
          </Text>
        </View>
      </Svg>
    </View>
  );
};

export default DashedView;
