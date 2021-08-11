import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import TopComponent from '../components/TopComponent';
import {useNavigation} from '@react-navigation/native';
import CircleComponent from '../components/CircleComponent';
import DashedView from '../components/DashedView'
import images from '../theme/images';
import TranzactionComponent from '../components/TranzactionComponent';
import strings from '../theme/strings';
import styles from './styles/tranzactionsStyles';

const _tranzactions = [
    {
        name:strings.tranzactions.amazon,
        text:strings.tranzactions.amazonText,
        value:strings.tranzactions.amazonValue,
        date:strings.tranzactions.amazonDate,
        status:true
    },
    {
        name:strings.tranzactions.steam,
        text:strings.tranzactions.steamText,
        value:strings.tranzactions.steamValue,
        date:strings.tranzactions.steamDate,
        status:false
    },
    {
        name:strings.tranzactions.itunes,
        text:strings.tranzactions.itunesText,
        value:strings.tranzactions.itunesValue,
        date:strings.tranzactions.itunesDate,
        status:true
    }
]

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
        <Text style={styles.title}>
         {strings.tranzactions.title}
        </Text>
      </View>
      <View style={styles.topCircleView}>
        <CircleComponent
          radius={58}
          img={images.tranzactions_logo}
          text="Total Numbers"
          number={12}
        />
      </View>

      <View
        style={styles.bottomCirclesView}>
        <CircleComponent
          radius={42}
          img={images.aproved}
          text="Successful"
          number="08"
        />
        <CircleComponent
          radius={42}
          img={images.dots}
          text="In Progress"
          number="03"
        />
        <CircleComponent
          radius={42}
          img={images.close2}
          text="Total Numbers"
          number="01"
        />
      </View>
      <View style={styles.dashedView}>
      <DashedView value='N 100,340.00' showErnings={true}/>
      </View>
      <View style={styles.subtitleView}>
            <Text style={styles.subtitle}>{strings.tranzactions.subTitle}</Text>
            {_tranzactions.map((x,index) => <TranzactionComponent key={index} name={x.name} text={x.text} value={x.value} date={x.date} status={x.status}/>)}
            </View>
        </ScrollView>
    </View>
  );
};

export default TranzactionScreen;
