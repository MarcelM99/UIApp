import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import LinearGradient from 'react-native-linear-gradient';
import {LinearTextGradient} from 'react-native-text-gradient';
import BackComponent from '../components/BackComponent';
import CircularProgress from '../components/proggresBars/CircularProgress';
import grad from '../components/ColorEaseing';
import TranzactionComponent from '../components/TranzactionComponent';
import colors from '../theme/colors';
import images from '../theme/images';
import strings from '../theme/strings';
import styles from './styles/profileStyles';

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
const ProfileScreen = () => {
 
  const navigation = useNavigation();
  const NavigateTo = (screnName) => navigation.navigate(screnName)
  const NavigateBack = () => navigation.goBack();

  return (
    <View style={styles.background}>
      <BackComponent text="Back" navBack={NavigateBack}/>
      <ScrollView>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>{strings.profile.title}</Text>
        </View>
        <LinearGradient
          style={styles.linearGradient}
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
            <Text style={styles.nameText}>{strings.profile.name}</Text>
          </View>
          <View style={styles.imageView}>
            <Image style={styles.image} source={images.wallet} />
            <Text style={styles.imageText}>{strings.profile.value}</Text>
          </View>
          <TouchableOpacity style={styles.editButton} onPress={() => NavigateTo('Settings')}>
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
          <Text style={styles.tranzactionsText}>
            {strings.tranzactions.subTitle}
          </Text>
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

export default ProfileScreen;
