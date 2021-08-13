import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import BackComponent from '../components/BackComponent';
import LinearGradient from 'react-native-linear-gradient';
import grad from '../components/ColorEaseing';
import colors from '../theme/colors';
import CircularProgress from '../components/CircularProgress';
import images from '../theme/images';
import { useNavigation } from "@react-navigation/native";
import {LinearTextGradient} from 'react-native-text-gradient';
import TranzactionComponent from '../components/TranzactionComponent'
import strings from '../theme/strings';
import styles from './styles/profileScreenStyles'
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
const ProfileScreen = () => {
  
  const navigation = useNavigation();
  const NavigateTo = (screnName) => navigation.navigate(screnName)
  const NavigateBack = () => navigation.goBack();
  return (
    <View style={styles.background}>
      <BackComponent text={strings.profile.back} navBack={NavigateBack}/>
      <ScrollView>
      <View style={styles.titleView}>
  <Text style={styles.titleText}>{strings.profile.title}</Text>
      </View>
      <LinearGradient
        style={styles.gradientStyle}
        colors={grad.grad.colors}
        locations={grad.grad.locations}
        start={{x: 0.5, y: 0}}
        end={{x: 0.5, y: 1}}>
        <CircularProgress
          value={50}
          activeStrokeWidth={8}
          inActiveStrokeWidth={6}
          radius={65}
          inActiveStrokeColor={colors.bridal_heath}
          inActiveStrokeOpacity={0.5}
          activeStrokeColor={colors.bridal_heath}
        />
        <View style={styles.nameView}>
          <Text style={styles.nameText}>
          {strings.profile.name}
          </Text>
        </View>
        <View style={styles.valueView}>
          <Image style={styles.valueImg} source={images.wallet} />
          <Text style={styles.valueText}>{strings.profile.value}</Text>
        </View>
        <TouchableOpacity style={styles.buttonView} onPress={() => NavigateTo('Settings')}>
          <LinearTextGradient
            colors={grad.grad.colors}
            locations={grad.grad.locations}
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}>
            <Text>{strings.profile.button}</Text>
          </LinearTextGradient>
        </TouchableOpacity>
      </LinearGradient>
      <View style={styles.tranzactionsView}>
            <Text style={styles.tranzactionsTitleText}>{strings.tranzactions.subTitle}</Text>
            {_tranzactions.map((x,index) => <TranzactionComponent key={index} name={x.name} text={x.text} value={x.value} date={x.date} status={x.status}/>)}
            </View>
            </ScrollView>
    </View>
  );
};

export default ProfileScreen;
