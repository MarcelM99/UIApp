import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import Svg, {Rect, LinearGradient, Stop, Image} from 'react-native-svg';
import CircularProgress from '../proggresBars/CircularProgress';
import images from '../../theme/images';
import grad from '../ColorEaseing';
import styles from '../styles/chatComponentStyles';
import colors from '../../theme/colors';

const ChatComponent = ({
  photo,
  level,
  name,
  lastText,
  time,
  navTo,
  screenName,
}) => {
  return (
    <View style={styles.background}>
      <ScrollView
        style={styles.scrollView}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}>
        <View style={styles.visibleView}>
          <TouchableOpacity
            style={styles.navigationButton}
            onPress={() => navTo(screenName)}>
            <CircularProgress
              value={level}
              activeStrokeColor={colors.white}
              activeStrokeWidth={2}
              inActiveStrokeWidth={1}
              radius={21}
              inActiveStrokeColor={colors.maevelous}
              inActiveStrokeOpacity={0.2}
              showImage={true}
              image={photo}
              onlineDot={images.online_dot}
            />
            <View style={styles.textView}>
              <Text style={styles.nameText}>{name}</Text>
              <Text style={styles.lastmessageText}>{lastText}</Text>
            </View>
            <View style={styles.timeView}>
              <Text style={styles.timeText}>{time}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.deleteMessageView}>
          <TouchableOpacity>
            <Svg height="100%" width={200}>
              <Rect
                x={0}
                y={0}
                fill={'url(#grad2)'}
                width="100%"
                height="100%"
                opacity={0.7}
              />
              <Rect
                x={0}
                y={0}
                fill={'url(#grad1)'}
                width="100%"
                height="100%"
                opacity={1}
              />
              <LinearGradient id="grad1" x1="0" y1="0.5" x2="1" y2="0.5">
                <Stop offset="0" stopColor={colors.alabaster} stopOpacity="1" />
                <Stop
                  offset="1"
                  stopColor={grad.grad.colors[0]}
                  stopOpacity="0"
                />
              </LinearGradient>
              <LinearGradient id="grad2" x1="0.5" y1="0" x2="0.5" y2="1">
                <Stop
                  offset="0"
                  stopColor={grad.grad.colors[0]}
                  stopOpacity="1"
                />
                <Stop
                  offset="1"
                  stopColor={grad.grad.colors[15]}
                  stopOpacity="1"
                />
              </LinearGradient>
              <Image x="70%" y="40%" opacity="1" href={images.close} />
            </Svg>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ChatComponent;
