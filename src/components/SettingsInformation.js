import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles/settingsInformationStyles';

const SettingsInformation = ({
  inputOne,
  inputTwo,
  inputThree,
  placeHolderOne,
  placeHolderTwo,
  placeHolderThree,
  setDatas,
  title,
}) => {
  const [text, setText] = useState();
  return (
    <View style={styles.background}>
      <Text style={styles.titleText}>{title}</Text>
      <View style={styles.topBottomView}>
        <View style={styles.inputTextView}>
          <Text style={styles.inputText}>{inputOne}</Text>
        </View>
        <View style={styles.inputView}>
          <TextInput
            onChangeText={text => setText(text)}
            onEndEditing={() =>
              inputOne != 'Password'
                ? setDatas(prevState => ({...prevState, firstName: text}))
                : setDatas(prevState => ({...prevState, password: text}))
            }
            placeholder={placeHolderOne}
            place
            style={styles.textInput}></TextInput>
        </View>
      </View>
      <View style={styles.middleView}>
        <View style={styles.inputTextView}>
          <Text style={styles.inputText}>{inputTwo}</Text>
        </View>
        <View style={styles.inputView}>
          <TextInput
            onChangeText={text => setText(text)}
            onEndEditing={() =>
              inputOne != 'Password'
                ? setDatas(prevState => ({...prevState, lastName: text}))
                : setDatas(prevState => ({...prevState, newPassword: text}))
            }
            placeholder={placeHolderTwo}
            place
            style={styles.textInput}></TextInput>
        </View>
      </View>
      <View style={styles.topBottomView}>
        <View style={styles.inputTextView}>
          <Text style={styles.inputText}>{inputThree}</Text>
        </View>
        <View style={styles.inputView}>
          <TextInput
            onChangeText={text => setText(text)}
            onEndEditing={() =>
              inputOne != 'Password'
                ? setDatas(prevState => ({...prevState, phoneNumber: text}))
                : setDatas(prevState => ({...prevState, retryPassword: text}))
            }
            placeholder={placeHolderThree}
            place
            style={styles.textInput}></TextInput>
        </View>
      </View>
    </View>
  );
};

export default SettingsInformation;
