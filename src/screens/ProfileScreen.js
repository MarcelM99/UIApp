import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import BackComponent from '../components/BackComponent';
import LinearGradient from 'react-native-linear-gradient';
import grad from '../components/ColorEaseing';
import colors from '../theme/colors';
import CircularProgress from '../components/CircularProgress';
import images from '../theme/images';
import {LinearTextGradient} from 'react-native-text-gradient';
import TranzactionComponent from '../components/TranzactionComponent'
import strings from '../theme/strings';
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
  return (
    <View style={{flex: 1, backgroundColor: '#FFFBF7'}}>
      <BackComponent text="Back" />
      <ScrollView>
      <View style={{marginLeft: 28, marginTop: 28}}>
        <Text style={{fontSize: 16, color: '#626262'}}>Profile</Text>
      </View>
      <LinearGradient
        style={{
          alignItems: 'center',
          paddingVertical: 38,
          marginTop: 20,
          marginBottom: 38,
        }}
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
        <View style={{marginTop: 10}}>
          <Text style={{fontSize: 22, fontWeight: 'bold', color:'#FFFBF7' }}>
            Bosun Jones
          </Text>
        </View>
        <View style={{flexDirection: 'row',marginTop:4}}>
          <Image style={{marginRight: 10}} source={images.wallet} />
          <Text style={{color: '#FFFBF7'}}># 100,340.00</Text>
        </View>
        <TouchableOpacity style={{marginTop:14,backgroundColor:'#FFFBF7',paddingHorizontal:22,paddingVertical:6,borderRadius:5}}>
          <LinearTextGradient
            colors={grad.grad.colors}
            locations={grad.grad.locations}
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}>
            <Text>Edit Profile</Text>
          </LinearTextGradient>
        </TouchableOpacity>
      </LinearGradient>
      <View style={{marginTop:40,marginHorizontal:28,marginBottom:20}}>
            <Text style={{color:'#626262',marginBottom:26}}>{strings.tranzactions.subTitle}</Text>
            {_tranzactions.map((x,index) => <TranzactionComponent key={index} name={x.name} text={x.text} value={x.value} date={x.date} status={x.status}/>)}
            </View>
            </ScrollView>
    </View>
  );
};

export default ProfileScreen;
