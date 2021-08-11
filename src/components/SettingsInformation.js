import React from 'react';
import {View, Text, TextInput} from 'react-native';

const SettingsInformation = ({
  inputOne,
  inputTwo,
  inputThree,
  placeHolderOne,
  placeHolderTwo,
  placeHolderThree,
  setOne,
  setTwo,
  setThree,
  title,
  accountInfo
}) => {
  return (
    <View style={{marginLeft: 44}}>
      <Text style={{color: '#626262', marginBottom: 15}}>
       {title}
      </Text>
      <View
        style={{
          marginRight: 44,
          height: 42,
          borderWidth: 1,
          borderColor: '#D1D1D1',
          borderRadius: 5,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{flex: 1, marginLeft: 22}}>
          <Text style={{fontSize: 12, color: '#A6A6A6'}}>{inputOne}</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <TextInput
            onChangeText={text => setOne({...accountInfo,firstName:'Buna'})}
            placeholder={placeHolderOne}
            place
            style={{flex: 1, fontSize: 12, color: '#A6A6A6'}}></TextInput>
        </View>
      </View>
      <View
        style={{
          marginRight: 44,
          height: 42,
          borderWidth: 1,
          borderColor: '#D1D1D1',
          borderRadius: 5,
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <View style={{flex: 1, marginLeft: 22}}>
          <Text style={{fontSize: 12, color: '#A6A6A6'}}>{inputTwo}</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <TextInput
            onChangeText={text => setTwo(text)}
            placeholder={placeHolderTwo}
            place
            style={{flex: 1, fontSize: 12, color: '#A6A6A6'}}></TextInput>
        </View>
      </View>
      <View
        style={{
          marginRight: 44,
          height: 42,
          borderWidth: 1,
          borderColor: '#D1D1D1',
          borderRadius: 5,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{flex: 1, marginLeft: 22}}>
          <Text style={{fontSize: 12, color: '#A6A6A6'}}>{inputThree}</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <TextInput
            onChangeText={text => setThree(text)}
            placeholder={placeHolderThree}
            place
            style={{flex: 1, fontSize: 12, color: '#A6A6A6'}}></TextInput>
        </View>
      </View>
    </View>
  );
};

export default SettingsInformation;
