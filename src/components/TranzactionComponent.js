import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import images from '../theme/images';
import styles from './styles/tranzactionsComponentStyles';
const steam = 'steam';
const amazon = 'amazon';
const itunes = 'itunes';
const TranzactionComponent = ({name, text, value, date, status}) => {
  let img;
  let stat;
  let logo;
  switch (name) {
    case steam:
      img = images.steam_profile;
      logo = images.card_logo
      break;
    case amazon:
      img = images.amazon_profile;
      logo = images.card_logo
      break;
    case itunes:
      img = images.itunes_profile;
      logo = images.itunes_logo
      break;
    default:
      break;
  }
  switch (status) {
    case true:
      stat = 'Succseful';
      break;
    case false:
      stat = 'Faild';
      break;
  }
  return (
    <View style={styles.background}>
      <ImageBackground
        style={styles.imageBackground}
        source={img}>
        <Image source={logo} />
      </ImageBackground>
      <View style={styles.mainView}>
        <View style={styles.topView}>
          <View style={styles.nameView}>
            <Text style={styles.nameText}>{text}</Text>
          </View>
          <View style={styles.valueView}>
            <Text style={styles.valueText}>
              N <Text>{value}</Text>
            </Text>
          </View>
        </View>

        <View style={styles.bottomView}>
          <View style={styles.statusView}>
            <Text style={status ? styles.activeStatus : styles.inactiveStatus}>
              {stat}
            </Text>
          </View>
          <View style={styles.dateView}>
            <Text style={styles.dateText}>{date}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TranzactionComponent;
