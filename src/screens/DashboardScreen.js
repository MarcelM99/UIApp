import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import BackComponent from '../components/BackComponent';
import grad from '../components/ColorEaseing';
import {LinearTextGradient} from 'react-native-text-gradient';
import images from '../theme/images';
import Card from '../components/CardComponent';
import strings from '../theme/strings';
import styles from './styles/dashboardScreenStyle';
import { useNavigation } from "@react-navigation/native";
import colors from '../theme/colors';
const _cards = [
  { name:strings.dashboard.bitcoin,
    background: images.bitcoin,
    logo: images.bitcoin_logo,
    icon: images.bitcoin_icon,
    colors:{0:colors.flush_orange,1:colors.cinnabar},
    currency:strings.dashboard.bitcoinCurency,
    subtitle:strings.dashboard.bitcoinSubtitle,
    multipleOptions:false
  },
  { name:strings.dashboard.ethereum,
    background: images.ethereum,
    logo: images.ethereum_logo,
    icon: images.ethereum_icon,
    text: images.ethereum_text,
    colors:{0:colors.aqua,1:colors.blue_ribbon},
    currency:strings.dashboard.ethereumCurrency,
    subtitle:strings.dashboard.ethereumSubtitle,
    multipleOptions:false
  },
  { name:strings.dashboard.amazon,
    background: images.amazon,
    logo: images.amazon_logo,
    icon: images.amazon_icon,
    text: images.amazon_text,
    colors:{0:colors.tickle_pink,1:colors.persian_blue},
    currency:strings.dashboard.amazonCurrency,
    subtitle:strings.dashboard.amazonSubtitle,
    multipleOptions:true,
  },
  { name:strings.dashboard.apple,
    background: images.apple,
    logo: images.apple_logo,
    icon: images.apple_icon,
    text: images.apple_text,
    colors:{0:colors.aqua,1:colors.blue_ribbon},
    currency:strings.dashboard.appleCurrency,
    subtitle:strings.dashboard.appleSubtitle,
    multipleOptions:true
  },
  { name:strings.dashboard.steam,
    background: images.amazon,
    logo: images.steam_logo,
    icon: images.steam_icon,
    text: images.steam_text,
    mini: images.steam_mini,
    colors:{0:colors.tickle_pink,1:colors.persian_blue},
    currency:strings.dashboard.steamCurrency,
    subtitle:strings.dashboard.steamSubtile,
    multipleOptions:true
  },
  { name:strings.dashboard.google,
    background: images.google_background,
    logo: images.google_logo,
    icon: images.google_icon,
    text: images.google_text,
    colors:{0:colors.aquamarine,1:colors.mattise},
    currency:strings.dashboard.googleCurrency,
    subtitle:strings.dashboard.googleSubtitle,
    multipleOptions:true
  },
  { name:strings.dashboard.others,
    background: images.others,
    logo: images.others_logo,
    icon: images.others_icon,
    text: images.others_text,
    colors:{0:colors.tickle_pink,1:colors.persian_blue},
    subtitle:strings.dashboard.othersSubtitle,
    multipleOptions:true
  },
];
const DashBoardScreen = () => {
    const navigation = useNavigation();
    const NavigateTo = (screnName,background,logo,text,mini,iconx,name,colors,currency,subtitle,multipleOptions) => navigation.navigate(screnName,{
        background:background,
        logo:logo,
        iconx:iconx,
        text:text,
        mini:mini,
        name:name,
        colors:colors,
        currency:currency,
        subtitle:subtitle,
        multipleOptions:multipleOptions
    })
    const NavigateBack = () => navigation.goBack();
  return (
    <View style={styles.background}>
      <BackComponent text={strings.dashboard.back} showCircle={true} navBack={NavigateBack}/>
      <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}>
        <View style={styles.titleView}>
          <LinearTextGradient
            style={styles.gradient}
            colors={grad.grad.colors}
            start={{x: 0.5, y: 0}}
            locations={grad.grad.locations}
            end={{x: 0.5, y: 1}}>
            <Text>{strings.dashboard.welcomeMessage}</Text>
          </LinearTextGradient>
        </View>

        <View style={styles.subTitleView}>
          <Text>{strings.dashboard.subTitleText1}</Text>
          <Text style={styles.subTitletext}>
            {strings.dashboard.subTitleText2}
          </Text>
        </View>
        {_cards.map((x, index) => (
          <Card
            key={index}
            background={x.background}
            logo={x.logo}
            icon={x.icon}
            text={x.text}
            mini={x.mini}
            name={x.name}
            subtitle={x.subtitle}
            colors={x.colors}
            multipleOptions={x.multipleOptions}
            navTo={NavigateTo}
            currency={x.currency}
            screenName='CardOpen'
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default DashBoardScreen;
