import React from 'react';
import {Text, View} from 'react-native';
import Svg, {Ellipse, LinearGradient, Stop} from 'react-native-svg';
import Card from '../components/CardComponent';
import styles from './styles/dashboardComponentStyels'
const DashboardComponent = ({
  name,
  background,
  iconx,
  text,
  mini,
  currency,
  subtitle,
  colors,
  logo,
}) => {
  return (
    <Svg width={'100%'} height={270}>
      <Svg style={{overflow: 'hidden'}} width={'100%'} height={270}>
        <Ellipse
          cx="50%"
          cy="100%"
          rx="65%"
          ry="100%"
          fill={
            name === 'Ethereum' ||
            name === 'App Store & iTunes Gift Card' ||
            name === 'Google Play Gift Card'
              ? 'url(#gradient)'
              : 'url(#gradient2)'
          }
        />

        <Card
          background={background}
          logo={logo}
          icon={iconx}
          text={text}
          mini={mini}
        />

        <LinearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
          <Stop offset="0" stopColor={colors[0]} stopOpacity="1" />
          <Stop offset="0.8" stopColor={colors[1]} stopOpacity="1" />
        </LinearGradient>
        <LinearGradient id="gradient2" x1="0.5" y1="1" x2="0.5" y2="0">
          <Stop offset="0.4" stopColor={colors[1]} stopOpacity="1" />
          <Stop offset="1" stopColor={colors[0]} stopOpacity="1" />
        </LinearGradient>
        <View
          style={styles.subtitleView}>
          <Text
            style={styles.currencyText}>
            {currency}
            <Text
              style={styles.subtitleText}>
              {subtitle}
            </Text>
          </Text>
        </View>
      </Svg>
    </Svg>
  );
};

export default DashboardComponent;
