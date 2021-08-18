import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CircleComponent from '../components/tranzactions/CircleComponent';
import DashedView from '../components/DashedView';
import TopComponent from '../components/TopComponent';
import TranzactionComponent from '../components/TranzactionComponent';
import strings from '../theme/strings';
import styles from './styles/tranzactionsStyles';
import images from '../theme/images';

const _tranzactions = [
  {
    name: strings.tranzactions.amazon,
    text: strings.tranzactions.amazonText,
    value: strings.tranzactions.amazonValue,
    date: strings.tranzactions.amazonDate,
    status: true,
  },
  {
    name: strings.tranzactions.steam,
    text: strings.tranzactions.steamText,
    value: strings.tranzactions.steamValue,
    date: strings.tranzactions.steamDate,
    status: false,
  },
  {
    name: strings.tranzactions.itunes,
    text: strings.tranzactions.itunesText,
    value: strings.tranzactions.itunesValue,
    date: strings.tranzactions.itunesDate,
    status: true,
  },
];
const _circles = [
  {
    radius: 42,
    img: images.aproved,
    text: strings.tranzactions.text1,
    number: strings.tranzactions.number1,
  },
  {
    radius: 42,
    img: images.dots,
    text: strings.tranzactions.text2,
    number: strings.tranzactions.number2,
  },
  {
    radius: 42,
    img: images.close2,
    text: strings.tranzactions.text3,
    number: strings.tranzactions.number3,
  },
];

const TranzactionScreen = () => {
  const navigation = useNavigation();
  const NavigateTo = screnName => navigation.navigate(screnName);
  return (
    <View style={styles.background}>
      <TopComponent
        showCircle={true}
        screenName="DashBoard"
        navBack={NavigateTo}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleView}>
          <Text style={styles.title}>{strings.tranzactions.title}</Text>
        </View>
        <View style={styles.topCircleView}>
          <CircleComponent
            radius={58}
            img={images.tranzactions_logo}
            text="Total Numbers"
            number={12}
          />
        </View>

        <View style={styles.bottomCirclesView}>
          {_circles.map((x, index) => (
            <CircleComponent
              key={index}
              radius={x.radius}
              img={x.img}
              text={x.text}
              number={x.number}
            />
          ))}
        </View>
        <View style={styles.dashedView}>
          <DashedView value="N 100,340.00" showErnings={true} />
        </View>
        <View style={styles.subtitleView}>
          <Text style={styles.subtitle}>{strings.tranzactions.subTitle}</Text>
          {_tranzactions.map((x, index) => (
            <TranzactionComponent
              key={index}
              name={x.name}
              text={x.text}
              value={x.value}
              date={x.date}
              status={x.status}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default TranzactionScreen;
