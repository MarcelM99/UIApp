import React, {useEffect, useRef} from 'react';
import {View, TextInput, Animated, Image, ImageBackground} from 'react-native';
import Svg, {G, Circle, LinearGradient, Stop, Defs} from 'react-native-svg';
import PropTypes from 'prop-types';
import {dynamicStyles} from '../styles/circularProggresStyles';
import colors from '../../theme/colors';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const CircularProgress = props => {
  const {
    image,
    onlineDot,
    showImage,
    value,
    initialValue,
    radius,
    duration,
    delay,
    textColor,
    textStyle,
    fontSize,
    maxValue,
    strokeLinecap,
    onAnimationComplete,
    valuePrefix,
    valueSuffix,
    activeStrokeColor,
    activeStrokeWidth,
    inActiveStrokeColor,
    inActiveStrokeWidth,
    inActiveStrokeOpacity,
  } = props;

  const styleProps = {
    radius,
    textColor,
    fontSize,
    textStyle,
    activeStrokeColor,
  };

  const animatedValue = useRef(new Animated.Value(initialValue)).current;
  const circleRef = useRef();
  const inputRef = useRef();
  const halfCircle = radius + Math.max(activeStrokeWidth, inActiveStrokeWidth);
  const circleCircumference = 2 * Math.PI * radius;
  const animation = toValue => {
    return Animated.timing(animatedValue, {
      toValue,
      duration,
      delay,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation(value);
    animatedValue.addListener(v => {
      if (circleRef?.current) {
        const biggestValue = Math.max(initialValue, maxValue);
        const maxPerc = (100 * v.value) / biggestValue;
        const strokeDashoffset =
          circleCircumference - (circleCircumference * maxPerc) / 100;
        circleRef?.current?.setNativeProps({
          strokeDashoffset,
        });
      }
      if (inputRef?.current) {
        inputRef?.current?.setNativeProps({
          text: `${valuePrefix}${Math.round(v?.value)}${valueSuffix}`,
        });
      }
      if (value === v?.value) {
        onAnimationComplete();
      }
    });
    return () => animatedValue.removeAllListeners();
  }, [value]);

  return (
    <View>
      <Svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}>
        <G rotation={'-180'} origin={`${halfCircle}, ${halfCircle}`}>
          <Circle
            cx="50%"
            cy="50%"
            stroke={inActiveStrokeColor}
            strokeWidth={inActiveStrokeWidth}
            r={radius}
            fill={'transparent'}
            strokeOpacity={inActiveStrokeOpacity}
          />

          <AnimatedCircle
            ref={circleRef}
            cx="50%"
            cy="50%"
            stroke={
              activeStrokeColor === colors.white ? 'url(#grad)' : activeStrokeColor
            }
            strokeWidth={activeStrokeWidth}
            r={radius}
            fill={'transparent'}
            strokeDasharray={circleCircumference}
            strokeDashoffset={circleCircumference}
            strokeLinecap={strokeLinecap}
          />
          {showImage ? (
            <View style={dynamicStyles(styleProps).imageView}>
              <ImageBackground
                style={dynamicStyles(styleProps).imageBackground}
                source={image}>
                <Image source={onlineDot} />
              </ImageBackground>
            </View>
          ) : (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: radius * 2,
              }}>
              <Image source={image} />
              <Circle
                cx="50%"
                cy="50%"
                r={(60 / 100) * radius}
                fill={colors.silver}
              />
            </View>
          )}
        </G>
        <Defs>
          <LinearGradient id="grad" x1="0.5" y1="1" x2="0.5" y2="0">
            <Stop offset="0" stopColor={colors.tickle_pink} stopOpacity="1" />
            <Stop offset="0.8" stopColor={colors.electric_violet} stopOpacity="1" />
          </LinearGradient>
        </Defs>
      </Svg>
    </View>
  );
};

CircularProgress.propTypes = {
  showImage: PropTypes.bool,
  value: PropTypes.number.isRequired,
  initialValue: PropTypes.number,
  radius: PropTypes.number,
  duration: PropTypes.number,
  delay: PropTypes.number,
  textColor: PropTypes.string,
  textStyle: PropTypes.object,
  maxValue: PropTypes.number,
  fontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeLinecap: PropTypes.oneOf(['butt', 'round', 'sqaure']),
  onAnimationComplete: PropTypes.func,
  valuePrefix: PropTypes.string,
  valueSuffix: PropTypes.string,
  activeStrokeColor: PropTypes.string,
  inActiveStrokeColor: PropTypes.string,
  inActiveStrokeOpacity: PropTypes.number,
  activeStrokeWidth: PropTypes.number,
  inActiveStrokeWidth: PropTypes.number,
  showProgressValue: PropTypes.bool,
};

CircularProgress.defaultProps = {
  showImage: false,
  onlineDot: '',
  image: '',
  value: 0,
  initialValue: 0,
  radius: 60,
  duration: 500,
  delay: 0,
  maxValue: 100,
  strokeLinecap: 'round',
  onAnimationComplete: () => {},
  valuePrefix: '',
  valueSuffix: '',
  textStyle: {},
  activeStrokeColor: colors.shamrok,
  inActiveStrokeColor: 'rgba(0,0,0,0.3)',
  inActiveStrokeOpacity: 1,
  activeStrokeWidth: 10,
  inActiveStrokeWidth: 10,
  showProgressValue: true,
};

export default CircularProgress;
