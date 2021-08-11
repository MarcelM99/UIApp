import React, {useRef, useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Boarding from '../components/BoardingComponent';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import images from '../theme/images';
import strings from '../theme/strings';
import {widthPixel} from '../components/NormalizeComp';
import colors from '../theme/colors';
import styles from './styles/onBoardingStyles';
import { useNavigation } from "@react-navigation/native";
const data = [
  {
    item: 1,
    image: images.image1,
    title: strings.onboarding.title1,
    subtitle: strings.onboarding.subTitle1,
  },
  {
    item: 2,
    image: images.image2,
    title: strings.onboarding.title2,
    subtitle: strings.onboarding.subTitle2,
  },
  {
    item: 3,
    image: images.image3,
    title: strings.onboarding.title3,
    subtitle: strings.onboarding.subTitle3,
  },
];
const OnBoarding5 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  let ref2 = useRef(null);
  const navigation = useNavigation();
  const NavigateTo = (screenName) => navigation.navigate(screenName) 
  const renderItem = item => {
    return <Boarding item={item} ref3={getToIndex} navTo={NavigateTo} screenName='SignIn'></Boarding>;
  };
  const getToIndex = i => ref2._snapToItem(ref2._getPositionIndex(i));
  return (
    <View style={styles.background}>
      <Carousel
      contentContainerStyle={styles.background}
        ref={ref => (ref2 = ref)}
        data={data}
        renderItem={renderItem}
        sliderWidth={widthPixel(400)}
        itemWidth={widthPixel(380)}
        onSnapToItem={index => setActiveIndex(index)}></Carousel>
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeIndex}
        inactiveDotOpacity={1}
        inactiveDotScale={1}
        renderDots={activeIndex =>
          data.map((screen, i) => {
            return (
              <TouchableOpacity
                style={styles.dotStyle}
                key={i}
                onPress={() => {
                  ref2._snapToItem(ref2._getPositionIndex(i));
                }}>
                {activeIndex !== i ? (
                  <LinearGradient
                    style={styles.inactiveDot}
                    colors={[colors.tickle_pink, colors.persian_blue]}
                    locations={[0.5, 1]}
                    start={{x: 0, y: 0}}
                    end={{x: 0, y: 1}}></LinearGradient>
                ) : (
                  <LinearGradient
                    style={styles.activeDot}
                    locations={[0.5, 1]}
                    colors={[colors.tickle_pink, colors.persian_blue]}
                    start={{x: 0, y: 0}}
                    end={{x: 0, y: 1}}>
                    <View style={styles.activeDotMiddle}></View>
                  </LinearGradient>
                )}
              </TouchableOpacity>
            );
          })
        }
      />
    </View>
  );
};

export default OnBoarding5;
